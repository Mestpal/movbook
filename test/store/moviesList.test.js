import { mutations, getters, actions } from '@/store/moviesList'

describe('movieList.js', () => {
  const state = {
    moviesList: []
  }
  const newMovieList = [
    {
      popularity: 1.07,
      vote_count: 4,
      video: false,
      poster_path: '/bUfLZKgGUXQMZLI7d9tUlT1Vdt9.jpg',
      id: 55245,
      adult: false,
      backdrop_path: '/9yHD9ZYkJke20JPnRLFhj2MG7D0.jpg',
      original_language: 'en',
      original_title: '!Women Art Revolution',
      genre_ids: [
        99
      ],
      title: '!Women Art Revolution',
      vote_average: 4.4,
      overview: 'Through intimate interviews, provocative art, and rare, historical film and video footage, this feature documentary reveals how art addressing political consequences of discrimination and violence, the Feminist Art Revolution radically transformed the art and culture of our times.',
      release_date: '2010-01-01'
    }
  ]

  it('returs movieList', () => {
    const moviesList = getters.moviesList(state)

    expect(state.moviesList).toEqual(moviesList)
  })

  it('UPDATE_MOVIE_LIST', () => {
    mutations.UPDATE_MOVIE_LIST(state, newMovieList)

    expect(state.moviesList).toEqual(newMovieList)
  })

  it('RESET', () => {
    mutations.RESET(state)

    expect(state.moviesList).toEqual([])
  })

  it('resetMovieListData action', () => {
    const commit = jest.fn()
    actions.resetMovieListData({ commit })

    expect(commit).toHaveBeenCalledWith('RESET')
  })
})
