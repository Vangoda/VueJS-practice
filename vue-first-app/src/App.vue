<template>
  <main>
    <active-user :age="age" :username="username" />
    <user-data v-model:username="username" v-model:age="age" />
  </main>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      username: "",
      age: 0,
    };
  },
};
</script>

<style lang="scss">
main {
  display: flex;
  flex-grow: 1;
  flex-basis: 1;

  * {
    flex-basis: 100%;
    display: flex;
    margin: auto;
  }
}
</style>
