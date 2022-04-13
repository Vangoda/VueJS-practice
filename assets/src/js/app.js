const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      number: 1,
      name: 'Ivan',
      surname: ''
    };
  },
  methods: {
    increment() {
      // Increment the counter
      this.counter += this.number;
    },
    decrement() {
      this.counter -= this.number;
    },
    setSurname(event) {
      this.surname = event.target.value;
    }
  }
});

app.mount('#events');