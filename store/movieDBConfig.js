import config from '@/config/api'

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
    const response = await this.$axios.get(`${config.api.url}/configuration?api_key=${config.api.apikey}`)
    commit('UPDATE_CONFIGURATION', response.data)
  }
}
