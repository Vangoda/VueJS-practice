const app = Vue.createApp({
  data() {
    return {
      input1Text: "",
      toggleState: false,
    };
  },
  computed: {
    class1Computed() {
      if (["user1", "user2"].includes(this.input1Text)) {
        return this.input1Text;
      }
    },
    class2Computed() {
      this.toggleState = !this.toggleState;
      return this.toggleState ? "visible" : "hidden";
    },
  },
  methods: {
    toggleParagraph() {},
  },
});

app.mount("#assignment");
