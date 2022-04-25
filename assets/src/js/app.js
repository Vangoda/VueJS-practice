const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    boxSelect(box) {
      switch (box) {
        case "A":
          this.boxASelected = true;
          break;

        case "B":
          this.boxBSelected = true;
          break;

        case "C":
          this.boxCSelected = true;
          break;

        default:
          this.boxASelected = false;
          this.boxBSelected = false;
          this.boxCSelected = false;
          break;
      }
    },
  },
});

app.mount("#styling");
