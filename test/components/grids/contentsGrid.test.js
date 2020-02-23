import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import contentsGrid from '@/components/grids/contentsGrid'
import { gettersDBC } from '@/store/movieDBConfig'
import { gettersML } from '@/store/moviesList'
import { gettersIL } from '@/store/infiniteLoad'

Vue.use(Vuetify)
Vue.use(Vuex)
const localVue = createLocalVue()

describe('contentsGrid.vue component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(contentsGrid, {
      localVue,
      computed: {
        configuration () {
          return {
            images: {
              base_url: 'test_base_url/'
            }
          }
        },
        moviesList () {
          return []
        },
        page () { return 1 }
      },
      getters: {
        gettersML,
        gettersDBC,
        gettersIL
      },
      methods: {
        checkMoviesListStatus () {
          return ''
        }
      }
    })
  })

  it('reders the page', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

})
