<?php
//include("config.inc.php");

$db_username = 'jadman02';
$db_password = 'Jadman9227!';
$db_name = 'jadman02';
$db_host = 'jadman02.db.10511561.hostedresource.com';
$item_per_page = 2;
$connecDB = mysqli_connect($db_host, $db_username, $db_password,$db_name)or die('could not connect to database');

  $con=mysqli_connect($db_host,$db_username,$db_password,$db_name);

  // Check connection
  if (mysqli_connect_errno())
  {
   echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }


  $query = "SELECT * FROM likermob";

  $result = mysqli_query($con,$query);

  $rows = array();
  while($r = mysqli_fetch_array($result)) {
    $rows[] = $r;
  }
  echo json_encode($rows);

  mysqli_close($con);