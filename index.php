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
  <section id="assignment">
    <!-- 1) Output your name -->
    <h2>YOUR NAME</h2>
    <!-- 2) Output your age -->
    <p>YOUR AGE</p>
    <!-- 3) Output your age + 5 -->
    <p>YOUR AGE in 5 years</p>
    <!-- 4) Output a random number (0 to 1) -->
    <p>Favorite Number: RANDOM NUMBER BETWEEN 0 AND 1</p>
    <div>
      <!-- 5) Display some image you found via Google -->
      <img src="SOME IMAGE URL" />
    </div>
    <!-- 6) Prepopulate the input field with your name via the "value" attribute -->
    <input type="text" />
  </section>
</body>

</html>