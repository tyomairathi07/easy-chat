<!doctype html>
<html lang="ja">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="Learn how to use the Firebase platform on the Web">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Easy Chat</title>

  <!-- Material Design Lite -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.orange-indigo.min.css">
  <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>

  <!-- App Styling -->
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en">
  <link rel="stylesheet" href="styles/main.css">
</head>

<body>
  <div class="mdl-layout mdl-js-layout">
    <main class="mdl-layout__content mdl-color--grey-100">
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-desktop"></div>

        <div class="mdl-card mdl-shadow--6dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-desktop">
          <div class="mdl-card__title mdl-color--primary mdl-color-text--white relative">
            <h2 class="mdl-card__title-text">Easy Chat</h2>
          </div>
          <div class="mdl-card__supporting-text">
            チャットへようこそ</br></br>
            Googleアカウントでログインください</br></br>
            ログイン後, chat.htmlに遷移
          </div>
          <div class="mdl-card__actions">
            <div class="mdl-grid">
              <button id="sign-in"
                class="mdl-cell mdl-cell--12-col mdl-button mdl-button--raised mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-color-text--white">Googleアカウントでログイン</button>
              <button id="sign-in2"
                class="mdl-cell mdl-cell--12-col mdl-button mdl-button--raised mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-color-text--white" onclick="golink()" >匿名アカウントでログイン</button>    
            </div>
          </div>
        </div>

        <div class="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-desktop"></div>
      </div>
    </main>
  </div>

  <script src="https://www.gstatic.com/firebasejs/6.6.0/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/6.6.0/firebase-auth.js"></script>
  <script src="https://www.gstatic.com/firebasejs/6.6.0/firebase-firestore.js"></script>
  <!-- TODO : 04. Firebase configを追加 -->
  <!-- Initialize Firebase -->
  <script src="/__/firebase/init.js"></script>

  <script src="scripts/login.js"></script>
</body>