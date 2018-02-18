var baseURL = 'https://jsonplaceholder.typicode.com/users';
var app = new Vue({
	el: '#app',
			created: function(){
			this.GetBase();
		},

	data: {
		listas:[]
	  },
	  methods:{
		  GetBase: function(){
			  axios.get(baseURL).then(response =>{
				  this.listas = response.data
			  });
		  }
	  }
  });





  