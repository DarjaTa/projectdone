<?php
$login = filter_var(trim($_POST['login']),
FILTER_SANITIZE_STRING);

$password = filter_var(trim($_POST['password']),
FILTER_SANITIZE_STRING);

$password = md5($password."pfvyvdjud8456");
$con = mysqli_connect("localhost","root","root","register-bd");
$sql = "SELECT * FROM users WHERE login='$login' AND password='$password'";
$result = mysqli_query($con, $sql);
$user = mysqli_fetch_assoc($result);
if (count($user) == 0) {
   echo "Пользователь не найден";
   exit();
} 
setcookie('user',$user['name'], time() - 3600 * 24 * 30, "/");
header('Location: /');
?>ы