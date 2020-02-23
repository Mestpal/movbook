
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import categoryListLoader from '@/components/loaders/categoryListLoader'

Vue.use(Vuetify)
Vue.use(Vuex)
const localVue = createLocalVue()

describe('categoryListLoader.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(categoryListLoader, {
      localVue
    })
  })

  it('reders the categoryListLoader component', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
