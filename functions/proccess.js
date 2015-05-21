

function StartEmail(){
    
    
    var data            = $("#txt_emails").val();
    
    var array           = null;
    
    var length          = 0;
    
    var rejected        = null;
    
    
    if(data === "" || data === null){
         $("#txt_message_details").html("No hay correos !!");
         return;
    }
    
    
    data    = $.trim(data);
    
    array   = data.split(",");
    
    length  = array.length;
    
    $("#txt_analizar").html('Correos a analizar : ' + length);
    
    for(var i = 0 ; i < length ; i++){
        
        rejected   = $("#reject_txt").val();
        ThreatEmail(array[i] , rejected  , i );
       
    }

}


function ThreatEmail(email ,  rejected , i){
    
    var params = {
        "email": email,
        "rejected": rejected
    };
    
    $.ajax({
       
       type: "POST",
       url: "mailtest.php",
       data: params,
       beforeSend: function()
       {
           $("#").html("");
       },
       success: function(value){
           var json_data = JSON.parse(value);
           $("#txt_rechazados").html("Correos Rechazados : " + json_data.reject);
           $("#reject_txt").val(json_data.reject);
           
           if(json_data.is_reject == true)
           {
               $("#no_mails").append(json_data.email + ",");
                
           }else{
               $("#mails").append(json_data.email + ",");
               
           }
           
            $("#txt_procesados").html('Correos Procesados : ' + (i+1));
          
       }

   });
   
}