<?php
	include_once("../getFunction.php");

	$db = new ClassDB_Conex();
	
	$mysqldump	= '"D:\Mis Archivos\wamp\bin\mysql\mysql5.1.53\bin\mysqldump.exe"';
	$timeName = date('d-M-Y_H.i.s');
	$dir_backup	= '"D:\Mis Archivos\wamp\www\Proyec_Pichu\php\database_backup\backup_db_'.$timeName.'.sql"';
	
	$command = $mysqldump.' -h '.$db->getHost().' -u '.$db->getUser().' '.$db->getPass().' '.$db->getDB().' > '.$dir_backup.'';
	
	system($command, $return);
	
	if($return == 0)
		echo 'Respaldo Exitoso!. Archivo generado: backup_db_'.$timeName.'.sql';
	else
		echo 'No se pudo realizar el respaldo de la BD. Contacte al administrador del Sistema';
?>