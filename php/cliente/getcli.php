<?php
	include_once("../getFunction.php");
		
	$id = isset($_POST['id'])?$_POST['id']:"32"; 
	
	$sql = "SELECT 
				rif ,
				nombre ,
				tlf_fijo ,
				direccion ,
				fax ,
				email ,
				tlf_movil				
			FROM 
				cliente
			WHERE
				id = '".$id."'";
				
	$mysqli = newMySQLi();
	
	
	
	if (mysqli_connect_errno()) {/*exit();*/}
	
	if ($result = $mysqli->query($sql)) {
		while($row = $result->fetch_object()) {
			$out = $id.';';
			$out.= $row->rif.';';
			$out.= $row->nombre.';';
			$out.= $row->tlf_fijo.';';
			$out.= $row->direccion.';';
			$out.= $row->fax.';'; 
			$out.= $row->email.';'; 
			$out.= $row->tlf_movil.';';
		} 
		// Free result 
		$result->close(); 
	}
    unset($row); 
    unset($sql);
	echo $out;
	
?>  