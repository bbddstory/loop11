# Loop11

A front-end exercise from Loop11.

In order to setup the project quickly and have a smoother development, it was bootstrapped with Create React App. As the UI was relatively simple, I didn't use any state container like Redux, data were passed around using props.

## How to Start

Install all packages:

### `npm i`

The project needs to send requests to an endpoint with CORS enabled, which prevented access (although I did't know whether that was part of the exercise). So I had to use a proxy for it. Please execute the following script:

### `npm run proxy`

Then wait until you see this message in the terminal:

### `"-- Reverse proxy running on port 5050"`

Lastly, in a different terminal use this script to start the project:

### `npm start`

The browser will open automatically. Tested in Chrome v70, Firefox v63 and Microsoft Edge.
