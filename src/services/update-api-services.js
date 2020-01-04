import config from '../config'
import { get } from 'http';
//import TokenService from '../services/token-service'

const UpdateApiService = {
  getUpdates() {
    return fetch(`${config.API_ENDPOINT}/updates`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
     // 'authorization': `basic ${TokenService.getAuthToken()}`,
     },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getUpdate(updateId) {
    return fetch(`${config.API_ENDPOINT}/updates/${updateId}`, {
      //headers: {
      //  'authorization': `basic ${TokenService.getAuthToken()}`,
     // },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  deleteUpdate(updateId) {
    console.log('api service')
    return fetch(`${config.API_ENDPOINT}/updates/${updateId}`, {
      method: 'DELETE'
      //headers: {
      //  'authorization': `basic ${TokenService.getAuthToken()}`,
     // },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  postUpdate(newUpdate) {
    (console.log('inside post update'))
   
    return fetch(`${config.API_ENDPOINT}/updates`, {
      method: 'POST',
      headers: {
      'content-type': 'application/json'
   // 'authorization': `basic ${TokenService.getAuthToken()}`,
   },
   body: JSON.stringify(
     newUpdate
   )
  })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
},

  getUpdateComments(updateId) {
    return fetch(`${config.API_ENDPOINT}/updates-comments/${updateId}`, {
     // headers: {
      //  'authorization': `basic ${TokenService.getAuthToken()}`,
    //  },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  
  postComment(newComment) {
    return fetch(`${config.API_ENDPOINT}/updates-comments/`, {
      method: 'POST',
      headers: {
       // 'authorization': `basic ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(
        newComment
      ),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default UpdateApiService
