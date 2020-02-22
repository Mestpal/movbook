import { mutations, getters, actions } from '@/store/infiniteLoad'

describe('colorManager.js', () => {
  const state = {
    page: 1
  }
  const newPage = 3

  it('returs page', () => {
    const page = getters.page(state)

    expect(page).toEqual(state.page)
  })

  it('UPDATE_PAGE update page', () => {
    mutations.UPDATE_PAGE(state, newPage)

    expect(state).toEqual({
      page: newPage
    })
  })

  it('updatePage action', () => {
    const commit = jest.fn()
    actions.updatePage({ commit }, newPage)

    expect(commit).toHaveBeenCalledWith('UPDATE_PAGE', newPage)
  })
})
