export const state = {
  page: 1
}

export const getters = {
  page: (state) => { return state.page }
}

export const mutations = {
  UPDATE_PAGE (state, newPage) {
    state.page = newPage
  }
}

export const actions = {
  updatePage ({ commit }, newPage) {
    commit('UPDATE_PAGE', newPage)
  }
}
