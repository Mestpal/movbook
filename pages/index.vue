<template>
  <div>
    <Category
      v-for="(genre, index) in genres"
      :key="index"
      :data='genre'
      @section='openSection($event)'
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Category from '@/components/cards/category'

export default {
  components: {
    Category
  },
  computed: {
    ...mapGetters('movieGenres', [
      'genres'
    ])
  },
  methods: {
    ...mapActions('movieGenres', [
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
    openSection (event) {
      this.updateSelectedGenre(event)
      this.$router.push(`${event.name.toLowerCase()}`)
    }
  },
  beforeMount () {
    this.resetMovieListData()
  },
  mounted () {
    this.checkGenresStatus()
  }
}
</script>
