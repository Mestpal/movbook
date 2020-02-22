import { mutations, getters } from '@/store/movieDBConfig'

describe('mobieDBConfig.js', () => {
  const state = {
    configuration: {}
  }
  const newConfig = {
    configuration: {
      images: {
        base_url: "http://image.tmdb.org/t/p/",
        secure_base_url: "https://image.tmdb.org/t/p/",
        backdrop_sizes: [
          'w300',
          'w780',
          'w1280',
          'original'
        ],
        logo_sizes: [
          'w45',
          'w92',
          'w154',
          'w185',
          'w300',
          'w500',
          'original'
        ],
        poster_sizes: [
          'w92',
          'w154',
          'w185',
          'w342',
          'w500',
          'w780',
          'original'
        ],
        profile_sizes: [
          'w45',
          'w185',
          'h632',
          'original'
        ],
        still_sizes: [
          'w92',
          'w185',
          'w300',
          'original'
        ]
      },
      status: true
    }
  }

  it('returs configuration', () => {
    const configuration = getters.configuration(state)

    expect(configuration).toEqual(state.configuration)
  })

  it('UPDATE_CONFIGURATION', () => {
    mutations.UPDATE_CONFIGURATION(state, newConfig)

    expect(state.configuration).toEqual(newConfig)
  })
})
