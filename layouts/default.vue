<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
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
    </v-app-bar>
    <v-content>
      <v-container grid-list-xl>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; {{ footerText }} </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Movbook'
    }
  },
  computed: {
    footerText () {
      return `Manuel Estévez ${new Date().getFullYear()}`
    }
  }
}
</script>
