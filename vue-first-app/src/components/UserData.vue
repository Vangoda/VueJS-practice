<template>
  <div>
    <input type="text" @update="updateUsername" :value="username" />
    <input type="text" @update="updateAge" :value="age" />
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
    updateUsername() {
      this.$emit("update:username", this.$event.target.value);
    },
    updateAge() {
      this.$emit("update:age", this.$event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
