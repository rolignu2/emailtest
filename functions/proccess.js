

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
    
    for(var i = 0 ; i < length ; i++){
        rejected   = $("#txt_rechazados").html();
        var r      = $.trim(rejected[1]);
        
        ThreatEmail(array[i] , (i+1) , length , r );
    }

}


function ThreatEmail(email ,  rejected){
    
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
           alert(value);
           var json_data = JSON.parse(value);
           alert(json_data[0].email);
           //$("#txt_rechazados").html("Correos Rechazados : 0");
          // $("#").html("");
       }

   });
   
}