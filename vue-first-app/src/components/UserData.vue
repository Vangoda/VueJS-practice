<template>
  <div>
    <input type="text" @input="updateUsername" :value="username" />
    <input type="number" @input="updateAge" :value="age" />
  </div>
</template>

<script>
export default {
  name: "UserData",
  props: {
    username: String,
    age: Number,
  },
  emits: ["update:username", "update:age"],
  methods: {
    updateUsername(event) {
      this.$emit("update:username", event.target.value);
    },
    updateAge(event) {
      this.$emit("update:age", +event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
