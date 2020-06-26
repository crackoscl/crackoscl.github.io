M.AutoInit();

if ('serviceWorker' in navigator) {
  window.addEventListener('load',() =>{
    navigator.serviceWorker.register('./sw.js')
      .then(reg =>{
        console.log('registrado con exito',reg.scope)
      })
      .catch(err => console('a ocurrido el isguiente error',err))
  })
  
}