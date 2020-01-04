import config from '../config'
//import TokenService from '../services/token-service'

const TeacherApiService = {
  getTeachers() {
    return fetch(`${config.API_ENDPOINT}/teachers`, {
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
  getTeacher(teacherId) {
    return fetch(`${config.API_ENDPOINT}/teachers/${teacherId}`, {
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
  
export default TeacherApiService
