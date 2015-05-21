<?php


function debug($s) {  flush(); }

function freadu($fp,$u) {
  $s = fread($fp, 4096);
  $l = strlen($u);
  while (substr($s, -$l)!==$u) $s.=fread($fp,4096);
  return $s;
}

function mailcommand($fp, $command, $debug=false) {
  $code = false;
  @fwrite($fp, "$command\r\n"); 
  $s = @freadu($fp, "\r\n");
  $s = explode("\n", trim($s));
  $code = substr(trim($s[count($s)-1]), 0, 3); 
  return $code;
}

function mailtest($email, $debug=false) {

  list($user, $domain) = explode('@', $email);

  // registros mx
  $getmxrr = getmxrr($domain, $mx_records, $mx_weights);
  if (($getmxrr==true) and (count($mx_records)>0)) {
    for ($i=0; $i<count($mx_records); $i++) $mxs[$mx_records[$i]] = $mx_weights[$i];
    asort($mxs);
    $mx_records = array_keys($mxs);
    $mx_weights = array_values($mxs);
  }
  else {    
    if ($debug) debug("None found.\nUsing domain \"$domain\" as mail server...\n");
    $mx_records[0] = $domain; // si no se obtienen regs MX, usar el mismo dominio
  }
  $return = false;
  foreach ($mx_records as $mx_host) {

    $fp = @fsockopen($mx_host, 25, $fs_errn, $fs_errs, 5);
    if ($fp) {
      $s = @freadu($fp, "\r\n");
     
      $code = mailcommand($fp, "EHLO mail_test", $debug);
      if (($code!='250') and ($code!='220')) {   
        fclose($fp);
        continue;
      }  
      $return = $code=='250';
      break;
    }
  }

  return $return;  
}

$email          = $_REQUEST['email'];
$rejected       = $_REQUEST['rejected'] ;
$data           = array();

if (mailtest($email, true)){
     $data = array("email" => $email , "reject" => $rejected  , "is_reject" => false);
}
else{
    $data = array("email" => $email , "reject" => ($rejected  + 1) ,  "is_reject" => true);
}
  
echo json_encode($data);
