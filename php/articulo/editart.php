<?php
	
	include_once("../getFunction.php");
	
	// * = obligatorio en bd
	$id = isset($_POST['txt-id'])?$_POST['txt-id']:''; // *
	$codigo = isset($_POST['txt-codigo'])?$_POST['txt-codigo']:''; // *
	$nombre = isset($_POST['txt-nombre'])?$_POST['txt-nombre']:'';// *
	$costo = isset($_POST['txt-costo'])?$_POST['txt-costo']:'';// *
	$utilidad = isset($_POST['txt-utilidad'])?$_POST['txt-utilidad']:'';// *
	$descripcion = isset($_POST['txt-descripcion'])?$_POST['txt-descripcion']:'';// *
	
	
	$mysqli = newMySQLi(); //$mysqli = new mysqli('localhost', 'my_user', 'my_password', 'my_db');
	// chequeo de coneccion
	if (mysqli_connect_errno()) {
		$output = msgReturn(false,'Conexión fallida. '.mysqli_connect_error());
		break;
	}
	// se desabilita el autocommit
	$mysqli->autocommit(FALSE);	
	
	$all_query_ok=true; // variable de control
	
	
	$sql = "UPDATE articulo SET  
				
				codigo =  '".$codigo."',
				nombre =  '".$nombre."',
				costo =  '".$costo."',
				utilidad =  '".$utilidad."',
				descripcion =  '".$descripcion."'
				
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