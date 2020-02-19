export const state = {
  genres: []
}

export const getters = {
  genres: (state) => { return state.genres }
}

export const mutations = {
  UPDATE_GENRES (state, newGenres) {
    state.genres = newGenres
  }
}

export const actions = {
  async getFilmGenres ({ commit }) {
    const response = await this.$axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=059b24ced08b9601d550dc1bda480265&language=en-US')
    commit('UPDATE_GENRES', response.data.genres)
  }
}
