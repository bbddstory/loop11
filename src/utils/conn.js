import axios from 'axios';

export function getData() {
  const promise = axios.get('http://localhost:5050/');

  return promise.then((res) => {
    if (res.status === 200) {
      return res.data;
    }
    return 'error';
  }).catch(err => console.log(err));
}

export function postData(data) {
  const promise = axios.post('http://localhost:5050/', data);

  return promise.then((res) => {
    if (res.status === 200) {
      return res.data;
    }
    return 'error';
  }).catch(err => console.log(err));
}
