<template>
  <v-layout
    row
  >
    <v-flex
      v-if="moviesList.length"
    >
      <div>
        <h1 v-text="'Results'" />
      </div>
      <contentsGrid
        :key="query"
        :configuration="configuration"
        :contents-list="moviesList"
        :live-search="true"
      />
    </v-flex>
    <v-row v-else>
      <v-flex>
        <h1> No results found</h1>
      </v-flex>
    </v-row>
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
  watch: {
    query (newValue) {
      this.resetMovieListData()
      this.getMoviesListLive({
        query: newValue,
        page: 1
      })
    }
  },
  methods: {
    ...mapActions('moviesList', [
      'getMoviesListLive',
      'resetMovieListData'
    ])
  }
}
</script>
