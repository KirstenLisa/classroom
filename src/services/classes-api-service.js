import config from '../config';

const ClassApiService = {
  getClasses() {
    return fetch(`${config.API_ENDPOINT}/classes`, {
      headers: {
        'content-type': 'application/json'
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getClass(classId) {
    return fetch(`${config.API_ENDPOINT}/classes/${classId}`, {
      headers: {
        'content-type': 'application/json'
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default ClassApiService;
