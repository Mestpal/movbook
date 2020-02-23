<template>
  <div>
    <Category
      v-for="(genre, index) in genres"
      :key="index"
      :data="genre"
      @section="openSection($event)"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Category from '@/components/atomics/cards/category'

export default {
  components: {
    Category
  },
  computed: {
    ...mapGetters('moviesGenre', [
      'genres'
    ]),
    ...mapGetters('movieDBConfig', [
      'configuration'
    ])
  },
  beforeMount () {
    this.resetMovieListData()
    this.checkConfiguration()
  },
  mounted () {
    this.checkGenresStatus()
  },
  methods: {
    ...mapActions('movieDBConfig', [
      'getMovieDBConfig'
    ]),
    ...mapActions('moviesGenre', [
      'getFilmGenres',
      'updateSelectedGenre'
    ]),
    ...mapActions('moviesList', [
      'resetMovieListData'
    ]),
    checkGenresStatus () {
      if (!this.genres.length) {
        this.getFilmGenres()
      }
    },
    checkConfiguration () {
      if (!Object.keys(this.configuration).length) {
        this.getMovieDBConfig()
      }
    },
    openSection (event) {
      this.updateSelectedGenre(event)
      this.$router.push(`section/${event.name.toLowerCase()}/${event.id}`)
    }
  }
}
</script>
