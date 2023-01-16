<template>
  <li>
    <h2>{{ friend.isFavorite ? "Favorite friend" : "" }} {{ friend.name }}</h2>
    <button @click="toggleFavorite">Toggle favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phoneNumber }}</li>
      <li><strong>Email:</strong> {{ friend.emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    name: String,
    phoneNumber: String,
    emailAddress: String,
    isFavorite: String,
  },
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        name: this.name,
        phoneNumber: this.phoneNumber,
        emailAddress: this.emailAddress,
        isFavorite: this.isFavorite,
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.friend.isFavorite = !this.friend.isFavorite;
    },
  },
};
</script>
