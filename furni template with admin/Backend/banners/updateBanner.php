<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con = new mysqli('localhost', 'root', '', 'furni');

$title = $_POST['title'];
$content = $_POST['content'];
$btn1 = $_POST['btn1'];
$btn2 = $_POST['btn2'];
$id = $_POST['id'];


$target_dir = "images/";
$target_file = $target_dir . basename($_FILES["photo"]["name"]);
if (move_uploaded_file($_FILES["photo"]["tmp_name"], $target_file)) {
    $photo = $_FILES["photo"]["name"];
    $query = "update banner set photo='$photo',title='$title',  content='$content',btn1='$btn1',btn2='$btn2' where id=$id";
} else {
    $query = "update banner set title='$title',  content='$content',btn1='$btn1',btn2='$btn2' where id=$id";
}

if ($title != '') {
    $con->query($query);
    echo json_encode(['status'=>true]);
}else{
    echo json_encode(['status'=>false]);
}