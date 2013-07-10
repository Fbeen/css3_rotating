<?php 
$showside = 'show-front';
if($_SERVER['REQUEST_METHOD'] == 'POST') {
	$showside = 'show-back';
}
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8" />
  
	<!-- disable zooming -->
	<meta name="viewport" content="initial-scale=1.0, user-scalable=0" />
  
	<title>Cube</title>
  
    <link rel="stylesheet" href="css/style.css" media="screen" />
    <link rel="stylesheet" href="css/card.css" media="screen" />

	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"></script>
    <script src="js/rotate-card.js"></script>

</head>
<body>
    <ul class="menu">
        <li><a href="show-front">Login</a></li>
        <li><a href="show-back">Sign-up</a></li>
    </ul>
  <section class="container">
    <div id="card" class="<?php echo $showside; ?>">
      <figure class="front">
      	<h1>Login</h1>
        <p><a href="card.zip">Download voorbeeld</a></p></figure>
      <figure class="back">
      	<h1>Sign-up</h1>
        <form action="" method="post">
        <button type="submit">Verzenden</button>
        </form>
        <p>vul dit formulier in</p></figure>
      </figure>
    </div>
  </section>
  <div id="footer">
      <a href="http://www.php-programmer.nl">php-programmer.nl</a>
  </div>
</body>
</html>