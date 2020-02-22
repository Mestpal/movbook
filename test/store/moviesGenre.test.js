import { mutations, getters, actions } from '@/store/moviesGenre'

describe('movineGenre.js', () => {
  const state = {
    genre: [],
    selectedGenre: {}
  }
  const newSelectedGenre = {
    id: 12,
    name: 'adventure'
  }
  const newGenres = [newSelectedGenre]

  it('returs genres', () => {
    const genres = getters.genres(state)

    expect(genres).toEqual(state.genres)
  })

  it('returs selectedGenre', () => {
    const selectedGenre = getters.selectedGenre(state)

    expect(selectedGenre).toEqual(state.selectedGenre)
  })

  it('UPDATE_GENRES', () => {
    mutations.UPDATE_GENRES(state, newGenres)

    expect(state.genres).toEqual(newGenres)
  })

  it('UPDATE_SELECTED_GENRE', () => {
    mutations.UPDATE_SELECTED_GENRE(state, newSelectedGenre)

    expect(state.selectedGenre).toEqual(newSelectedGenre)
  })

  it('updateSelectedGenre action', () => {
    const commit = jest.fn()
    actions.updateSelectedGenre({ commit }, newSelectedGenre)

    expect(commit).toHaveBeenCalledWith('UPDATE_SELECTED_GENRE', newSelectedGenre)
  })
})
