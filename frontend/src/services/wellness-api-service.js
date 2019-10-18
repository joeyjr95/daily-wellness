import TokenService from '../services/token-service'
import config from '../config'

const WellnessApiService = {
  async getUser(userId) {
    const res = await fetch(`${config.API_ENDPOINT}/api/user/${userId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    });
    return await ((!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json());
  },
  async getReflections() {
    const res = await fetch(`${config.API_ENDPOINT}/api/reflections`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
    });
    return await ((!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json());
  },

  async getAverages() {
    const res = await fetch(`${config.API_ENDPOINT}/api/averages`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
    });
    return await ((!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json());
  },
  
  async getReflection(reflectionId) {
    const res = await fetch(`${config.API_ENDPOINT}/api/reflections/${reflectionId}`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    });
    return await ((!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json());
  },
  async postReflection(reflection) {
    const res = await fetch(`${config.API_ENDPOINT}/api/reflections`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(reflection),
    });
    return await ((!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json());
  }
}

export default WellnessApiService
