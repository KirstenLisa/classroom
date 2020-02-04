import config from '../config';
import TokenService from './token-service';

const UpdateApiService = {
  getUpdates() {
    return fetch(`${config.API_ENDPOINT}/updates`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getUpdate(updateId) {
    return fetch(`${config.API_ENDPOINT}/updates/${updateId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  deleteUpdate(updateId) {
    return fetch(`${config.API_ENDPOINT}/updates/${updateId}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  updateUpdate(updateId, updatedUpdate) {
    return fetch(`${config.API_ENDPOINT}/updates/${updateId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(updatedUpdate)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  postUpdate(newUpdate) {
    return fetch(`${config.API_ENDPOINT}/updates`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(newUpdate)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getUpdateComments(updateId) {
    return fetch(`${config.API_ENDPOINT}/updates-comments/${updateId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  postComment(newComment) {
    return fetch(`${config.API_ENDPOINT}/updates-comments/`, {
      method: 'POST',
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(newComment)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default UpdateApiService;
