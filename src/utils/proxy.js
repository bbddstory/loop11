const http = require('http');
const httpProxy = require('http-proxy');
// Reverse proxy for the surrogate server to consume
const reverseProxy = httpProxy.createProxyServer();
// The actual target URL
const targetUrl = 'https://test-api.loop11.com/v1/slack/';
// Local server ports
const proxyPort = '5050';

// Must set CORS headers to avoid CORB in Chrome (doesn't work in Firefox)
reverseProxy.on('proxyRes', (proxyRes, req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'application/json');
});

// Surrogate server for local dev to access
const surrogateServer = http.createServer((req, res) => {
  console.log();
  console.log(`Request received: ${new Date()}`);
  console.log(`URL: ${req.url}`);
  console.log(`Method: ${req.method}`);

  if (req.method === 'OPTIONS') {
    /**
     * Response to preflight request, for header details please refer to:
     * https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
     * The following three headers are compulsory.
     */
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end();
  } else {
    req.headers = {
      'Content-Type': 'application/json',
    };

    // Use 'web' mode to relay the requests
    reverseProxy.web(req, res, { target: targetUrl });
  }
});

surrogateServer.listen(proxyPort);

console.log(`-- Reverse proxy running on port ${proxyPort}`);
