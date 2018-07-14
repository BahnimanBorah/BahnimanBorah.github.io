<?php

$firstname=$surname=$email=$birthday=$gender="";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name= $_POST["name"];
    $contact= $_POST["contact"];
    $message= $_POST["message"];

    if($name!="" || $contact!=""){
        include 'savedata.php';
        $data = new JSONdata();
        $data->storeData($name,$contact,$message);
        header('Location: ../index.html');
    }
    
    }
?>