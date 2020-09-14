

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
          item.valor = element.acf.valor;
          item.descripcion = element.acf.descripcion;
          item.imagen = element.acf.imagen.url;
          this.lista.push(item)
        });
      }
      catch(error){
        console.log(error)
      }
    },

    AgregarCarro(prod){
      this.total += parseInt(prod.valor) 
      this.carrito.push({
        nombre:prod.nombre,
        valor:prod.valor,
      })
    },

    precio(value){
      return '$' + value
    },

    EnviarPedido(){
      if(this.carrito.length === 0){
        this.showDismissibleAlert = true
      }
      else{
        console.log("pedido enviado")
      }
    }

  } //methods
 

})
  