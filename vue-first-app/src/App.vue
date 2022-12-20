<template>
  <section>
    <header>
      <h1>Maj Frends</h1>
    </header>
    <ul>
      <friend-contact
        name="Manuel Jackson"
        phone-number="01 234 5678"
        email-address="manuel@gmail.com"
      ></friend-contact>
      <friend-contact
        name="James Jackson"
        phone-number="01 234 5678"
        email-address="james@gmail.com"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "Manuel",
          name: "Manuel Jackson",
          phone: "01 234 5678",
          email: "manuel@gmail.com",
        },
        {
          id: "James",
          name: "James Jackson",
          phone: "01 234 5678",
          email: "manuel@gmail.com",
        },
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: #fff;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #f07;
  background-color: #f07;
  color: #fff;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
