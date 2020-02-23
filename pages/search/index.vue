<template>
  <v-layout
    row
  >
    <v-flex>
      <div>
        <h1 v-text="'Results'" />
      </div>
      <contentsGrid
        :key="query"
        :configuration="configuration"
        :contentsList="moviesList"
        :liveSearch="true"
      />
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
    ...mapGetters('moviesList', [
      'moviesList'
    ]),
    ...mapGetters('movieDBConfig', [
      'configuration'
    ]),
    query () {
      return this.$route.query.q
    }
  },
  methods: {
    ...mapActions('moviesList', [
      'getMoviesListLive',
      'resetMovieListData'
    ])
  },
  watch: {
    query (newValue) {
      this.resetMovieListData()
      this.getMoviesListLive({
        query: newValue,
        page: 1
      })
    }
  }
}
</script>
