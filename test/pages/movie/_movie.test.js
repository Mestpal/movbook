import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'

import index from '@/pages/movie/_movie.vue'
import { getters } from '@/store/movieDBConfig'
Vue.use(Vuetify)
Vue.use(Vuex)
const localVue = createLocalVue()

describe('_movie index.vue page', () => {
  const $route = {
    params: {
      movie: 11111111
    }
  }

  const movieData = {
    adult: false,
    backdrop_path: '/l5n4h4gmRtjfc0BMAXoJa6P9VC5.jpg',
    belongs_to_collection: null,
    budget: 0,
    genres: [
      { id: 28, name: 'Action' },
      { id: 35, name: 'Comedy' }
    ],
    homepage: '',
    id: 19133,
    imdb_id: 'tt0074205',
    original_language: 'en',
    original_title: 'The Big Bus',
    overview: "The ultimate disaster film parody. A nuclear powered bus is making it's maiden non-stop trip from New York to Denver. The journey is plagued by disasters due to the machinations of a mysterious group allied with the oil lobby. Will the down on his luck driver, with a reputation for eating his passengers, be able to complete the journey?",
    popularity: 5.348,
    poster_path: '/1DEKj25WaQvKQR1duZdXBJGVAFJ.jpg',
    production_companies: [
      {
        id: 4,
        logo_path: '/fycMZt242LVjagMByZOLUGbCvv3.png',
        name: 'Paramount',
        origin_country: 'US'
      }
    ],
    production_countries: [
      { iso_3166_1: 'US', name: 'United States of America' }
    ],
    release_date: '1976-06-23',
    revenue: 0,
    runtime: 88,
    spoken_languages: [
      { iso_639_1: 'en', name: 'English' }
    ],
    status: 'Released',
    tagline: 'The ride of your life.',
    title: 'The Big Bus',
    video: false,
    vote_average: 5.3,
    vote_count: 46
  }

  let wrapper
  beforeEach(() => {
    wrapper = mount(index, {
      localVue,
      propsData: {
        movieData
      },
      computed: {
        configuration () {
          return {
            images: {
              base_url: 'test_base_url/'
            }
          }
        }
      },
      getters,
      mocks: {
        $route
      }
    })
  })

  it('reders the page', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
