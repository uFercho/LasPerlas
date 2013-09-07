<?php
	include_once("../getFunction.php");
		
	$start = isset($_POST['start'])?$_POST['start']:0; //posición a iniciar
	$limit = isset($_POST['limit'])?$_POST['limit']:25; //número de registros a mostrar
	$query = isset($_POST['query'])?$_POST['query']:'ufer'; 
	
	
	
	$fields = array(
		array("name" => "id","type"=>"string"),
		array("name" => "cedula","type"=>"string"),
		array("name" => "nombre","type"=>"string"),
		array("name" => "tlf","type"=>"string"),
		array("name" => "correo","type"=>"string"),
		array("name" => "direccion","type"=>"string"),
		array("name" => "login","type"=>"string"),
		array("name" => "clave","type"=>"string"),
		array("name" => "tipo","type"=>"string"),
		array("name" => "estado","type"=>"string"),
		array("name" => "url","type"=>"string")
	);
	
	$data = array();
	
	$sql = "SELECT 
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
			FROM 
				usuario 
			WHERE
				login LIKE  CONCAT('"./*Valida_root(*/$query/*)*/."','%') OR nombre LIKE '%' '".$query."' '%' OR correo LIKE '%' '".$query."' '%' ";

	$mysqli = newMySQLi();
	
	if (mysqli_connect_errno()) {}
	
	if ($result = $mysqli->query($sql)) {
		$rowNum = 0;
		while($row = $result->fetch_object()) {
			$data[$rowNum]['id']  	= $row->id;
			$data[$rowNum]['cedula']  	= $row->cedula;
			$data[$rowNum]['nombre']  	= $row->nombre;
			$data[$rowNum]['tlf']  	= $row->tlf;
			$data[$rowNum]['correo']  	= $row->correo;
			$data[$rowNum]['direccion'] = $row->direccion;
			$data[$rowNum]['login'] 	= $row->login;
			$data[$rowNum]['clave']  	= $row->clave;
			$data[$rowNum]['tipo']	= $row->tipo;
			$data[$rowNum]['estado']= $row->estado;
			$data[$rowNum]['url']= $row->estado == 'Activo'?'http://localhost/lasperlas/images/main-menu/accept.png':'http://localhost/lasperlas/images/main-menu/delete.png';
			$rowNum++;
		} 
		// Free result 
		$result->close(); 
	}
	
	$metadata = array(
		"totalProperty"		=> "total",
		"successProperty"	=> "success",
		"fields"			=> $fields,
		"root"				=> "data"
	);
	
	$paging = array(
		'success'	=>true,
		'metaData'	=> $metadata,
		'total'		=>count($data), //<--- total de registros a paginar
		'data'		=> array_splice($data,0,count($data))
	);
	
	echo json_encode($paging);
	//print_r($paging);
?>