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
    const response = await this.$axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=059b24ced08b9601d550dc1bda480265&language=en-US')
    commit('UPDATE_GENRES', response.data.genres)
  },
  updateSelectedGenre ({ commit }, data) {
    if (data.id && data.name) {
      commit('UPDATE_SELECTED_GENRE', data)
    }
  }
}
