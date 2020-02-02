import config from '../config'

const ScoreApiService = {
  getScores() {
    return fetch(`${config.API_ENDPOINT}/scores`, {

    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default ScoreApiService
