<?php
	header("Content-Type: text/plain"); 
	
	include_once("../getFunction.php");
		
	$id = isset($_POST['id'])?$_POST['id']:'22'; 
	
	$fields=array(
		array("name" => "nombre","header"=>"Nombre"),
		array("name" => "rif","header"=>"rif"),
		array("name" => "tipo","header"=>"tipo"),
		array("name" => "email","header"=>"Email")
	);
	
	$sql = "SELECT 
				nombre,
				rif ,
				tipo ,
				email 
			FROM 
				cliente 
			WHERE
				id = '".$id."'";
				
	$mysqli = newMySQLi();
	if (mysqli_connect_errno()) {/*exit();*/}
	
	if ($result = $mysqli->query($sql)) {
		while($row = $result->fetch_object()) {
			$data[0]['nombre'] = $row->nombre;
			$data[0]['rif'] = $row->rif;
			$data[0]['tipo'] = $row->tipo;
			$data[0]['email'] = $row->email;
		} 
		// Free result 
		$result->close(); 
	}
    unset($row); 
    unset($sql);	
	
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