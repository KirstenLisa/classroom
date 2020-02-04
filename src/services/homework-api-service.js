import config from '../config';
import TokenService from "./token-service";

const HomeworkApiService = {
  getHomework() {
    return fetch(`${config.API_ENDPOINT}/homework`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getHomeworkItem(homeworkId) {
    return fetch(`${config.API_ENDPOINT}/homework/${homeworkId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  deleteHomework(id) {
    return fetch(`${config.API_ENDPOINT}/homework/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  updateHomework(id, updatedHomework) {
    return fetch(`${config.API_ENDPOINT}/homework/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(updatedHomework)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  postHomework(newHomework) {
    return fetch(`${config.API_ENDPOINT}/homework`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(newHomework)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getHomeworkComments(homeworkId) {
    return fetch(`${config.API_ENDPOINT}/homework-comments/${homeworkId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  postComment(newComment) {
    return fetch(`${config.API_ENDPOINT}/homework-comments/`, {
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

export default HomeworkApiService;
