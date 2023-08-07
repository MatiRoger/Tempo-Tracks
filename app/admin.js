class Cancion {
  constructor(){
	this._id;
    this._titulo;
    this._artista;
    this._categoria;
	  this._imagen;
    this._duracion;
  }
  get id(){
    return this._id;
  }
  set id(id){
    this._id = id;
  }
	get titulo (){
		return this._titulo;
	}
	set titulo(titulo){
		this._titulo = titulo;
	}
	get artista(){
		return this._artista;
	}
	set artista(artista){
		this._artista = artista;
	}
	get categoria(){
		return this._categoria;
	}
	set categoria(categoria){
		this._categoria = categoria;
	}
	get imagen(){
		return this._imagen;
	}
	set imagen(urlImg){
		this._imagen = urlImg;
	}
	get duracion(){
		return this._duracion;
	}
	set duracion(duracion){
		this._duracion = duracion;
	}
} 

let agregarCancion  = ()=>alert("Se agrega cancion");