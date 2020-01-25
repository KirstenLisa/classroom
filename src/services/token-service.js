import config from '../config'

const TokenService = {
  saveAuthToken(token) {
    window.sessionStorage.setItem(config.TOKEN_KEY, token)
  },
  getAuthToken() {
    return window.sessionStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
    window.sessionStorage.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },
  saveUser(value) {
    console.log(value)
    return window.sessionStorage.setItem('userType', value)
  },
  saveUsername(username) {
    console.log(username)
    return window.sessionStorage.setItem('username', username)
  },

  saveClass(classId) {
    console.log(classId)
    return window.sessionStorage.setItem('classId', classId)
  },

  clearUser() {
    return window.sessionStorage.removeItem('userType')
  },

  clearUsername() {
    return window.sessionStorage.removeItem('username')
  },

  clearClass() {
    return window.sessionStorage.removeItem('classId')
  }
}

export default TokenService