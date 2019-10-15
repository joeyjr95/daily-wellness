import TokenService from '../services/token-service'
import config from '../config'

const WellnessApiService = {
  getReflections() {
    return fetch(`${config.API_ENDPOINT}/api/reflections`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getReflection(reflectionId) {
    return fetch(`${config.API_ENDPOINT}/api/reflections/${reflectionId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postReflection(
    user_id,
    physical_rating,
    physical_content,
    mental_rating,
    mental_content,) {
    return fetch(`${config.API_ENDPOINT}/api/reflections`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
      user_id,
      physical_rating,
      physical_content,
      mental_rating,
      mental_content,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default WellnessApiService
