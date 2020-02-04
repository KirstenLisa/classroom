import config from '../config';

const TeacherApiService = {
  getTeachers() {
    return fetch(`${config.API_ENDPOINT}/teachers`, {
      headers: {
        'content-type': 'application/json'
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getTeacher(teacherId) {
    return fetch(`${config.API_ENDPOINT}/teachers/${teacherId}`, {
      headers: {
        'content-type': 'application/json'
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default TeacherApiService;
