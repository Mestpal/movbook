import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import index from '@/pages/search/index'
import { getters } from '@/store/movieDBConfig'
import { gettersML } from '@/store/moviesList'
Vue.use(Vuetify)
Vue.use(Vuex)
const localVue = createLocalVue()

describe('search index.vue page', () => {
  const $route = {
    query: {
      q: 'Test'
    }
  }

  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(index, {
      localVue,
      mocks: {
        $route
      },
      computed: {
        moviesList: [],
        configuration: {}
      },
      getters: {
        getters,
        gettersML
      },
      methods: {
        getMoviesListLive () {
          return ''
        },
        resetMovieListData () {
          return ''
        }
      },
      watch: {
        query (newValue) {
          return ''
        }
      }
    })
  })

  it('reders the page', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
