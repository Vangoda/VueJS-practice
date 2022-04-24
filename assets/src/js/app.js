const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: ''
    };
  },
  watch: {
    name(name, oldName) {
      // Runs whenever name changes

      this.fullname = (name === "") ? "" : `${name} Yyayarn`;
    }
  },
  computed: {
    // fullname() {
    //   console.log('running fullname ...')
    //   return this.name !== '' ? `${this.name} Yayaran` : '';
    // }
  },
  methods: {
    outputFullName() {
      return this.name !== '' ? `${this.name} Yayaran` : '';
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      // Clears the input

      this.name = "";
    }
  }
});

app.mount('#events');
