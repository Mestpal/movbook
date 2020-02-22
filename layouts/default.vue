<template>
  <v-app dark>
    <v-app-bar
      app
    >
      <v-btn
        icon
        @click="$router.push('/')"
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-toolbar-items>
        <v-text-field
          label="Search"
          outlined
          @input="saveSearch($event)"
          @keypress.enter="launchSearch"
        ></v-text-field>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container grid-list-xl>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      app
    >
      <span>&copy; {{ footerText }} </span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      title: 'Movbook',
      searchInput: ''
    }
  },
  computed: {
    footerText () {
      return `Manuel Estévez ${new Date().getFullYear()}`
    }
  },
  methods: {
    ...mapActions('moviesList', [
      'getMoviesListLive',
      'resetMovieListData'
    ]),
    saveSearch (event) {
      this.searchInput = event
    },
    launchSearch () {
      this.resetMovieListData()
      this.getMoviesListLive({
        query: this.searchInput
      })
      this.$router.push(`/search?q=${this.searchInput}`)
    }
  }
}
</script>
