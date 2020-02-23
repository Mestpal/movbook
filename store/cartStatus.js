export const state = {
  cartItems: []
}

export const getters = {
  cartItems: (state) => { return state.cartItems }
}

export const mutations = {
  UPDATE_CART (state, newItem) {
    console.log('newItem')
    state.cartItems.push(newItem)
  },
  REMOVE_CONTENT_BY_ID (state, id) {
    let found = false
    state.cartItems.forEach((item, index) => {
      if (item.id === id && !found) {
        state.cartItems.splice(index, 1)
        found = true
      }
    })
  }
}

export const actions = {
  addItemToCart ({ commit }, newItem) {
    console.log('newItem')
    commit('UPDATE_CART', newItem)
  },
  deleteContent ({ commit }, id) {
    commit('REMOVE_CONTENT_BY_ID', id)
  }
}
