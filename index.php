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
  <script async src="http://course.vuejs:8888/browser-sync/browser-sync-client.js"></script>

  <!-- Styles -->
  <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="assets/dist/css/style.min.css">
</head>

<body>
  <header>
    <h1>Reactivity in Action</h1>
  </header>
  <section id="assignment">
    <button @click="add(5)">Add 5</button>
    &nbsp;
    <button @click="add(1)">Add 1</button>
    <!-- 1) Connect the buttons and calculate a value (a number) -->
    <!-- Show "Not there yet" until you reach a result of exactly 37 -->
    <!-- Show "Too much!" if the result is greater than 37 -->
    <p>Result: {{ resultText }}</p>
    <!-- 2) Watch for changes in "result" and reset the value to 0 after 5 seconds -->
  </section>
</body>

</html>