<?php
	/*
	* Name: Editable
	* Author: Amir R Muntasser
	* Description: A little tool to enable live editing on a static webpage.
	* Dependencies: jQuery 1.4.2+
	* License: MIT License
	*/

	include_once "format.php";
	include_once "simple.php";
	
	$file = "index.html";
	
	$array = $_REQUEST["data"];
	$simple_old = file_get_html("index.html");
	
	$editables = $simple_old->find(".editable");
	for($i = 0; $i < count($editables); $i++) {
		$simple_old->find(".editable", $i)->innertext = $array[$i];
	}
	
	$string = $simple_old->save();
	
	$format = new Format;
	$html = $format->HTML($string);	
	
	if(get_magic_quotes_gpc()) {
		$html = stripslashes($html);
	}
	
	file_put_contents($file, $html);
	echo $html;
?>