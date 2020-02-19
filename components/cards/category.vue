<template>
  <div>
    <div
      style="
        color:green;
        background-color:aquamarine;
        width: 28.3%;
        min-width:200px;
        height: auto;
        min-height:100px;
        margin: 10px 2.5%;
        display: inline-block;
        float: left
      "
    >
      <h2 v-text='data.name'/>
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
