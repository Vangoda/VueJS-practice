<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VueJS excercise</title>

  <!-- Scripts -->
  <!-- For browsersync gulp -->
  <script defer src="https://unpkg.com/vue@next"></script>
  <script defer src="assets/dist/js/app.min.js"></script>
  <script async src="http://course.vuejs:8888/browser-sync/browser-sync-client.js"></script>

  <!-- Styles -->
  <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="assets/dist/css/style.min.css">
</head>

<body>
  <header>
    <h1>Vue Course Goals</h1>
  </header>
  <section id="user-goals">
    <h2>My course goals</h2>
    <input @keyup.enter="addGoal()" type="text" v-model="goalInputValue" />
    <button @click="addGoal()">Add Goal</button>
    <p v-show="goals.length < 1">
      No goals have been added yet - please start adding some!
    </p>
    <ul>
      <!-- Key has to be unique for this to work properly -->
      <li v-for="(goal, index) in goals" :key="goal" @click="removeGoal(index)">
        <p>
          {{index+1}}. {{ goal }}
        </p>
        <input type="text" @click.stop>
      </li>
    </ul>
    <br>
    <ul>
      <li v-for="(value, key, index) in {name: 'Ivan', surname: 'Jurić'}">
        {{index+1}}. {{key}}: {{value}}
      </li>
    </ul>
    <br>
    <ul>
      <li v-for="number in 10">{{number}}</li>
    </ul>
  </section>
</body>

</html>