<?php
    header('Content-Type: application/json;charset=utf-8'); //return json string
    include("common.inc.php");
    $area_id = $_POST['area_id'];
    $jsonArray = array();
    if ($area_id != 0) {
        /* do some stuff to get data(level 2)*/
        /* then put the data into jsonArray */
    } else {
        echo 0;
        return;
    }
    echo json_encode($jsonArray);
    return;
?>
