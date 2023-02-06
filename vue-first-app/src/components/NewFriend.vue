<template>
  <form @submit.prevent="submit">
    <div>
      <label for="name">Name: </label>
      <input v-model="name" type="text" id="name" name="name" />
    </div>
    <div>
      <label for="phone">Phone: </label>
      <input v-model="phone" type="text" id="phone" name="phone" />
    </div>
    <div>
      <label for="email">Email: </label>
      <input v-model="email" type="text" id="email" name="email" />
    </div>
    <div>
      <button type="submit">Add contact</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  emits: ["add-friend"],
  methods: {
    submit() {
      this.$emit("add-contact", {
        id: this.name.split(" ")[0], // Fist name
        name: this.name,
        phoneNumber: this.phone,
        emailAddress: this.email,
      });
    },
  },
};
</script>
