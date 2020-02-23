import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import index from '@/pages/index'
import { gettersDBC } from '@/store/movieDBConfig'
import { gettersG } from '@/store/moviesGenre'

Vue.use(Vuetify)
Vue.use(Vuex)
const localVue = createLocalVue()

describe('index.vue page', () => {
  let wrapper
  const genreList = [
    {
      id: 16,
      name: 'animation'
    }
  ]

  beforeEach(() => {
    wrapper = shallowMount(index, {
      localVue,
      computed: {
        configuration () {
          return {
            images: {
              base_url: 'test_base_url/'
            }
          }
        },
        genres () {
          return genreList
        }
      },
      getters: {
        gettersG,
        gettersDBC
      },
      methods: {
        checkGenresStatus () {
          return ''
        },
        checkConfiguration () {
          return ''
        },
        resetMovieListData () {
          return ''
        }
      }
    })
  })

  it('reders the page', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('checkGenresStatus not need to obtain films list', () => {
    wrapper.vm.getFilmGenres = jest.fn()
    wrapper.vm.checkGenresStatus()
    expect(wrapper.vm.getFilmGenres).not.toHaveBeenCalled()
  })
})
