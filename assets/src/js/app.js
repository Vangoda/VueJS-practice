const app = Vue.createApp({
  data() {
    return {
      goalInputValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      // Pushes input value to goals array
      this.goalInputValue !== "" && this.goals.push(this.goalInputValue);
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
