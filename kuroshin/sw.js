const CACHE_NAME = 'Kuroshin-Prueba',
  urlsToCache = [
    './',
    './?utm=homescreen',
    './index.html',
    './index.html?utm=homescreen',
    './style.css',
    './script.js',
    './favicon.ico',
    './img/icon_192x192.png',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css'

  ]



  self.addEventListener('install', e => {
    console.log('Evento: SW Instalado')
    e.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache => {
          console.log('Archivos en cache')
          return cache.addAll(urlsToCache)
          .then( () => self.skipWaiting() )
          //skipWaiting forza al SW a activarse
        })
        .catch(err => console.log('Falló registro de cache', err) )
    )
  })
  
  
  self.addEventListener('activate', e => {
    console.log('Evento: SW Activado')
    const cacheWhitelist = [CACHE_NAME]
  
    e.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            //Eliminamos lo que ya no se necesita en cache
            if ( cacheWhitelist.indexOf(cacheName) === -1 )
              return caches.delete(cacheName)
          })
        )
      })
      .then(() => {
        console.log('Cache actualizado')
        // Le indica al SW activar el cache actual
        return self.clients.claim()
      })
    )
  })
  


  self.addEventListener('fetch', e => {
    console.log('Evento: SW Recuperando')
  
    e.respondWith(
      //Miramos si la petición coincide con algún elemento del cache
      caches.match(e.request)
      .then(res => {
          console.log('Recuperando cache')
          if ( res ) {
            //Si coincide lo retornamos del cache
            return res
          }
          //Sino, lo solicitamos a la red
          return fetch(e.request)
        })
      )
  })
  

  
self.addEventListener('push', e =>{
  console.log('evento push')
  let title = 'Push notificacion demo',
    options = {
      body:'click para regresar a la aplicacion',
      icon:'./img/icon_192x192.png',
      vibrate:[100,50,100],
      data:{ id: 1 },
      actions: [
        {'action': 'si', 'title': 'ejemplo :)' , icon:'./img/icon_192x192.png'},
        {'action': 'si', 'title': 'no me gusta  :(' , icon:'./img/icon_192x192.png'}
      ]
    }

    e.waitUntil(self.registration.showNotification(title, options))
})