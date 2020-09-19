new Vue({
    el: '#app',
    data() {
      return {
      producto:null,
      opcionesproducto:[
        {text:'Selecione un producto', value:'null'},
        {text: 'Completo', value: 'Completo' },
        { text: 'Fajita', value: 'Fajita' },
        { text: 'Sandiwch', value: 'Sandiwch' },
      ],
      ingredienteproducto:[],


      bebida:null,
      opcionesbebida:[
        {text:'Selecione un bebida', value:'null'},
        {text: 'Jugo', value: 'Jugo' },
        { text: 'Te', value: 'Te' },
        { text: 'Cafe', value: 'Cafe'},
        { text: 'Energetica', value: 'Energetica'},
      ],
      listabebidas:[],
      
      }
    },


    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      
      onReset(evt) {
        evt.preventDefault()
        // Resetear valores del formulario
        this.form.Producto = null
        this.form.checked = []
        this.form.Bedida = null
        this.form.bebidacheck = []
 
      }
    }
    











   
  })