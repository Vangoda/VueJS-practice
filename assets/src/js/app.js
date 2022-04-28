const app = Vue.createApp({
  data() {
    return {
      taskList: [],
      taskText: "",
      showTaskListToggle: true,
    };
  },
  computed: {
    showTaskListToggleButtonAction() {
      // Returns the action based on showTaskListToggle state

      return this.showTaskListToggle ? "Hide" : "Show";
    },
  },
  methods: {
    addTask() {
      // Adds a task with the text from taskText input to the task list.

      this.taskList.push(this.taskText);
    },
    toggleShowTaskList() {
      // Toggles the showTaskListToggle variable true or false

      this.showTaskListToggle = !this.showTaskListToggle;
    },
  },
});

app.mount("#assignment");
