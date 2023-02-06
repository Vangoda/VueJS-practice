<template>
  <div>
    <h2>{{ username }}</h2>
    <h3>{{ age }} years old.</h3>
  </div>
</template>

<script>
export default {
  name: "ActiveUser",
  data() {
    return {};
  },
  props: {
    username: {
      type: String,
      required: false,
      default: "",
    },
    age: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
