<template>
  <v-dialog
    v-model="dialog"
    persistent
  >
    <v-card>
      <v-card-title
        v-text="`Do you want to remove the selected article? ${content ? content.title : ''}`"
        class="headline"
      />

      <v-card-actions>
        <v-spacer />

        <v-btn
          @click="$emit('modalCancel')"
          class="disagree"
          color="error"
          text
        >
          Disagree
        </v-btn>

        <v-btn
          @click="$emit('modalAgree')"
          class="agree"
          primary
          color="primary"
          text
        >
          Agree
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    content: {
      type: Object,
      default: () => {
        return { title: '' }
      }
    }
  }
}
</script>
