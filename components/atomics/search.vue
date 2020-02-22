<template>
  <v-text-field
    label="Search"
    outlined
    @input="saveSearch($event)"
    @keypress.enter="launchSearch"
  />
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      searchInput: ''
    }
  },
  methods: {
    ...mapActions('moviesList', [
      'getMoviesListLive',
      'resetMovieListData'
    ]),
    saveSearch (event) {
      this.searchInput = event
    },
    launchSearch () {
      this.resetMovieListData()
      this.getMoviesListLive({
        query: this.searchInput
      })
      this.$router.push(`/search?q=${this.searchInput}`)
    }
  }
}
</script>
