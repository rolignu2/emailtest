<?php

$data   = $_REQUEST['data'];

$array  = explode(",", $data);

$result = array();

if(count($array) >= 2){
foreach($array as $value)
{
     $flag = true;
     $dom = explode("@", $value);
     if(count($result) >= 1){
        foreach ($result as $r ){
            if($r === "@" . $dom[1]){
               $flag = false;
               break;
            }
        }
        if($flag){
             array_push($result, "@".$dom[1]);
        }
     }else{
         array_push($result, "@" .$dom[1]);
     }
}
}

echo implode(",", $result);

