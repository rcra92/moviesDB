import axios from 'axios'

const searchUrl = `search/movie?api_key=${process.env.API_KEY}&language=pt-BR&page=1&include_adult=false`

export default class Api {
  static searchMovies(params = { query: '' }) {
    const uri = process.env.BASE_URL + searchUrl + `&query=${params.query}`

    return axios({
      method: 'GET',
      responseType: 'json',
      headers: { 'Content-type': 'application/json' },
      url: uri,
    })
  }
}
