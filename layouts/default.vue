<template>
  <v-app dark>
    <v-app-bar
      app
    >
      <v-btn
        icon
        dense
        @click="$router.push('/')"
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn
        icon
        dense
        @click="$router.push('/cart')"
      >
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <span v-text="cartItems.length"/>
      <v-spacer />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-toolbar-items>
        <search />
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
import { mapGetters } from 'vuex'

import search from '@/components/atomics/search'

export default {
  components: {
    search
  },
  data () {
    return {
      title: 'Movbook'
    }
  },
  computed: {
    ...mapGetters('cartStatus', [
      'cartItems'
    ]),
    footerText () {
      return `Manuel Estévez ${new Date().getFullYear()}`
    }
  }
}
</script>
