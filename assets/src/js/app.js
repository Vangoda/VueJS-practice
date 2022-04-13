const app = Vue.createApp({
  data() {
    return {
      yourAge: 27,
      yourName: 'Vangoda',
      randomNumber: Math.random(),
      randomImage: 'https://picsum.photos/600/300'
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