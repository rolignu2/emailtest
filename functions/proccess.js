

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
        
        ThreatEmail(array[i] ,  i );
       
    }

}


function ThreatEmail(email , i){
    
    var params = {
        "email": email
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
          
           if(json_data.is_reject == true)
           {
               $("#no_mails").append(json_data.email + ",");
               var v =  parseInt($("#reject_txt").val()) + 1;
               $("#reject_txt").val(v);
                
           }else{
               $("#mails").append(json_data.email + ",");
               
           }
           
            $("#txt_rechazados").html("Correos Rechazados : " +  $("#reject_txt").val());
            $("#txt_procesados").html('Correos Procesados : ' + (i+1));
          
       }

   });
   
}