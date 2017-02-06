<?php 

require_once 'database_connections.php';

$data = json_decode(file_get_contents("php://input")); 

$fname = mysqli_real_escape_string($con, $data->fname);
$lname = mysqli_real_escape_string($con, $data->lname);
$email = mysqli_real_escape_string($con, $data->email);
$gender = mysqli_real_escape_string($con, $data->gender);
$age=mysqli_real_escape_string($con,$data->age);
$phone=mysqli_real_escape_string($con,$data->phone);
$address = mysqli_real_escape_string($con, $data->address);




$query = "INSERT into p_details (p_fname,p_lname,p_email,p_gender,p_age,p_phone,p_address) VALUES ('$name','$email','$gender','$age','$phone',$address')";

mysqli_query($con, $query);
echo true;
?>