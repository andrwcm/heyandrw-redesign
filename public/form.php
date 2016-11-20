<?php
if(!isset($_POST['submit']))
{
	echo 'error; necesitas enviar el formulario';
}

$nombre = $_POST['Nombre'];
$email = $_POST['Email'];
$telefono = $_POST['Telefono'];
$mensaje = $_POST['descripcion'];

if (empty ($nombre)||empty($email)) {
	echo 'Nombre e email son obligatorios';
	exit;
}


$email_from = 'andrwhey@gmail.com';
$email_subject = 'Datos formulario 👨🏻'
$email_body = 'Has recibido un nuevo correo de $nombre.\n'.
'Su correo electrónico es: $email.\n'.
'Su teléfonof es: $telefono.\n'.
'El proyecto es: $mensaje.\n'.

$to = 'andrwhey@gmail.com';
$headers = 'From: $email_from \r\n';

mail($to,$email_subject,$email_body,$headers);
 
?>


