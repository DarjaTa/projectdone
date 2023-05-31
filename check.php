<?php
$login = filter_var(trim($_POST['login']),
FILTER_SANITIZE_STRING);

$name = filter_var(trim($_POST['name']),
FILTER_SANITIZE_STRING);

$password = filter_var(trim($_POST['password']),
FILTER_SANITIZE_STRING);

$password = md5($password."pfvyvdjud8456");
$con = mysqli_connect("localhost","root","root","register-bd");
$sql = "INSERT INTO users (login, password, name) VALUES ('$login', '$password', '$name')";
$result = mysqli_query($con, $sql);

if (!$result) {
	$error = mysqli_error($con);
	print("Ошибка MySQL: " . $error);
}

header('Location: /');
?>
