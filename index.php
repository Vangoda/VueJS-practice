<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VueJS</title>

  <!-- Scripts -->
  <!-- For browsersync gulp -->
  <script defer src="https://unpkg.com/vue@next"></script>
  <script defer src="assets/dist/js/app.min.js"></script>
  <script async src="http://course.vuejs:8000/browser-sync/browser-sync-client.js"></script>

  <!-- Styles -->
  <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="assets/dist/css/style.min.css">
</head>

<body>
  <header>
    <h1>Vue Events</h1>
  </header>
  <div id="events">
    <section>
      <h2>Events in Action</h2>
      <input type="number" v-model="number" v-on:click.left="increment" v-on:click.right="decrement">
      <button v-on:click="increment">+ {{number}}</button>
      <button v-on:click="decrement">- {{number}}</button>
      <p>Result: {{ counter }}</p>
      <hr>
      <input type="text" v-model="name">
      <p>Name: {{name}}</p>
      <input type="text" v-on:input="setSurname">
      <p>Surname: {{surname}}</p>
    </section>
    <section>
      <form v-on:submit.prevent>
        <input type="text">
        <button>Sign up</button>
      </form>
    </section>
  </div>
</body>

</html>