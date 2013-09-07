<?php
	include_once("../getFunction.php");

	$login = isset($_POST['login'])?$_POST['login']:'';
	$clave = isset($_POST['clave'])?$_POST['clave']:'';

	$mysqli = newMySQLi(); 
	// chequeo de coneccion
	if (mysqli_connect_errno()) {exit();}
	
	$sql = "SELECT
				COUNT(*) AS cuantos,
                id,
				tipo,
				estado
			FROM
				usuario
			WHERE
				login = '".$login."' AND
				clave  = '".$clave."'";
				
    if ($result = $mysqli->query($sql)) { 
        $row = $result->fetch_object();
		if($row->cuantos == 1){
			if($row->estado == 'Activo')
				$output = msgReturn(true,'Bienvenido!.;'.$row->id.';'.$row->tipo); // msj cuando el usuario es valido
			else
				$output = msgReturn(false,'El Usuario '.$login.' esta Inactivo!.'); // msj cuando el usuario no es valido	
		}else
			$output = msgReturn(false,'El Login y clave no son v&aacute;lidos.'); // msj cuando el usuario no es valido
    } else {$output = msgReturn(false,'Error de conecci&oacute;n. No se puedo validar el Login y clave.');} //msj cuando la coneccion da error
	
    $result->close(); 
    unset($obj); 
    unset($sql);
	echo $output;
?>