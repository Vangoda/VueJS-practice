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
    <h1>FriendList</h1>
  </header>
  <section id="app">
    <ul>
      <user-details></user-details>
      <user-details></user-details>
    </ul>
  </section>
</body>

</html>