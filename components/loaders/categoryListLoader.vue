<template>
  <v-row>
    <cardLoad
      v-for="n in 20"
      :key="n"
    />
  </v-row>
</template>

<script>
import cardLoad from '@/components/atomics/loaders/cardLoad'

export default {
  components: {
    cardLoad
  }
}
</script>
