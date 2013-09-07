<?php
	include_once("../getFunction.php");
	
	header("Content-Type: text/plain"); 
		
	$start = isset($_POST['start'])?$_POST['start']:0; //posición a iniciar
	$limit = isset($_POST['limit'])?$_POST['limit']:25; //número de registros a mostrar
	$query = isset($_POST['query'])?$_POST['query']:20; 
	
	
	
	$fields = array(
		array("name" => "codigo","type"=>"string"),
		array("name" => "descripcion","type"=>"string"),
		array("name" => "cantidad","type"=>"int"),
		array("name" => "precio","type"=>"float"),
		array("name" => "subtotal","type"=>"float")
	);
	
	$data = array( 
				//array('codigo'=>'A-001', 'descripcion'=>'Articulo 1', 'cantidad'=>3, 'precio'=>300, 'subtotal'=>900),  
				//array('codigo'=>'A-002', 'descripcion'=>'Articulo 2', 'cantidad'=>2, 'precio'=>400, 'subtotal'=>800)  
			);
	
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
	
	echo json_encode($paging)
	//print_r($paging);
?>