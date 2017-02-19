 $(document).ready(function () {
           
var clinica = $.getJSON("crackoscl.json", function (data) {
    
$("#boton").click(Tpasientes);

function Tpasientes(){
var Prueba = $(data).filter(function (i,n){
  return n.sexo === "F";
});

$("#pacientes tbody").empty();
    var row = "";

for (var i=0;i<Prueba.length;i++)
  {
       
        row += "<tr>"+
        "<td>"+ Prueba[i].fecha+ "</td>"+
        "<td>"+ Prueba[i].nombre+ "</td>"+
        "<td>"+ Prueba[i].rut + "</td>"+
        "<td>"+ Prueba[i].comuna + "</td>"+
        "<td>"+ Prueba[i].edad + "</td>"+
        "<td>"+ Prueba[i].sexo + "</td>"+
        "<td>"+ Prueba[i].pre + "</td>"+
        "<td>"+ Prueba[i].telefono + "</td>"+
        "<td>"+ Prueba[i].ingreso + "</td>"+
        "<td>"+ Prueba[i].estado + "</td>"+    "</tr>"  
}

  console.log(row);
    $("#pacientes tbody").append(row);
    row = "";
}

   });

 
});




 
