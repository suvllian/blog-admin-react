import fetch from 'isomorphic-fetch';

// const URL = "./static/api/index.php";
const URL = 'http://www.suvllian.com/sadmin/index.php';

const postInit = formData => {
  return {
    method: 'POST',
    mode: 'cors',
    cache: 'default',
    body: formData
  };
};

exports.postFetch = formData => {
  let data = postInit(formData);
  return fetch(URL, data).then(response => response.json());
};

exports.getFetch = data => {
  let urlWithParams = URL + '?' + data;
  return fetch(urlWithParams).then(response => response.json());
};
