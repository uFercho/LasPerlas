<?php
	header("Content-Type: text/plain"); 
	
	include('../../R&OS_PDF_Class/class.ezpdf.php');
	include_once("../../getFunction.php");
	$idCont = isset($_GET['idCont'])?$_GET['idCont']:''; 	
	$nomCont = isset($_GET['nomCont'])?$_GET['nomCont']:''; 
	//$dateCli = isset($_POST['dateCli'])?$_POST['dateCli']:'22'; 
	$ordCli = isset($_GET['ordCli'])?$_GET['ordCli']:''; 
	$nomCli = isset($_GET['nomCli'])?$_GET['nomCli']:''; 
	$dirCli = isset($_GET['dirCli'])?$_GET['dirCli']:''; 
	$matCli = isset($_GET['matCli'])?$_GET['matCli']:'';
	$sub = isset($_GET['subtotal'])?$_GET['subtotal']:0; 
	$serEsp = isset($_GET['serEsp'])?$_GET['serEsp']:0; 
	$total = isset($_GET['total'])?$_GET['total']:0; 
	 
	$add = isset($_GET['records'])?$_GET['records']:'';
	
	$records = json_decode(stripslashes($add));
	
	$pdf =& new Cezpdf('a4');
	$pdf->selectFont('../../R&OS_PDF_Class/fonts/Helvetica.afm');
	$datacreator = array (
						'Title'=>'RELACION DE TRABAJO DE LOS FABRICADORES',
						'Author'=>'GRANITMAR C.A.',
						'Subject'=>'Reportes',
						'Creator'=>'apbg19@gmail.com',
						'Producer'=>'http://fb.me/'
						);
	$pdf->addInfo($datacreator);
	
	$options = array(
                'shadeCol'=>array(0.9,0.9,0.9),
                'xOrientation'=>'center',
                'width'=>500,
				'cols'=>array(
					'cantidad'=>array('justification'=>'right','width'=>100),
					'costo'=>array('justification'=>'right'),
					'subtotal'=>array('justification'=>'right')
				)
            );
	
	$data[] = array('fabrica'=>'Anillo Sencillo',  		'cantidad'=>0,	'costo'=>40,	'subtotal'=>0,	'id'=>1);  
	$data[] = array('fabrica'=>'Anillo Artesanal de perlas',	'cantidad'=>0,	'costo'=>50,	'subtotal'=>0,	'id'=>2);  
	$data[] = array('fabrica'=>'Collar Sencillo',		'cantidad'=>0,	'costo'=>50,	'subtotal'=>0,	'id'=>3);  
	$data[] = array('fabrica'=>'Collar de Madera',		'cantidad'=>0,	'costo'=>50,	'subtotal'=>0,	'id'=>4);  
	$data[] = array('fabrica'=>'Collar de Perlas',		'cantidad'=>0,	'costo'=>50,	'subtotal'=>0,	'id'=>4);  
	$data[] = array('fabrica'=>'Zarcillo de perlas',	'cantidad'=>0,	'costo'=>25,	'subtotal'=>0,	'id'=>6);  
	$data[] = array('fabrica'=>'Zarcillo artesanal',	'cantidad'=>0,	'costo'=>25,	'subtotal'=>0,	'id'=>7);  
	$data[] = array('fabrica'=>'Figura artesanal',	    'cantidad'=>0,	'costo'=>60,	'subtotal'=>0,	'id'=>8);  
	$data[] = array('fabrica'=>'Pulsera de mano', 		'cantidad'=>0,	'costo'=>40,	'subtotal'=>0,	'id'=>9);  
	$data[] = array('fabrica'=>'Pulsera de pie',		'cantidad'=>0,	'costo'=>140,	'subtotal'=>0,	'id'=>10);  
	$data[] = array('fabrica'=>'Plato artesanal',  		'cantidad'=>0,	'costo'=>5,		'subtotal'=>0,	'id'=>11);  
	$data[] = array('fabrica'=>'Anillo Especial las perlas', 'cantidad'=>0,	'costo'=>100,	'subtotal'=>0,	'id'=>12);  
	$data[] = array('fabrica'=>'Pulsera Especial las perlas', 'cantidad'=>0,	'costo'=>250,	'subtotal'=>0,	'id'=>13);  
	$data[] = array('fabrica'=>'Collar Especial las perlas', 'cantidad'=>0,	'costo'=>250,	'subtotal'=>0,	'id'=>14);
	
	foreach($records as $record){
		foreach($data as $indice => $valor){
			if($record->id == $valor['id']){
				$record->fabrica = Sustituto_Acento($record->fabrica);
				$data[$indice] = objectToArray($record);
			}
		}
	}
	
	$titles = array('fabrica'=>'<b>Descripción</b>', 'cantidad'=>'<b>Cantidad</b>', 'costo'=>'<b>Costo BsF.</b>', 'subtotal'=>'<b>Sub-Total BsF.</b>');
	
	$pdf->ezImage("../../../images/logo.jpg", 0, 150, 'none', 'left');
		
	$pdf->ezText("<b>Factura de Venta</b>\n",16,array('justification'=>'center'));	
	$pdf->ezText("<b>Numero de Factura    #:</b> ".$idCont."\n",16,array('justification'=>'right'));	
	$pdf->ezText("<b>Fecha:</b> ".date("d/m/Y")."\n",10);
	$pdf->ezText("<b>Razon Social:</b> ".$nomCli,10,array('justification'=>'left'));
	$pdf->ezText("<b>R.I.F:</b> ".$ordCli,10,array('justification'=>'left'));
	$pdf->ezText("<b>Dirección:</b> ".$dirCli,10,array('justification'=>'left'));
	$pdf->ezText("<b>Vendedor:</b> ".$nomCont."\n",10,array('justification'=>'right','right'=>10));
	$pdf->ezTable($data,$titles,'',$options );
	$pdf->ezText("\n",5);
	$pdf->ezText("<b>Sub-Total:</b> ".$sub,10,array('justification'=>'right','right'=>30));
	$pdf->ezText("\n",3);
	$pdf->ezText("<b>Otros Servicios:</b> ".$serEsp,10,array('justification'=>'right','right'=>30));
	$pdf->ezText("\n",3);
	$pdf->ezText("<b>Monto Total:</b> ".$total,10,array('justification'=>'right','right'=>30));
	
	
	//$pdf->ezText("\n\n\n",10);
	//$pdf->ezText("<b>Fecha:</b> ".date("d/m/Y"),10);
	//$pdf->ezText("<b>Hora:</b> ".date("H:i:s")."\n\n",10);
	
	ob_end_clean();
	
	$pdf->ezStream();
	
	//echo $out;
	//print_r($records);
	//echo json_encode($paging);
	//print_r($paging);
	
?>