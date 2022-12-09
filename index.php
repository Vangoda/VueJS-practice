<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VueJS</title>

  <!-- Scripts -->
  <!-- Define HOST -->
  <?
  define('BASE_URL', siteURL());

  function siteURL()
  {
    // Get base url of the site(protocol + domain)
    $protocol =  "http://";
    if (
      //straight
      isset($_SERVER['HTTPS']) && in_array($_SERVER['HTTPS'], ['on', 1])
      ||
      //proxy forwarding
      isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https'
    ) {
      $protocol = 'https://';
    }

    $domainName = $_SERVER['HTTP_HOST'];
    return $protocol . $domainName;
  }
  ?>
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap" rel="stylesheet" />

  <!-- Styles -->
  <link rel="stylesheet" href="assets/dist/css/style.min.css">

  <!-- JS -->
  <script defer src="https://unpkg.com/vue@next"></script>

  <script defer src="assets/dist/js/app.min.js"></script>

  <!-- Browser sync -->
  <script async src="<?= BASE_URL ?>:8001/browser-sync/browser-sync-client.js"></script>

</head>

<body>
  <header>
    <h1>Ubi me nježno</h1>
  </header>
  <div id="game">
    <section id="monster" class="container">
      <h2>Monster Health</h2>
      <div class="healthbar">
        <div class="healthbar__value" :style="{width: monsterBarStyle}"></div>
      </div>
    </section>
    <section id="player" class="container">
      <h2>Your Health</h2>
      <div class="healthbar">
        <div class="healthbar__value" :style="{width: playerBarStyle}"></div>
      </div>
    </section>
    <section class="container" v-if="winner">
      <h2>Game Over!</h2>
      <h3 v-if="winner === 'player'">You Won!</h3>
      <h3 v-else-if="winner === 'monster'">You Lost!</h3>
      <h3 v-else>It's a draw!</h3>
    </section>
    <section id="controls">
      <button @click="attackMonster">ATTACK</button>
      <button @click="spAttackMonster" :disabled="playerSPDisabled">SPECIAL ATTACK</button>
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