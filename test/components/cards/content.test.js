
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'

import content from '@/components/cards/content'

Vue.use(Vuetify)
Vue.use(Vuex)
const localVue = createLocalVue()

describe('content.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(content, {
      localVue,
      propsData: {
        data: {
          id: 1234,
          name: 'Movie Test',
          poster_path: '/posteer_url'
        },
        imgBase: 'url_to_image'
      }
    })
  })

  it('reders the content component', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('create imageSrc', () => {
    expect(wrapper.vm.imageSrc).toBe(wrapper.vm.imgBase + wrapper.vm.data.poster_path)
  })

  it('imageSrc is empty', () => {
    wrapper.setProps({
      data: {
        id: 1234,
        name: 'Movie Test'
      },
      imgBase: 'url_to_image'
    })

    expect(wrapper.vm.imageSrc).toBe('')
  })
})
