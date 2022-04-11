<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VueJS</title>

    


    <!-- Styles -->
    <link rel="stylesheet" href="assets/dist/css/style.min.css">
</head>
<body>
    <div id="app">
      <div>
        <label for="goal">Goal</label>
        <input type="text" id="goal" v-model="enteredValue" />
        <button v-on:click="addGoal">Add Goal</button>
      </div>
      <ul>
        <li v-for="goal in goals">{{ goal }}</li>
      </ul>
    </div>
    <!-- Scripts -->
    <!-- For browsersync gulp -->
    <script src="https://unpkg.com/vue@next"></script>
    <script src="assets/dist/js/main.min.js"></script>
    <script async src="http://course.vuejs:8000/browser-sync/browser-sync-client.js"></script>
  </body>
</html>