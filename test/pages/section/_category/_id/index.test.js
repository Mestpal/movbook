import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import index from '@/pages/section/_category/_id/index'
Vue.use(Vuetify)
Vue.use(Vuex)
const localVue = createLocalVue()

describe('section category id index.vue page', () => {
  const $route = {
    params: {
      id: 11111111,
      category: 'Test'
    }
  }

  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(index, {
      localVue,
      mocks: {
        $route
      },
      methods: {
        updateSelectedGenre () {
          return ''
        }
      }
    })
  })

  it('reders the page', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
