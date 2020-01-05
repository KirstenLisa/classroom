import config from '../config'
import { get } from 'http';
//import TokenService from '../services/token-service'

const HomeworkApiService = {
  getHomework() {
    return fetch(`${config.API_ENDPOINT}/homework`, {
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
  getHomeworkItem(homeworkId) {
    return fetch(`${config.API_ENDPOINT}/homework/${homeworkId}`, {
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

  deleteHomework(id) {
    console.log('api service')
    return fetch(`${config.API_ENDPOINT}/homework/${id}`, {
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

  updateHomework(id, updatedHomework) {
    console.log('inside patch update')

    return fetch(`${config.API_ENDPOINT}/homework/${id}`, {
      method: 'PATCH',
      headers: {
      'content-type': 'application/json'
   // 'authorization': `basic ${TokenService.getAuthToken()}`,
   },
   body: JSON.stringify(
     updatedHomework
   )
  })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  
  },

  postHomework(newHomework) {
    (console.log('inside post homework'))
   
    return fetch(`${config.API_ENDPOINT}/homework`, {
      method: 'POST',
      headers: {
      'content-type': 'application/json'
   // 'authorization': `basic ${TokenService.getAuthToken()}`,
   },
   body: JSON.stringify(
     newHomework
   )
  })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
},
  getHomeworkComments(homeworkId) {
    return fetch(`${config.API_ENDPOINT}/homework-comments/${homeworkId}`, {
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
    return fetch(`${config.API_ENDPOINT}/homework-comments/`, {
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

export default HomeworkApiService
