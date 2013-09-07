<?php
	include_once("../getFunction.php");
	require_once('../R&OS_PDF_Class/class.ezpdf.php');
	
	
	/*$ini = isset($_GET['ini'])?$_GET['ini']:'1'; // *
	$fin = isset($_GET['fin'])?$_GET['fin']:'100'; // **/
	
	$pdf =& new Cezpdf('a4');
	$pdf->selectFont('../R&OS_PDF_Class/fonts/Helvetica.afm');
	
	//$pdf->ezSetCmMargins(1,1,1.5,1.5);
	
	$datacreator = array (
                    'Title'=>'Ejemplo PDF',
                    'Author'=>'unijimpe',
                    'Subject'=>'PDF con Tablas',
                    'Creator'=>'unijimpe@hotmail.com',
                    'Producer'=>'http://blog.unijimpe.net'
                    );
	
	$pdf->addInfo($datacreator);

	$data = array();
	
	$sql = "SELECT 
				codigo,
				nombre,
				costo,
				utilidad			
			FROM 
				articulo
			ORDER BY codigo,nombre
				";
			
			/*WHERE
				id BETWEEN ".$ini." AND ".$fin;*/
	
	$mysqli = newMySQLi();
	
	if (mysqli_connect_errno()) {}
	
	if ($result = $mysqli->query($sql)) {
		while($row = $result->fetch_object()) {
			
			$data[] = array('name'=>$row->nombre, 'codi'=>$row->codigo, 'costo'=>$row->costo, 'utilidad'=>$row->utilidad);
		} 
		// Free result 
		$result->close(); 
	}
	
	$titles = array(
					'name'=>'<b>Nombre</b>',
					'codi'=>'<b>Codigo</b>',
					'utilidad'=>'<b>% de Utilidad</b>',
					'costo'=>'<b>Costo</b>'
				);
	
	$options = array(
					'shadeCol'=>array(0.9,0.9,0.9),
					'xOrientation'=>'center',
					'width'=>500
				);
	
	$pdf->ezImage("../../images/logo.jpg", 0, 150, 'none', 'left');
	
	$pdf->ezText("Reporte de Inventario \n", 12);
	$pdf->ezTable($data, $titles, '', $options);
	$pdf->ezText("\n\n\n", 10);
	$pdf->ezText("<b>Fecha:</b> ".date("d/m/Y"), 10);
	$pdf->ezText("<b>Hora:</b> ".date("H:i:s")."\n\n", 10);
	
	ob_end_clean();
	
	$pdf->ezStream();
?>