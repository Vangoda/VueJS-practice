const app = Vue.createApp({
  data() {
    return {
      yourAge: 27,
      addedYears: 5,
      yourName: 'Vangoda',
      randomNumber: Math.random(),
      randomImage: 'https://picsum.photos/600/'
    };
  },
  methods: {
    outputAge(age) {
      return this.yourAge + age;
    },
    outputRandomNumber() {
      return Math.random();
    }
  }
});

app.mount('#assignment');