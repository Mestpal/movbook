import config from '@/config/api'

export const state = {
  genres: [],
  selectedGenre: {}
}

export const getters = {
  genres: (state) => { return state.genres },
  selectedGenre: (state) => { return state.selectedGenre }
}

export const mutations = {
  UPDATE_GENRES (state, newGenres) {
    state.genres = newGenres
  },
  UPDATE_SELECTED_GENRE (state, selectedGenre) {
    state.selectedGenre = selectedGenre
  }
}

export const actions = {
  async getFilmGenres ({ commit }) {
    const response = await this.$axios.get(`${config.api.url}/genre/movie/list?api_key=${config.api.apikey}&language=en-US`)
    commit('UPDATE_GENRES', response.data.genres)
  },
  updateSelectedGenre ({ commit }, data) {
    if (data.id && data.name) {
      commit('UPDATE_SELECTED_GENRE', data)
    }
  }
}
