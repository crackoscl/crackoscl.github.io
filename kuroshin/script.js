M.AutoInit();

;

((d,w,n,c)=>{
  //RESGITRO DE SERVICE WORKER
  if ('serviceWorker' in n) {
    window.addEventListener('load',() =>{
      n.serviceWorker.register('./sw.js')
        .then(reg =>{
          c('registrado con exito',reg.scope)
        })
        .catch(err => c('a ocurrido el isguiente error',err))
    })
  }


  //ACTIVANDO NOTIFICACIONES

  if(window.Notification && Notification.permission !== 'denied'){
    Notification.requestPermission(status =>{
      console.log(status)
      let n = new Notification('Titulo',{
        body:'porotito nuevo producto :)',
        icon:'./img/icon_192x192.png'
      })
    })
  }

})(document,window, navigator,console.log);


((d,w,n,c)=>{

})(document,window, navigator,console.log);


((d,w,n,c)=>{

})(document,window, navigator,console.log);



((d,w,n,c)=>{

})(document,window, navigator,console.log);









