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
  postScore(user, score, difficulty) {
    return fetch(`${config.API_ENDPOINT}/scores`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        user_name: user,
        score,
        difficulty,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default ScoreApiService
