<?php 

require_once 'database_connections.php';

$data = json_decode(file_get_contents("php://input")); 

$id = mysqli_real_escape_string($con, $data->id);
$fname = mysqli_real_escape_string($con, $data->fname);
$lname = mysqli_real_escape_string($con, $data->lname);
$email = mysqli_real_escape_string($con, $data->email);
$gender = mysqli_real_escape_string($con, $data->gender);
$age=mysqli_real_escape_string($con,$data->age);
$phone=mysqli_real_escape_string($con,$data->phone);
$address = mysqli_real_escape_string($con, $data->address);

$query = "UPDATE p_details SET p_fname='$fname',p_lname='$lname',p_email='$email',p_gender='$gender',p_age='$age',p_phone='$phone',p_address='$address' WHERE p_id=$id";
mysqli_query($con, $query);
echo true;
?>