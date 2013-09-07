<?php
	include_once("../getFunction.php");
		
	$id = isset($_POST['id'])?$_POST['id']:"32"; 
	
	$sql = "SELECT 
				codigo ,
				nombre ,
				costo,
				utilidad ,
				precio
			FROM 
				articulo
			WHERE
				id = '".$id."'";
				
	$mysqli = newMySQLi();
	
	
	
	if (mysqli_connect_errno()) {/*exit();*/}
	
	if ($result = $mysqli->query($sql)) {
		while($row = $result->fetch_object()) {
			$out = $id.';';
			$out.= $row->codigo.';';
			$out.= $row->nombre.';';
			$out.= $row->costo.';';
			$out.= $row->utilidad.';';
			$out.= $row->precio.';';
		} 
		// Free result 
		$result->close(); 
	}
    unset($row); 
    unset($sql);
	echo $out;
	
?>  