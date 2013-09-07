<?php
	include_once("../getFunction.php");
		
	$start = isset($_POST['start'])?$_POST['start']:0; //posición a iniciar
	$limit = isset($_POST['limit'])?$_POST['limit']:25; //número de registros a mostrar
	$query = isset($_POST['query'])?$_POST['query']:'fer'; 
	
	
	
	$fields = array(
		array("name" => "id","type"=>"string"),
		array("name" => "name","type"=>"string"),
		array("name" => "cedu","type"=>"string")
	);
	
	$data = array();
	
	$sql = "SELECT 
				id,
				rif ,
				nombre ,
				email
			FROM 
				cliente 
			WHERE
				nombre LIKE  CONCAT('"./*Valida_root(*/$query/*)*/."','%')";
	
	$mysqli = newMySQLi();
	
	if (mysqli_connect_errno()) {}
	
	if ($result = $mysqli->query($sql)) {
		$rowNum = 0;
		while($row = $result->fetch_object()) {
			$data[$rowNum]['id']  = $row->id;
			$data[$rowNum]['name']  = $row->nombre;
			$data[$rowNum]['cedu'] = $row->rif;
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