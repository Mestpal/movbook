<template>
  <v-layout
    row
    justify-space-between
  >
    <v-row
      v-if="cartItems.length"
    >
      <contentsListElement
        v-for="(movie, index) in cartItems"
        :key="index"
        :data="movie"
        :img-base="configuration.images.base_url + configuration.images.poster_sizes[4]"
        @prepareContent="showDeleteModal(index)"
      />
      <modal
        :dialog="showModal"
        :content="selectedContent"
        @modalAgree="agreeModalButtonAction"
        @modalCancel="cancelModalButtonAction"
      />
    </v-row>
    <v-row v-else>
      <v-flex>
        <h1> Your cart is empty</h1>
      </v-flex>
    </v-row>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import contentsListElement from '@/components/atomics/cards/content'
import modal from '@/components/atomics/modal'

export default {
  components: {
    contentsListElement,
    modal
  },
  data () {
    return {
      showModal: false,
      selectedContent: null
    }
  },
  computed: {
    ...mapGetters('cartStatus', [
      'cartItems'
    ]),
    ...mapGetters('movieDBConfig', [
      'configuration'
    ])
  },
  methods: {
    ...mapActions('cartStatus', [
      'deleteContent'
    ]),
    showDeleteModal (index) {
      this.showModal = true
      this.selectedContent = this.cartItems[index]
    },
    cancelModalButtonAction () {
      this.showModal = false
    },
    agreeModalButtonAction () {
      this.deleteContent(this.selectedContent.id)
      this.showModal = false
    }
  }
}
</script>
