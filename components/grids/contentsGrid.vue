<template>
  <v-layout
    row
    justify-space-between
  >
    <contentsListElement
      v-for="(movie, index) in moviesList"
      :key="index"
      :data="movie"
      :img-base="configuration.images.base_url + configuration.images.poster_sizes[4]"
      @prepareContent="openContent($event)"
    />
    <observer @intersect="intersected" />
    <categoryListLoader v-if="isLoading" />
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import contentsListElement from '@/components/atomics/cards/content'
import observer from '@/components/atomics/observer'
import categoryListLoader from '@/components/loaders/categoryListLoader'

export default {
  components: {
    contentsListElement,
    observer,
    categoryListLoader
  },
  props: {
    liveSearch: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapGetters('moviesList', [
      'moviesList'
    ]),
    ...mapGetters('movieDBConfig', [
      'configuration'
    ]),
    ...mapGetters('infiniteLoad', [
      'page'
    ])
  },
  mounted () {
    this.checkMoviesListStatus()
  },
  methods: {
    ...mapActions('moviesList', [
      'getMoviesList',
      'getMoviesListLive'
    ]),
    ...mapActions('infiniteLoad', [
      'updatePage'
    ]),
    openContent (id) {
      this.$router.push(`/movie/${id}`)
    },
    intersected () {
      const newPage = this.page + 1
      this.updatePage(newPage)
      this.isLoading = true

      if (!this.liveSearch) {
        this.getMoviesList({
          genreId: this.$route.params.id,
          page: this.page
        }).then(() => { this.isLoading = false })
      } else {
        this.getMoviesListLive({
          query: this.$route.query.q,
          page: this.page
        }).then(() => { this.isLoading = false })
      }
    },
    checkMoviesListStatus () {
      if (!this.moviesList.length) {
        this.isLoading = true
        this.getMoviesList({
          genreId: this.$route.params.id,
          page: 1
        })
          .then(() => {
            this.isLoading = false
          })
      }
    }
  }
}
</script>
