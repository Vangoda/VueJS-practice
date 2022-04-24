const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: ''
    };
  },
  watch: {
    // Runs whenever vairable named as method changes
    // name(name, oldName) {

    //   this.fullname = (name === "") ? "" : `${name} Yyayarn`;
    // },
    // lastName(lastName) {
    //   this.fullname = `${this.name} ${lastName}`;
    // }
    counter(counter){
      // Reset counter when it goes over 50

      if (counter > 50){
        const vueThis = this;
        setTimeout( () => {
          vueThis.counter = 0;
        }, 1000);
      }
    }
  },
  computed: {
    // Runs whenever one of the referenced
    // variables changes.
    fullname() {
      console.log('running fullname ...')
      return this.name !== '' ? `${this.name} ${this.lastName}` : '';
    }
  },
  methods: {
    outputFullName() {
      return this.name !== '' ? `${this.name} ${lastName}` : '';
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
