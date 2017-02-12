 var config = {
    apiKey: "AIzaSyCe9sgnYezdw4cxguuy72ga_7N7oDPAF30",
    authDomain: "crackoscl.firebaseapp.com",
    databaseURL: "https://crackoscl.firebaseio.com",
    storageBucket: "crackoscl.appspot.com",
    messagingSenderId: "598614736278"
  };
  firebase.initializeApp(config);




var clinica = firebase.database().ref();
clinica.on('value', function(snapshot) {
  var data = snapshot.val();
$("#pacientes tbody").empty();
    
var row = "";
    for(pacientes in snapshot.val()){
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
