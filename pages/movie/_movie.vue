<template>
    <v-container fluid>
      <v-row justify-space-between>
        <v-col
          cols="4"
        >
          <v-card
            :class="'repeating-gradient'"
            color="transparent"
          >
            <v-img
              :src="imageSrc"
            />
          </v-card>
        </v-col>
        <v-col
          cols="8"
        >
          <contentDescription
            :contentData="movieData"
          />
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import contentDescription from '@/components/atomics/description'

export default {
  components: {
    contentDescription
  },
  data () {
    return {
      movieData: {}
    }
  },
  computed: {
    ...mapGetters('movieDBConfig', [
      'configuration'
    ]),
    imageSrc () {
      if (this.configuration.images.base_url && this.movieData.poster_path) {
        return this.configuration.images.base_url + this.configuration.images.poster_sizes[5] + this.movieData.poster_path
      }
      return ''
    }
  },
  methods: {
    async getMovieData () {
      await this.$axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.movie}?api_key=059b24ced08b9601d550dc1bda480265&language=en-US`)
        .then((result) => {
          this.movieData = result.data
        })
    }
  },
  mounted () {
    this.getMovieData()
  }
}
</script>
