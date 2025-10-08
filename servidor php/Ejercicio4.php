<?php
// $a=0;
// $a += 5; // Equivale a $a = $a + 5;
// echo ('$a'.$a. "<br>");
// $saludo = "Hola" . " " . "Mundo". "<br>";
// echo ('$saludo'.$saludo);
// $texto = "Inicio". "<br>";

$texto .= " y continuación". "<br>"; // Resultado: "Inicio y continuación"
echo ('$texto'.$texto);
$nombre = `Elena”; 
$numeroString = “1”; // string 
$numeroInt = 10; 
$precioFloat = 19.99; 
$esValido = true; 
echo gettype($nombre) . “<br/>”; echo 
gettype($numeroString) . “<br/>”; echo 
gettype($numeroInt) . “<br/>”; echo 
gettype($precioFloat) . “<br/>”; echo gettype($esValido) 
. “<br/>”; if (is_string($nombre)) { 
echo “’$nombre’ es un string.<br/>”; 
} 
if (is_numeric($numeroString)) { 
echo “’$numeroString’ es numérico (aunque sea string).<br/>”; 
} 
if (is_int($numeroInt)) { 
echo “’$numeroInt’ es un entero.<br/>”; } 
?>`

