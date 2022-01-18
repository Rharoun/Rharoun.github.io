<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Portofolio Ramy Haroun</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <?php
    include_once('default/menu.php');
    ?>
    <body class="background-1 bg-dark">
      <h1 class="text-center size">calculator</h1>
      <div class="container">
        <div class="row center bg2">
         <div class="col-4">
            <input class="size1 input1"/>
            <select class="buttons size3">
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="/">/</option>
                <option value="X">X</option>
                <option value="%">%</option>
            </select>
            <input class="size1 input2"/>
        </div>
            <div class="col-6">
               <button class="button btn-success size2 flex-fill ">=</button>
            <input class="result bg-info size3"/>
        </div>
        </div>
    </div>
    </body>
    <footer>
        <div class="text-center text-info p-3" style="background-color: rgba(0, 0, 0, 0.4)">
            © 2020 Copyright:
            <a class="text-info" href="https://mdbootstrap.com/">Ramy Haroun</a>
          </div>
    </footer>
    <script src="js/calculator.js"></script>
</html>
