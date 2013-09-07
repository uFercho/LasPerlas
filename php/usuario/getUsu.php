<?php
	include_once("../getFunction.php");
		
	$id = isset($_POST['id'])?$_POST['id']:''; 
	
	$sql = "SELECT 
				cedula,
				nombre,
				tlf,
				correo,
				direccion,
				login,
				tipo,
				estado
			FROM 
				usuario 
			WHERE
				id = '".$id."'";
				
	$mysqli = newMySQLi();
	
	if (mysqli_connect_errno()) {/*exit();*/}
	
	if ($result = $mysqli->query($sql)) {
		while($row = $result->fetch_object()) {
			$out = $id.';';
			$out.= $row->cedula.';';
			$out.= $row->nombre.';';
			$out.= $row->tlf.';';
			$out.= $row->correo.';';
			$out.= $row->direccion.';';
			$out.= $row->login.';';
			$out.= $row->tipo.';';
			$out.= $row->estado; 
		} 
		// Free result 
		$result->close(); 
	}
    unset($row); 
    unset($sql);
	echo $out;
	
?>  