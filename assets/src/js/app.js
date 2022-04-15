const app = Vue.createApp({
  data() {
    return {
      output1text: '',
      output2text: '',
      confirmedOutput2text: ''
    }
  },
  methods: {
    output1(event) {
      this.output1text = event.target.value;
    },
    output2(event) {
      this.output2text = event.target.value;
    },
    updateOutput2text(){
      this.confirmedOutput2text = this.output2text;
    },
    alert(text){
      alert(text)
    }
  }
}).mount('#assignment');