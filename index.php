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
    <h1>Vue Dynamic Styling</h1>
  </header>
  <section id="styling">
    <button @click="boxSelect('clear')">Clear</button>
    <div class="demo" :class="boxASelected ? 'active' : ''" @click="boxSelect('A')">
    </div>
    <div :class="{
      demo: true,
      active: boxBSelected
    }" @click="boxSelect('B')"
    >
    </div>
    <div :style="{borderColor: boxCSelected
    ? '#88DDAA' : '#ccc'}" @click="boxSelect('C')" class="demo">
    </div>
  </section>
</body>

</html>