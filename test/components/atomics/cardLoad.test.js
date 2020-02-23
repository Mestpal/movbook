
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'

import cardLoad from '@/components/atomics/loaders/cardLoad'

Vue.use(Vuetify)
Vue.use(Vuex)
const localVue = createLocalVue()

describe('cardLoad.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(cardLoad, {
      localVue
    })
  })

  it('reders the cardLoad', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
