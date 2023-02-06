<template>
  <li>
    <h2>{{ isFavorite ? "Favorite friend" : "" }} {{ name }}</h2>
    <button @click="toggleFavorite">Toggle favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    name: {
      type: String,
      required: true,
      validator: function (value) {
        return value.length < 50;
      },
    },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: true },
    isFavorite: { type: Boolean, required: false, default: false },
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-is-favorite", this.id);
    },
  },
};
</script>
