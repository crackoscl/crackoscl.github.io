 $(document).ready(function () {
           
var clinica = $.getJSON("crackoscl.json", function (data) {
    $("#pacientes tbody").empty();
    var row = "";
    for(pacientes in data){
        console.log(pacientes, ',', data[pacientes]);
       
        row += "<tr>"+
        "<td>"+ data[pacientes].fecha+ "</td>"+
        "<td>"+ data[pacientes].nombre+ "</td>"+
        "<td>"+ data[pacientes].rut + "</td>"+
        "<td>"+ data[pacientes].comuna + "</td>"+
        "<td>"+ data[pacientes].edad + "</td>"+
        "<td>"+ data[pacientes].sexo + "</td>"+
        "<td>"+ data[pacientes].pre + "</td>"+
        "<td>"+ data[pacientes].telefono + "</td>"+
        "<td>"+ data[pacientes].ingreso + "</td>"+
        "<td>"+ data[pacientes].estado + "</td>"+
    "</tr>"      

    }
      console.log(row);
    $("#pacientes tbody").append(row);
    row = "";            
   });
     
        
  $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 100,
      values: [ 15, 60 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      }
    });
      
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) +
      " - " + $( "#slider-range" ).slider( "values", 1 ) );
      
    
      
  } );     
     
});
            
