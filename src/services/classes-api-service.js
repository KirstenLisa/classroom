import config from '../config'
//import TokenService from '../services/token-service'

const ClassApiService = {
  getClasses() {
    return fetch(`${config.API_ENDPOINT}/classes`, {
      //headers: {
     // 'authorization': `basic ${TokenService.getAuthToken()}`,
     // },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getClass(classId) {
    return fetch(`${config.API_ENDPOINT}/classes/${classId}`, {
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
}
  
export default ClassApiService