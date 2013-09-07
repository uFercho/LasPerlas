<?php
	
	include_once("../getFunction.php");
	
	// * = obligatorio en bd
	$cedula = isset($_POST['txt-cedula'])?$_POST['txt-cedula']:''; // *
	$nombre = isset($_POST['txt-nombre'])?$_POST['txt-nombre']:''; // *
	$tlf = isset($_POST['txt-tlf'])?$_POST['txt-tlf']:''; // *
	$correo = isset($_POST['txt-correo'])?$_POST['txt-correo']:''; // *
	$direccion = isset($_POST['txt-direccion'])?$_POST['txt-direccion']:''; // *
	$login = isset($_POST['txt-login'])?$_POST['txt-login']:''; // *
	$clave = isset($_POST['clave'])?$_POST['clave']:'';// *
	$tipo = isset($_POST['cmb-tipo'])?$_POST['cmb-tipo']:'';// *
	$estado = isset($_POST['cmb-estado'])?$_POST['cmb-estado']:'';// *
	
	$mysqli = newMySQLi(); //$mysqli = new mysqli('localhost', 'my_user', 'my_clave', 'my_db');
	// chequeo de coneccion
	if (mysqli_connect_errno()) {
		$output = msgReturn(false,'Conexión fallida. '.mysqli_connect_error());
		break;
	}
	// se desabilita el autocommit
	$mysqli->autocommit(FALSE);	
	
	$all_query_ok=true; // variable de control
	
	$sql = "INSERT INTO usuario (
				id,
				cedula,
				nombre,
				tlf,
				correo,
				direccion,
				login,
				clave,
				tipo,
				estado 
				)
			VALUES (
				NULL , ";
				
	$sql.="'".$cedula."' , ";
	$sql.="'".$nombre."' , ";
	$sql.="'".$tlf."' , ";
	$sql.="'".$correo."' , ";
	$sql.="'".$direccion."' , ";
	$sql.="'".$login."' , ";
	$sql.="'".$clave."' , ";
	$sql.="'".$tipo."' , ";
	$sql.="'".$estado."' );";
				
	$mysqli->query($sql) ? null : $all_query_ok = false;
	// si los query no dan errores se hace el commit sino se hace el rollback
	if ($all_query_ok) {
		$mysqli->commit();
		$output = msgReturn(true,'Se guard&oacute; correctamente');
		$mysqli->close(); 
	} else {
		$output = msgReturn(false,'No se pudo guardar. ERROR: Usuario ya registrado');
		$mysqli->rollback();		
		$mysqli->close(); 
	}
	
	//echo $sql;
	echo $output;
?>