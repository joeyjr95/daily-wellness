import TokenService from '../services/token-service'
import config from '../config'

const WellnessApiService = {
   getUser(userId) {
    return fetch(`${config.API_ENDPOINT}/api/user/${userId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
    .then( res => (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json());
  },
   getReflections() {
    return fetch(`${config.API_ENDPOINT}/api/reflections`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
    .then( res => (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json());
  },

   getAverages() {
    return fetch(`${config.API_ENDPOINT}/api/averages`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
    .then( res => (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json());
      
  },
  
   getReflection(reflectionId) {
    return fetch(`${config.API_ENDPOINT}/api/reflections/${reflectionId}`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
    .then( res => (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json());
  },
   postReflection(reflection) {
    return fetch(`${config.API_ENDPOINT}/api/reflections`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(reflection),
    })
    .then( res => (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json());
  },
  deleteReflection(reflection) {
    return fetch(`${config.API_ENDPOINT}/api/reflections/${reflection}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
     
    })
  },
  patchReflection(reflection) {
    return fetch(`${config.API_ENDPOINT}/api/reflections/${reflection.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(reflection),
    })
    .catch(err => {
      this.setError(err)
    })
  },
}

export default WellnessApiService
