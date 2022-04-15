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
  <!-- <script async src="http://course.vuejs:8888/browser-sync/browser-sync-client.js"></script> -->

  <!-- Styles -->
  <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="assets/dist/css/style.min.css">
</head>

<body>
  <header>
    <h1>Events</h1>
  </header>
  <section id="assignment">
    <h2>Event Practice</h2>
    <!-- 1) Show an alert (any text of your choice) when the button is pressed -->
    <button v-on:click="alert('Delivered')">Show Alert</button>
    <hr />
    <!-- 2) Register the user input on "keydown" and output it in the paragraph (hint: event.target.value helps) -->
    <input type="text" v-on:keydown="output1" />
    <p>{{output1text}}</p>
    <hr />
    <!-- 3) Repeat 2) but only output the entered value if the ENTER key was pressed -->
    <input type="text" v-on:keydown="output2" v-on:keyup.enter="updateOutput2text" />
    <p>{{confirmedOutput2text}}</p>
  </section>
</body>

</html>