new Vue({
    el: '#app',
    data() {
      return {

      form:{
        producto:null,
        ingredienteproducto:[],
        listabebidas:[],
        listadete:[],
        listadejugos:[],
        bebida:null,
      },

      max:1,

      opcionesproducto:[
        {text:'Selecione un producto', value:'null'},
        {text: 'Completo', value: 'Completo' },
        { text: 'Fajita', value: 'Fajita' },
        { text: 'Sandiwch', value: 'Sandiwch' },
      ],
     
      opcionesbebida:[
        {text:'Selecione un bebida', value:'null'},
        {text: 'Jugo', value: 'Jugo' },
        { text: 'Te', value: 'Te' },
        { text: 'Cafe', value: 'Cafe'},
        { text: 'Energetica', value: 'Energetica'},
      ],
      
      jugos:[
        
          {text:'Manzana', value:'Manzana'},
          {text:'Limonada', value:'Pera'},
          {text:'Platano', value:'Platano'},
          {text:'Naranja', value:'Naranja'},
          {text:'Pera', value:'Pera'},
        
      ],
       
      Te:[
        
        {text:'Te Verde', value:'Te Verde'},
        {text:'Te Ceilan', value:'Te Ceilan'},
        {text:'Te Azul', value:'Te Azul'},
        {text:'Te de Marihuana', value:'Te Marihuana'},
        {text:'Te de Mora', value:'Te Mora'},
    ],


      }
    },

    methods: {
      enviarFormulario(e) {
        e.preventDefault()
        alert(JSON.stringify(this.form))
      },
      
      resetearFormulario(e) {
        e.preventDefault()
        // Resetear valores del formulario
        this.form.producto = null
        this.form.ingredienteproducto = []
        this.form.bebida= null
        this.form.listabebidas= []
        this.form.listadete = []
        this.form.listadejugos = []

      }
    }
    











   
  })