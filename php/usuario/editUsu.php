<?php
	
	include_once("../getFunction.php");
	
	// * = obligatorio en bd
	$id = isset($_POST['txt-id'])?$_POST['txt-id']:''; // *
	$nombre = isset($_POST['txt-nombre'])?$_POST['txt-nombre']:''; // *
	$tlf = isset($_POST['txt-tlf'])?$_POST['txt-tlf']:''; // *
	$correo = isset($_POST['txt-correo'])?$_POST['txt-correo']:''; // *
	$direccion = isset($_POST['txt-direccion'])?$_POST['txt-direccion']:''; // *
	$login = isset($_POST['txt-login'])?$_POST['txt-login']:''; // *
	$tipo = isset($_POST['cmb-tipo'])?$_POST['cmb-tipo']:'';// *
	$estado = isset($_POST['cmb-estado'])?$_POST['cmb-estado']:'';// *
	
	$mysqli = newMySQLi(); //$mysqli = new mysqli('localhost', 'my_user', 'my_password', 'my_db');
	// chequeo de coneccion
	if (mysqli_connect_errno()) {
		$output = msgReturn(false,'Conexi�n fallida. '.mysqli_connect_error());
		break;
	}
	// se desabilita el autocommit
	$mysqli->autocommit(FALSE);	
	
	$all_query_ok=true; // variable de control
	
	
	$sql = "UPDATE usuario SET  
	
				nombre = '".$nombre."',
				tlf = '".$tlf."',
				correo = '".$correo."',
				direccion = '".$direccion."',
				login = '".$login."',
				tipo = '".$tipo."',
				estado = '".$estado."'   
				
			WHERE id = '".$id."'";
	
	
				
	$mysqli->query($sql) ? null : $all_query_ok = false;
	// si los query no dan errores se hace el commit sino se hace el rollback
	if ($all_query_ok) {
		$mysqli->commit();
		$mysqli->close(); 
		$output = msgReturn(true,'Se edit&oacute correctamente');
	} else {
		$mysqli->rollback();
		$mysqli->close(); 
		
		$output = msgReturn(false,'No se pudo editar');
	}
	
	//echo $sql;
	echo $output;
?>