const app = Vue.createApp({
  data() {
    return {
      yourAge: 27,
      yourName: 'Vangoda'
    };
  },
  methods: {
    outputAge(age) {
      return this.yourAge + 5;
    },
    outputRandomNumber() {
      return Math.random();
    }
  }
});

app.mount('#assignment');