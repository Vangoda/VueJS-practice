const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 1,
          name: "Manuel Lorenz",
          phone: "091 234 5678",
          email: "who@what.where",
        },
        {
          id: 2,
          name: "James Lopez",
          phone: "091 111 2223",
          email: "who@are.you",
        },
        {
          id: 3,
          name: "Frank Smith",
          phone: "091 133 5577",
          email: "who@ko.com",
        },
      ],
    };
  },
  methods: {},
});

app.component("user-details", {
  template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">{{detailsAreVisible ? "Hide" : "Show"}} Details</button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 1,
        name: "Manuel Lorenz",
        phone: "091 234 5678",
        email: "who@what.where",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
