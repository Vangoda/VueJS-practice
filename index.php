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
  <link rel="stylesheet" href="assets/dist/css/style.min.css">
</head>

<body>
  <header>
    <h1>Vue Course Goals</h1>
  </header>
  <section id="user-goal">
    <h2>My Course Goal</h2>
    <p v-html="outputGoal()"></p>
    <p>{{outputGoal()}}</p>
    <p>Learn more <a v-bind:href="vueLink">about Vue</a></p>
  </section>

</body>

</html>