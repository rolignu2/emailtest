
function deletedata(data){

    $("#dom" + data).remove();
}

function Filtro(){
    var filter  = $("#filter_data");
    var data = [];
    filter.find("li").each(function(x,y){
          var domain = y.title;
          data.push(domain);
    });
    
    return data;
}



function FillEmail(){
    
    var data = $("#txt_emails").val();
    
    var params = {
        "data": data
    };
    
   
    
    $.ajax({

       type: "POST",
       url: "fillmail.php",
       data: params,
       beforeSend: function()
       {
           $("#filtro").html("Buscando ...");
       },
       success: function(value){
           var d = $.trim(value);
           var s = d.split(',');
           var list = "";
           for(var i = 0 ; i < s.length ; i++){
               list += '<li title="' + s[i] + '"  class="list-group-item active"  id="dom' +  i  + '">' + s[i] +'&nbsp;&nbsp;&nbsp;&nbsp;<button type="button" onclick="deletedata('  + i + ');" calss="btn ">X</button></li>';
           }
           $("#filtro").html(
                   '<ul id="filter_data" sytle="color:black;" class="list-group">'
                   + list
                   + '</ul>'
                );
       }

   });
}



function StartEmail(){
    
    $("#txt_rechazados").html("Correos Rechazados : 0" );
    $("#txt_procesados").html('Correos Procesados : 0' );
    $("#txt_analizar").html('Correos a analizar : 0');
    $("#txt_message_details").html("Comenzando ...");
    $("#no_mails").html("");
    $("#mails").html("");
    
    var data            = $("#txt_emails").val();
    
    var array           = null;
    
    var length          = 0;
   
    
    if(data === "" || data === null){
         $("#txt_message_details").html("No hay correos !!");
         return;
    }
    
    
    data    = $.trim(data);
    
    array   = data.split(",");
    
    length  = array.length;
    
    $("#txt_analizar").html('Correos a analizar : ' + length);
    
    for(var i = 0 ; i < length ; i++){
        
        var flag = false;
         
        var filter = Filtro();
    
        if(filter !== "" && filter !== null){
            $.each(filter , function(x,y){
                var mail_fill = array[i].split("@");
                if(y === "@" + mail_fill[1])
                {
                   flag = true;
                   length = length - 1;
                   $("#txt_analizar").html('Correos a analizar : ' + length);
                }
            });
        }
        if(!flag){
                ThreatEmail(array[i] ,  i  , length);
        }
        
    }
    
    $("#txt_message_details").html("Comenzando ...");

}


function ThreatEmail(email , i , t){
    

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
            
            var percent =Math.round(( (i+1) / t ) * 100);
            
            $("#txt_message_details").html(
                    ' <div class="progress">' + 
                    ' <div class="progress-bar" role="progressbar" aria-valuenow="'
                    + percent + '" aria-valuemin="0" aria-valuemax="100" style="width: ' 
                    + percent + '%;">'
                    + percent + '%'
                    + '</div></div>'
                   );
          
       }

   });
   
}