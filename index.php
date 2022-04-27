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
    <h1>Vue Styling</h1>
  </header>
  <section id="assignment">
    <!-- 1) Fetch the user input and use it as a CSS class -->
    <!-- The entered class should be added to the below paragraph -->
    <input type="text" v-model="input1Text" />
    <!-- (available classes: "user1", "user2") -->
    <p :class="paragraphClass1">
      Style me!
    </p>
    <button @click="toggleParagraph()">Toggle Paragraph</button>
    <!-- 2) Use the "visible" and "hidden" classes to show/ hide the above paragraph -->
    <!-- Clicking the button should toggle between the two options -->

    <!-- 3) Add dynamic inline styling to the below paragraph and let the user enter a background-color -->
    <input type="text" v-model="paragraph2Color" />
    <p :style="{'background-color': paragraph2Color}">Style me inline!</p>
  </section>
</body>

</html>