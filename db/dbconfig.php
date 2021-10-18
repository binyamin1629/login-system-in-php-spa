<?php 

$sever_name='localhost';
$db_user_name='root';
$db_password='password';
$db_name='amzing_wizard';


global $conn;

$conn=mysqli_connect($sever_name,$db_user_name,$db_password,$db_name);


if(!$conn){
    die("connection failed"+mysqli_connect_error());
}

?>