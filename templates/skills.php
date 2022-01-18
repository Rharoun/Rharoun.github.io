<!DOCTYPE html>
<?php 
$conn = mysqli_connect('localhost', 'root', '', 'portfolio');
if (!$conn){
    echo 'connection error' . mysqli_connect_error();
}
$sql = ("SELECT * FROM projecten ORDER BY id"); 

$result = mysqli_query($conn, $sql);

$projects = mysqli_fetch_all($result, MYSQLI_ASSOC);

?>
<html>
    <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Portofolio Ramy Haroun</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <?php
    include_once('default/menu.php');
    ?>
    <body class="background-2 bg-dark">
        <h1 class="text-center size">skills</h1>
        <br>
        <br>
        <div class="row ">
        <?php
             foreach ($projects as $project) : ?>
            <div class="card text-white bg-secondary mb-3 card-group" style="max-width: 21rem;  margin: 0 auto; float: none; margin-bottom: 10px;">
            <div class="card-body">
            <h5 class="card-title"><?= $project["name"]?></h5>
            <img class="card-img" src= "<?=$project["image"]?>">
             <h5 class="card-title"><?= $project["project"]?></h5>
            </div>
        </div><?php endforeach?>
        </div>
        <br>
        <br>
        <br>
        <br>
        <h3 class="text-light text-center text-2">Wat kan ik allemaal?</h3>
        <br>
        <div class="row">
        <div class="card card-1 bg-warning mb-3" style="max-width: 14rem;">
            <div class="card-header text-5">C#</div>
            <div class="card-body">
                <img class="card-img" src="images/csharp-e7b8fcd4ce.png">
            </div>
          </div>
          <div class="card card-2 text-white bg-info mb-3" style="max-width: 14rem;">
            <div class="card-header text-6">HTML</div>
            <div class="card-body">
                <img class="card-img" src="images/1024px-HTML5_logo_and_wordmark.svg.png">
            </div>
          </div>
          <div class="card card-2 text-white bg-success mb-3" style="max-width: 14rem;">
            <div class="card-header text-6">JS</div>
            <div class="card-body">
                <img class="card-img" src="images/1200px-Javascript-shield.svg.png">
            </div>
          </div>
          <div class="card card-3 text-white bg-danger mb-3" style="max-width: 14rem;">
            <div class="card-header text-7">CSS</div>
            <div class="card-body">
                <img class="card-img img-1" src="images/kisspng-web-development-cascading-style-sheets-html-logo-c-storm-5ac056dd3842b9.8678323815225545892305.png" height="250">
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
    <script src="js/main.js"></script> 
</html>