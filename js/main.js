

$(document).ready(function() {
    $('#pacientes').DataTable({
        "processing" : true,
        "ajax" : {
            "url" : "https://crackoscl.github.io/crackoscl.json",
            dataSrc : ''
        },
        "columns" : [ {
            "data" : "fecha"
        }, {
            "data" : "nombre"
        }, {
            "data" : "rut"
        }, {
            "data" : "comuna"
        },
        {
            "data" : "edad"
        },{
            "data" : "sexo"
        },{
            "data" : "pre"
        },{
            "data" : "telefono"
        },{
            "data" : "ingreso"
        },{
            "data" : "estado"
        }
        ]
    });
});

