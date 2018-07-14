<?php

class JSONData{
    function storeData($name,$contact,$message){
        $savefile = fopen("data/".$name.".json", "w") or die("Error opening file!");
        $data = '{"name":"'.$name.'","contact-detail":"'.$contact.'","Message":"'.$message.'"}';
        fwrite($savefile, $data);
        fclose($savefile);
    }
}

?>