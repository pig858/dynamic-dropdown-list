<?php
	require('public_include.php');
	$year = $_POST['year'];
	$month = $_POST['month'];
	$code = $_POST['code'];
	// echo $year;
	// exit;
	// 1.3.5.7.8.10.12 big 
	// 2.4.6.9.11 small
	switch($code){
		case 'changeDay':
			switch($month){
				case 1:
				case 3:
				case 5:
				case 7:
				case 8:
				case 10:
				case 12:
					echo 31;
					return;
				case 2:
					if( ( ($year % 400) == 0) || ( ( ($year % 100) != 0 ) && ( ($year %4) == 0) ) ){
						echo 29;
						return;
					}else{
						echo 28;	
						return;
					}
				default:
					echo 30;
					return;
			}
			break;
		case 'changeMonth':
			echo 12;
			return;
		default:
			return;
	}

?>