const app = Vue.createApp({
  data() {
    return {
      goalA: 'Create more goals!',
      goalB: '<h2>Create even more goals!</h2>',
      vueLink: 'https://vuejs.org'
    };
  },
  methods: {
    outputGoal() {
      return Math.random() < 0.5 ? this.goalA : this.goalB;
    }
  }
});

app.mount('#user-goal');