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
    ...mapGetters('movieGenres', [
      'selectedGenre'
    ]),
    ...mapGetters('infiniteLoad', [
      'page'
    ])
  },
  mounted () {
    this.checkPageStatus()
    this.checkMoviesListStatus()
  },
  methods: {
    ...mapActions('moviesList', [
      'getMoviesList',
      'resetMovieListData'
    ]),
    ...mapActions('movieGenres', [
      'updateSelectedGenre'
    ]),
    ...mapActions('infiniteLoad', [
      'updatePage'
    ]),
    openContent (id) {
      this.$router.push(`movie/${id}`)
    },
    checkPageStatus () {
      if (this.selectedGenre !== this.$route.params.id) {
        this.resetMovieListData()
        this.updatePage(1)
        this.updateSelectedGenre({
          id: this.$route.params.id,
          name: this.$route.params.category
        })
      }
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
