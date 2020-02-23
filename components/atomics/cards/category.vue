<template>
  <div>
    <div
      class="category"
      @click="$emit('section', data)"
    >
      <h2 v-text="data.name" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
      required: true
    }
  }
}
</script>
