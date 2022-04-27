const app = Vue.createApp({
  data() {
    return {
      goalInputValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal(event) {
      // Pushes input value to goals array
      this.goalInputValue !== "" && this.goals.push(this.goalInputValue);
    },
  },
});

app.mount("#user-goals");
