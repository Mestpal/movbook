<template>
  <v-layout
    row
    justify-space-between
  >
    <ContentsListElement
      v-for="(movie, index) in contentsList"
      :key="index"
      :data="movie"
      :imgBase="configuration.images.base_url + configuration.images.poster_sizes[4]"
      @prepareContent="openContent($event)"
    />
  </v-layout>
</template>

<script>
import ContentsListElement from '@/components/cards/content'

export default {
  components: {
    ContentsListElement
  },
  props: {
    contentsList: {
      type: Array,
      default: () => []
    },
    configuration: {
      type: Object,
      required: true
    }
  },
  methods: {
    openContent (id) {
      this.$router.push(`/movie/${id}`)
    }
  }
}
</script>
