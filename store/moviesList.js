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
    const response = await this.$axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=059b24ced08b9601d550dc1bda480265&language=en-US&sort_by=original_title.asc&include_adult=false&include_video=false&page=${data.page}&with_genres=${data.genreId}`)
    commit('UPDATE_MOVIE_LIST', response.data.results)
  },
  async getMoviesListLive ({ commit }, data) {
    const response = await this.$axios.get(`https://api.themoviedb.org/3/search/movie?api_key=059b24ced08b9601d550dc1bda480265&language=en-US&query=${data.query}&page=1&include_adult=false`)
    commit('UPDATE_MOVIE_LIST', response.data.results)
  },
  resetMovieListData ({ commit }) {
    commit('RESET')
  }
}
