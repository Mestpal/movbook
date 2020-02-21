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
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MoviesListElement from '@/components/cards/content'

export default {
  components: {
    MoviesListElement
  },
  computed: {
    ...mapGetters('moviesList', [
      'moviesList'
    ]),
    ...mapGetters('movieDBConfig', [
      'configuration'
    ])
  },
  mounted () {
    this.checkMoviesListStatus()
  },
  methods: {
    ...mapActions('moviesList', [
      'getMoviesList'
    ]),
    openContent (id) {
      this.$router.push(`movie/${id}`)
    },
    checkMoviesListStatus () {
      if (!this.moviesList.length) {
        this.getMoviesList({
          genreId: this.$route.params.id
        })
      }
    }
  }
}
</script>
