<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con = new mysqli('localhost', 'root', '', 'furni');

$title = $_POST['title'];
$content = $_POST['content'];
$btn = $_POST['btn'];
$id = $_POST['id'];

 $query = "update products set title='$title',  content='$content',btn='$btn' where id=$id";

if ($title != '') {
    $con->query($query);
    echo json_encode(['status'=>true]);
}else{
    echo json_encode(['status'=>false]);
}