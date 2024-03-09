<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$con=new mysqli('localhost','root','','furni');
$data=$con->query('select * from banner')->fetch_all(MYSQLI_ASSOC);
header('Content-Type: Application/json');
echo json_encode($data);