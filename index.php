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
    <h1>Monster Slayer</h1>
  </header>
  <div id="game">
    <section id="monster" class="container">
      <h2>Monster Health</h2>
      <div class="healthbar">
        <div :style="monsterBarStyles" class=" healthbar__value"></div>
        <div class="healthbar__text">{{monsterHP}}</div>
      </div>
    </section>

    <section id="player" class="container">
      <h2>Your Health</h2>
      <div class="healthbar">
        <div :style="playerBarStyles" class="healthbar__value"></div>
        <div class="healthbar__text">{{playerHP}}</div>
      </div>
    </section>

    <section id="controls">
      <button @click="attackMonster()">ATTACK</button>
      <button :disabled="specialAttackDisabled" @click="specialAttackMonster()">SPECIAL ATTACK</button>
      <button @click="healPlayer">HEAL</button>
      <button>SURRENDER</button>
    </section>

    <section id="log" class="container">
      <h2>Battle Log</h2>
      <ul></ul>
    </section>
  </div>
</body>

</html>