export const state = {
  configuration: {}
}

export const getters = {
  configuration: (state) => { return state.configuration }
}

export const mutations = {
  UPDATE_CONFIGURATION (state, newConfiguration) {
    state.configuration = newConfiguration
  }
}

export const actions = {
  async getMovieDBConfig ({ commit }) {
    const response = await this.$axios.get('https://api.themoviedb.org/3/configuration?api_key=059b24ced08b9601d550dc1bda480265')
    commit('UPDATE_CONFIGURATION', response.data)
  }
}
