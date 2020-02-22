<template>
  <v-layout
    row
  >
    <v-flex>
      <div>
        <h1 v-text="categoryTitle"/>
      </div>
      <contentsGrid
        :configuration="configuration"
        :contentsList="moviesList"
      />
      <observer @intersect="intersected" />
      <categoryListLoader v-if="isLoading"/>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import contentsGrid from '@/components/grids/contentsGrid'
import observer from '@/components/atomics/observer'
import categoryListLoader from '@/components/loaders/categoryListLoader'

export default {
  data () {
    return {
      isLoading: false
    }
  },
  components: {
    contentsGrid,
    observer,
    categoryListLoader
  },
  computed: {
    ...mapGetters('moviesList', [
      'moviesList'
    ]),
    ...mapGetters('movieDBConfig', [
      'configuration'
    ]),
    ...mapGetters('moviesGenre', [
      'selectedGenre'
    ]),
    ...mapGetters('infiniteLoad', [
      'page'
    ]),
    categoryTitle () {
      return this.$route.params.category.toUpperCase()
    }
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
    ...mapActions('moviesGenre', [
      'updateSelectedGenre'
    ]),
    ...mapActions('infiniteLoad', [
      'updatePage'
    ]),
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
        this.isLoading = true
        this.getMoviesList({
          genreId: this.$route.params.id,
          page: 1
        })
          .then(() => {
            this.isLoading = false
          })
      }
    },
    intersected () {
      const newPage = this.page + 1
      this.updatePage(newPage)
      this.isLoading = true
      this.getMoviesList({
        genreId: this.$route.params.id,
        page: this.page
      })
        .then(() => {
          this.isLoading = false
        })
    }
  }
}
</script>
