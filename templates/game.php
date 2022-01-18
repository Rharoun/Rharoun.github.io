<!DOCTYPE html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Boter Kaas eieren</title>
    <link rel="stylesheet" href="css/game.css">
  </head>
  <?php
    include_once('default/menu.php');
    ?>
  <body class="background align-items-center">
    <h1 class="text-center size text-dark">tik-tak-toe</h1>
    <main>
      <div>
        <p>Player 1</p>
        <p>Symbol: X</p>
      </div>
        <!-- s
          Make a board (class .board) with fields (class .field)
          Do not forget to add styling (grid layout)
        -->
        <row>
          <div class="tic-tac-toe-board">
              <div class="box">
                <button class="btn on board btn1">-</button>
              </div>
              <div class="box">
                <button class="btn on board btn2">-</button>
              </div>
              <div class="box">
                <button class="btn on board btn3">-</button>
              </div>
              <div class="box">
                <button class="btn on board btn4">-</button>
              </div>
              <div class="box">
                <button class="btn on board btn5">-</button>
              </div>
              <div class="box">
                <button class="btn on board btn6">-</button>
              </div>
              <div class="box">
                <button class="btn on board btn7">-</button>
              </div>
              <div class="box">
                <button class="btn on board btn8">-</button>
              </div>
              <div class="box">
                <button class="btn on board btn9">-</button>
              </div>
            </div>
      <div>
        <p>player 2</p>
        <p>Symbol: O</p>
      </div>
    </main>
    <div></div>
    <button class="reset-btn">reset</button>
    <script type="module" src="js/game.js"></script>
  </body>
</html>