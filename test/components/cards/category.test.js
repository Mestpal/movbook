
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'

import category from '@/components/cards/category'

Vue.use(Vuetify)
Vue.use(Vuex)
const localVue = createLocalVue()

describe('category.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(category, {
      localVue,
      propsData: {
        data: {
          id: '16',
          name: 'animation'
        }
      }
    })
  })

  it('reders the category component', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
