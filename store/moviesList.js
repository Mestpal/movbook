import config from '@/config/api'

export const state = {
  moviesList: []
}

export const getters = {
  moviesList: (state) => { return state.moviesList }
}

export const mutations = {
  UPDATE_MOVIE_LIST (state, newMovies) {
    state.moviesList = state.moviesList.concat(newMovies)
  },
  RESET (state) {
    state.moviesList = []
  }
}

export const actions = {
  async getMoviesList ({ commit }, data) {
    const response = await this.$axios.get(`${config.api.url}/discover/movie?api_key=${config.api.apikey}&language=en-US&sort_by=original_title.asc&include_adult=false&include_video=false&page=${data.page}&with_genres=${data.genreId}`)
    commit('UPDATE_MOVIE_LIST', response.data.results)
  },
  async getMoviesListLive ({ commit }, data) {
    const response = await this.$axios.get(`${config.api.url}/search/movie?api_key=${config.api.apikey}&language=en-US&query=${data.query}&page=${data.page}&include_adult=false`)
    commit('UPDATE_MOVIE_LIST', response.data.results)
  },
  resetMovieListData ({ commit }) {
    commit('RESET')
  }
}
