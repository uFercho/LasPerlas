<?php
	
	include_once("../getFunction.php");
	
	// * = obligatorio en bd
	$id = isset($_POST['txt-id'])?$_POST['txt-id']:''; // *
	$rif = isset($_POST['txt-rif'])?$_POST['txt-rif']:''; // *
	$nombre = isset($_POST['txt-nombre'])?$_POST['txt-nombre']:'';// *
	$fijo = isset($_POST['txt-fijo'])?$_POST['txt-fijo']:'';// *
	$direccion = isset($_POST['txt-direccion'])?$_POST['txt-direccion']:'';// *
	$fax = isset($_POST['txt-fax'])?$_POST['txt-fax']:'';// *
	$email = isset($_POST['txt-correo'])?$_POST['txt-correo']:'';// *
	
	
	$mysqli = newMySQLi(); //$mysqli = new mysqli('localhost', 'my_user', 'my_password', 'my_db');
	// chequeo de coneccion
	if (mysqli_connect_errno()) {
		$output = msgReturn(false,'Conexión fallida. '.mysqli_connect_error());
		break;
	}
	// se desabilita el autocommit
	$mysqli->autocommit(FALSE);	
	
	$all_query_ok=true; // variable de control
	
	
	$sql = "UPDATE proveedor SET  
				
				rif =  '".$rif."',
				nombre =  '".$nombre."',
				tlf =  '".$fijo."',
				direccion =  '".$direccion."',
				fax =  '".$fax."',
				email = '".$email."'
				
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