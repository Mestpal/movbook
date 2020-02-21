<template>
  <v-layout
    row
  >
    <v-flex>
      <div>
        <h1>
          {{ $route.params.category }}
        </h1>
      </div>
      <v-layout
        row
        justify-space-between
      >
        <MoviesListElement
          v-for="(movie, index) in moviesList"
          :key="index"
          :data="movie"
          :imgBase="configuration.images.base_url + configuration.images.poster_sizes[4]"
          @prepareContent="openContent($event)"
        />
      </v-layout>
      <observer @intersect="intersected" />
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import MoviesListElement from '@/components/cards/content'
import observer from '@/components/atomics/observer'

export default {
  components: {
    MoviesListElement,
    observer
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
      'getMoviesList'
    ]),
    ...mapActions('infiniteLoad', [
      'updatePage'
    ]),
    openContent (id) {
      this.$router.push(`movie/${id}`)
    },
    checkMoviesListStatus () {
      if (!this.moviesList.length) {
        this.getMoviesList({
          genreId: this.$route.params.id,
          page: 1
        })
      }
    },
    intersected () {
      const newPage = this.page + 1
      this.updatePage(newPage)
      this.getMoviesList({
        genreId: this.$route.params.id,
        page: this.page
      })
    }
  }
}
</script>
