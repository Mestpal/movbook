import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'

import search from '@/components/atomics/search'

Vue.use(Vuetify)
Vue.use(Vuex)
const localVue = createLocalVue()

describe('search.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(search, {
      localVue
    })
  })

  it('reders the search component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('saveSearch updates searchinput', () => {
    const event = 'test'
    wrapper.vm.saveSearch(event)
    expect(wrapper.vm.searchInput).toEqual(event)
  })

  it('launchSearch initiates search process', () => {
    wrapper.vm.resetMovieListData = jest.fn()
    wrapper.vm.getMoviesListLive = jest.fn()
    wrapper.vm.searchRedirects = jest.fn()

    wrapper.vm.launchSearch()

    expect(wrapper.vm.resetMovieListData).toHaveBeenCalled()
    expect(wrapper.vm.getMoviesListLive).toHaveBeenCalled()
    expect(wrapper.vm.searchRedirects).toHaveBeenCalled()
  })
})
