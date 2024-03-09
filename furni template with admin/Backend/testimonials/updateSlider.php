<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con = new mysqli('localhost', 'root', '', 'furni');

$name = $_POST['name'];
$content = $_POST['content'];
$designation = $_POST['designation'];
$id = $_POST['id'];


$target_dir = "../images/";
$target_file = $target_dir . basename($_FILES["photo"]["name"]);
if (move_uploaded_file($_FILES["photo"]["tmp_name"], $target_file)) {
    $photo = $_FILES["photo"]["name"];
    $query = "UPDATE `testimonials` SET `name`='$name',`photo`='$photo',`designation`='$designatio',`content`='$content' WHERE id=$id";
} else {
    $query = "update testimonials set `name`='$name',`designation`='$designation',`content`='$content' WHERE id=$id";
}

if ($name != '') {
    $con->query($query);
    echo json_encode(['status'=>true]);
}else{
    echo json_encode(['status'=>false]);
}