<?php
header('Content-type: application/json');

$server = "jadman02.db.10511561.hostedresource.com";
$username = "jadman02";
$password = "Jadman9227!";
$database = "jadman02";

$con = mysql_connect($server, $username, $password) or die ("Could not connect: " . mysql_error());
mysql_select_db($database, $con);

$sql = "SELECT id, l_name AS name, l_lat AS latitude, l_long AS longitude FROM landmarks ORDER BY l_name";
$result = mysql_query($sql) or die ("Query error: " . mysql_error());

$records = array();

while($row = mysql_fetch_assoc($result)) {
	$records[] = $row;
}

mysql_close($con);

echo $_GET['jsoncallback'] . '(' . json_encode($records) . ');';
?>