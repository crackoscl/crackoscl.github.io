fetch('https://mindicador.cl/api')
    .then(response => response.json())
    .then(data => {
        document.getElementById('dolar').innerHTML = (data.dolar.valor);
        document.getElementById('euro').innerHTML = (data.euro.valor);
        document.getElementById('ipc').innerHTML = (data.ipc.valor);
        document.getElementById('uf').innerHTML = (data.uf.valor);
        document.getElementById('utm').innerHTML = (data.utm.valor);
        document.getElementById('tasa_desempleo').innerHTML = (data.tasa_desempleo.valor);
        document.getElementById('bitcoin').innerHTML = (data.bitcoin.valor);
        document.getElementById('libra_cobre').innerHTML = (data.libra_cobre.valor);
    })


function muestraHora() {

    momentoActual = new Date();
    diaFecha = momentoActual.getDate() + '/' + momentoActual.getMonth() + '/' + momentoActual.getFullYear();
    hora = momentoActual.getHours();
    minuto = momentoActual.getMinutes();
    minuto = ('0' + momentoActual.getMinutes());
    minuto = minuto.substr(minuto.length-2,2);
    segundo = momentoActual.getSeconds(); horaImprimible = hora + " : " + minuto;
    document.getElementById('Hora').innerHTML = diaFecha + "&nbsp;&nbsp;" + horaImprimible + "&nbsp;" + "Hrs";
    setTimeout(muestraHora, 60000);
}


function buscar() {

}