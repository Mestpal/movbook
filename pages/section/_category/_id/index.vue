<template>
  <v-layout
    row
  >
    <v-flex>
      <div>
        <h1 v-text="categoryTitle"/>
      </div>
      <contentsGrid />
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import contentsGrid from '@/components/grids/contentsGrid'

export default {
  components: {
    contentsGrid
  },
  computed: {
    ...mapGetters('moviesGenre', [
      'selectedGenre'
    ]),
    categoryTitle () {
      return this.$route.params.category.toUpperCase()
    }
  },
  mounted () {
    this.updateSelectedGenre({
      id: this.$route.params.id,
      name: this.$route.params.category
    })
  },
  methods: {
    ...mapActions('moviesGenre', [
      'updateSelectedGenre'
    ]),
    ...mapActions('moviesList', [
      'resetMovieListData'
    ]),
    ...mapActions('infiniteLoad', [
      'updatePage'
    ])
  }
}
</script>
