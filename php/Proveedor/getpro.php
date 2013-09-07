<?php
	include_once("../getFunction.php");
		
	$id = isset($_POST['id'])?$_POST['id']:"32"; 
	
	$sql = "SELECT 
				rif ,
				nombre ,
				tlf,
				direccion ,
				fax ,
				email 
			FROM 
				proveedor
			WHERE
				id = '".$id."'";
				
	$mysqli = newMySQLi();
	
	
	
	if (mysqli_connect_errno()) {/*exit();*/}
	
	if ($result = $mysqli->query($sql)) {
		while($row = $result->fetch_object()) {
			$out = $id.';';
			$out.= $row->rif.';';
			$out.= $row->nombre.';';
			$out.= $row->tlf.';';
			$out.= $row->direccion.';';
			$out.= $row->fax.';'; 
			$out.= $row->email.';';
		} 
		// Free result 
		$result->close(); 
	}
    unset($row); 
    unset($sql);
	echo $out;
	
?>  