<?php
	header("Content-Type: text/plain"); 
	
	$data = array(  
        'success'=>true,  
        'total'=>11,  
        'data'=>array(  
            array('fabrica'=>'Anillo Sencillo',			    		'cantidad'=>0,	'costo'=>40,	'subtotal'=>0,	'id'=>1),  
			array('fabrica'=>'Anillo Artesanal de perlas',			'cantidad'=>0,	'costo'=>50,	'subtotal'=>0,	'id'=>2),  
			array('fabrica'=>'Collar Sencillo',					'cantidad'=>0,	'costo'=>50,	'subtotal'=>0,	'id'=>3),  
			array('fabrica'=>'Collar de Perlas',				'cantidad'=>0,	'costo'=>50,	'subtotal'=>0,	'id'=>4),  
			array('fabrica'=>'Zarcillo Sencillo',				'cantidad'=>0,	'costo'=>50,	'subtotal'=>0,	'id'=>5),  
			array('fabrica'=>'Zarcillo de perlas',			           		 	'cantidad'=>0,	'costo'=>25,	'subtotal'=>0,	'id'=>6),  
			array('fabrica'=>'Zarcillo artesanal',				    		'cantidad'=>0,	'costo'=>25,	'subtotal'=>0,	'id'=>7),  
			array('fabrica'=>'Figura artesanal',	'cantidad'=>0,	'costo'=>60,	'subtotal'=>0,	'id'=>8),  
			array('fabrica'=>'Pulsera de mano',			        		'cantidad'=>0,	'costo'=>40,	'subtotal'=>0,	'id'=>9),  
			array('fabrica'=>'Pulsera de pie',						'cantidad'=>0,	'costo'=>140,	'subtotal'=>0,	'id'=>10),  
			array('fabrica'=>'Plato artesanal',		    		'cantidad'=>0,	'costo'=>5,		'subtotal'=>0,	'id'=>11),  
			array('fabrica'=>'Anillo Especial las perlas',						'cantidad'=>0,	'costo'=>100,	'subtotal'=>0,	'id'=>12),  
			array('fabrica'=>'Pulsera Especial las perlas',						'cantidad'=>0,	'costo'=>250,	'subtotal'=>0,	'id'=>13),  
			array('fabrica'=>'Collar Especial las perlas',						'cantidad'=>0,	'costo'=>250,	'subtotal'=>0,	'id'=>14)
        )  
    );  
	
	//print_r($data);
	echo json_encode($data);
?>