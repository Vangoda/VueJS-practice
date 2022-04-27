const app = Vue.createApp({
  data() {
    return {
      input1Text: "",
      toggleState: true,
      paragraph2Color: "#AF6",
    };
  },
  computed: {
    // class1Computed() {
    //   if (["user1", "user2"].includes(this.input1Text)) {
    //     return this.input1Text;
    //   }
    // },
    // class2Computed() {
    //   this.toggleState = !this.toggleState;
    //   return this.toggleState ? "visible" : "hidden";
    // },
    paragraphClass1() {
      return {
        user1: this.input1Text == "user1",
        user2: this.input1Text == "user2",
        visible: this.toggleState,
        hidden: !this.toggleState,
      };
    },
  },
  methods: {
    toggleParagraph() {
      this.toggleState = !this.toggleState;
    },
  },
});

app.mount("#assignment");
