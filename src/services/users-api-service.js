import config from '../config'

const UsersApiService = {
  getUsers() {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
     },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getUser(username) {
    return fetch(`${config.API_ENDPOINT}/users/${username}`, {
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  postUser(newUser) {
   
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
      'content-type': 'application/json',
   },
   body: JSON.stringify(
     newUser
   )
  })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
}
}

  


export default UsersApiService