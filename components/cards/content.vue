<template>
  <v-flex
    xs12
    sm6
    md4
    lg4
    xl3
  >
    <v-card
      :class="'movieListElement'"
      @click="$emit('prepareContent', data.id)"
    >
      <v-card-title
        v-text="data.title"
      />
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
}
</script>
