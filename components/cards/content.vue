<template>
  <v-flex
    xs12
    sm6
    md4
    lg3
    xl3
  >
    <v-card
      :class="'movieListElement'"
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
  data () {
    return {
      imageSrc: this.imgBase + this.data.poster_path
    }
  },
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
  }
}
</script>
