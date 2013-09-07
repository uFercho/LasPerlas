<?php
	
	include_once("../getFunction.php");
	
	// * = obligatorio en bd
	$rif = isset($_POST['txt-rif'])?$_POST['txt-rif']:''; // *
	$nombre = isset($_POST['txt-nombre'])?$_POST['txt-nombre']:'';// *
	$fijo = isset($_POST['txt-fijo'])?$_POST['txt-fijo']:'';// *
	$direccion = isset($_POST['txt-direccion'])?$_POST['txt-direccion']:'';
	$fax = isset($_POST['txt-fax'])?$_POST['txt-fax']:'';// *
	$correo = isset($_POST['txt-correo'])?$_POST['txt-correo']:'';// *
	$movil = isset($_POST['txt-movil'])?$_POST['txt-movil']:'';// *
	
	$mysqli = newMySQLi(); //$mysqli = new mysqli('localhost', 'my_user', 'my_password', 'my_db');
	// chequeo de coneccion
	if (mysqli_connect_errno()) {
		$output = msgReturn(false,'Conexión fallida. '.mysqli_connect_error());
		break;
	}
	// se desabilita el autocommit
	$mysqli->autocommit(FALSE);	
	
	$all_query_ok=true; // variable de control
	
	$sql = "INSERT INTO cliente (
				id ,
				rif ,
				nombre ,
				tlf_fijo ,
				direccion ,
				fax ,
				email ,
				tlf_movil
				)
			VALUES (
				NULL , ";
				
	$sql.="'".$rif."' , ";
	$sql.="'".$nombre."' , ";
	$sql.="'".$fijo."' , ";
	$sql.="'".$direccion."' , ";
	$sql.="'".$fax."' , ";
	$sql.="'".$correo."' , ";
	$sql.="'".$movil."' );";
				
	$mysqli->query($sql) ? null : $all_query_ok = false;
	// si los query no dan errores se hace el commit sino se hace el rollback
	if ($all_query_ok) {
		$mysqli->commit();
		$output = msgReturn(true,'Se guard&oacute; correctamente');
		$mysqli->close(); 
	} else {
		$output = msgReturn(false,'No se pudo guardar. ERROR: Cliente ya registrado');
		$mysqli->rollback();		
		$mysqli->close(); 
	}
	
	//echo $sql;
	echo $output;
?>