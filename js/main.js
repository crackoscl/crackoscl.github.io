

new Vue({
  el: '#app',
  data () {
    return {
      lista: [],
      total: 0,
      show:false,
      fields: ['key', 'nombre', 'valor'],
      carrito:[],
      showDismissibleAlert: false
    }
  },

  created(){
    this.GetLista()
  },

  methods:{
    async GetLista(){
      try{
        const ListaWP = await axios.get('http://www.micompleto.cl/wp-json/wp/v2/menu')

        await ListaWP.data.forEach(element => {
          let item = {}
          item.nombre = element.acf.nombre;
          item.valor = parseInt(element.acf.valor);
          item.descripcion = element.acf.descripcion;
          item.imagen = element.acf.imagen.url;
          this.lista.push(item)
        });
      }
      catch(error){
        console.log(error)
      }
    },

    AgregarCarro(prod,index){
      this.total += prod.valor 
      this.carrito.push({
        id:index,
        nombre:prod.nombre,
        valor:prod.valor,
      })
    },

    precio(value){
      //toLocaleString('es',20)
      return '$' + value.toLocaleString('es',20)
    },

    EliminarPedido(prod,id){
      this.total -= prod.valor
      this.carrito.splice(id,1)
    },


    EnviarPedido(){
      if(this.carrito.length === 0){
        this.showDismissibleAlert = true
      }
      else{
           function ismobile(){
              if (sessionStorage.desktop)
                    return false;
                else if (localStorage.mobile)
                    return true;
                var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
                for (var i in mobile)
                    if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
                return false;
            }
            const urlDesktop = 'https://web.whatsapp.com/';
            const urlMobile = 'whatsapp://';
            const telefono = '34654087601';
            item = {}
            this.carrito.forEach(function(prd){
              var repetido = prd["nombre"]
              item[repetido] = item[repetido] ? (item[repetido] + 1): 1;
            })

             let mensaje = 'send?phone=' + telefono + '&text=*_Formulario Lillo APP CODE_*%0A* PRODUCTO *%0A' +JSON.stringify(item)+ '%0A* TOTAL *%0A' +'$'+ this.total + ''

          if(ismobile()){
            window.open(urlMobile + mensaje, '_blank')
          }else{
            window.open(urlDesktop + mensaje, '_blank')
          }
          }
        
    }
  } //methods
 
})
  