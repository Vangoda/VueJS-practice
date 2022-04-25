const app = Vue.createApp({
  data() {
    return {
      result: 0
      // resultText: "Not there yet"
    };
  },
  watch: {
    // Runs whenever variable named as method changes
    // name(name, oldName) {

    resultText(result) {
      // Log result
      console.log(this.result);

      // Reset the result value to 0 after 5 seconds
      setTimeout(() => {
        this.result = 0;
      }, 5000)
    }
  },
  computed: {
    // Runs whenever one of the referenced
    // variables changes.

    resultText() {
      // Change the resultText baseed on result value
      switch (true) {
        default:
        case (this.result < 37):
          return "Not there yet"
          break;
        case (this.result === 37):
          return "Exactly there!"
          break;
        case (this.result > 37):
          return "Too much!"
          break;
      }
    }
  },
  methods: {
    add(number){
      this.result += number;
    }
  }
});

app.mount('#assignment');