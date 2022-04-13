const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      number: 1
    };
  },
  methods: {
    increment() {
      // Increment the counter
      this.counter += this.number;
    },
    decrement() {
      this.counter -= this.number;
    }
  }
});

app.mount('#events');