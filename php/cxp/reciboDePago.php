<?php
	header("Content-Type: text/plain"); 
	
	include('../R&OS_PDF_Class/class.ezpdf.php');
	include_once("../getFunction.php");
		
	$ciCont = isset($_GET['ciCont'])?$_GET['ciCont']:''; 
	$nomCont = isset($_GET['nomCont'])?$_GET['nomCont']:''; 
	$totalRel = isset($_GET['totalRel'])?$_GET['totalRel']:0; 
	$totalCxc = isset($_GET['totalCxc'])?$_GET['totalCxc']:0; 
	$totalGen = isset($_GET['totalGen'])?$_GET['totalGen']:0; 
	$numFac = isset($_GET['numFac'])?$_GET['numFac']:''; 
	$idCxp = isset($_GET['idCxp'])?$_GET['idCxp']:''; 
	
	$pdf =& new Cezpdf('a4');
	$pdf->selectFont('../R&OS_PDF_Class/fonts/Helvetica.afm');
	$datacreator = array (
						'Title'=>'EMISION DE PAGO',
						'Author'=>'GRANITMAR C.A.',
						'Subject'=>'Reportes',
						'Creator'=>'apbg19@gmail.com',
						'Producer'=>'http://fb.me/'
						);
	$pdf->addInfo($datacreator);
	
	$pdf->ezText("<b>Número: ".$idCxp."</b>",12,array('justification'=>'right'));
	
	$pdf->ezImage("../../images/logo.jpg", 0, 150, 'none', 'left');
	
	$pdf->ezText("\n",2);
	$pdf->ezText("<b>RECIBO DE PAGO</b>\n",16,array('justification'=>'center'));
	$pdf->ezText("<b>Fecha:</b> ".date("d/m/Y"),10);
	$pdf->ezText("\n",2);
	$pdf->ezText("<b>Número de Factura:</b> ".$numFac,10,array('justification'=>'left'));
	$pdf->ezText("\n",2);
	$pdf->ezText("<b>Contratista:</b> ".$nomCont,10,array('justification'=>'left'));
	$pdf->ezText("\n",2);
	$pdf->ezText("<b>Cédula:</b> ".$ciCont."\n\n",10,array('justification'=>'left'));
	$pdf->ezText("\n",2);
	$pdf->ezText("\n",2);
	$pdf->ezText("<b>Total Relaciones:</b> ".$totalRel,10,array('justification'=>'left'));
	$pdf->ezText("\n",2);
	$pdf->ezText("<b>Total Deducciones:</b> ".$totalCxc,10,array('justification'=>'left'));
	$pdf->ezText("\n",2);
	$pdf->ezText("<b>Total a Pagar:</b> ".$totalGen."\n\n",10,array('justification'=>'left'));
	$pdf->ezText("\n",2);

	$pdf->ezText("<b>Firma:</b> __________________________  Cédula: _________________________",10,array('justification'=>'left'));
	
	ob_end_clean();
	
	$pdf->ezStream();
	
?>