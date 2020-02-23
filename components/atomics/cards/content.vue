<template>
  <v-flex
    xs12
    sm6
    md4
    lg3
    xl3
  >
    <v-card
      color="transparent"
      :class="'fill-height repeating-gradient'"
      @click="$emit('prepareContent', data.id)"
    >
      <v-img
        :src="imageSrc"
      >
        <v-card-title
          v-text="data.title"
        />
      </v-img>
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
    },
    imgBase: {
      type: String,
      default: ''
    }
  },
  computed: {
    imageSrc () {
      if (this.imgBase && this.data.poster_path) {
        return this.imgBase + this.data.poster_path
      }
      return ''
    }
  }
}
</script>
