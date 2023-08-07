class Cancion {
  constructor(id){
	  this._id=id;
    this._tittle='';
    this._artist='';
    this._category='';
	  this._image='';
    this._duration='';
  }
  get id(){
    return this._id;
  }
  set id(id){
    this._id = id;
  }
	get titulo (){
		return this._tittle;
	}
	set titulo(tittle){
		this._tittle = titulo;
	}
	get artista(){
		return this._artist;
	}
	set artista(artist){
		this._artist = artista;
	}
	get categoria(){
		return this._category;
	}
	set categoria(categoria){
		this._category = categoria;
	}
	get imagen(){
		return this._image;
	}
	set imagen(urlImg){
		this._image = urlImg;
	}
	get duracion(){
		return this._duration;
	}
	set duracion(duracion){
		this._duration = duracion;
	}
} 
let songIndex = 1;
let agregarCancion = (event) => {
  event.preventDefault();
  let newSong = new Cancion(songIndex);
  songIndex++;
  newSong._tittle = document.getElementById('tittleInput').value;
  newSong._artist = document.getElementById('artistInput').value;
  newSong._category = document.getElementById('categoryInput').value;
  newSong._image = document.getElementById('imgInput').value;
  newSong._duration = document.getElementById('durationInput').value;

	let storedSongs = JSON.parse(localStorage.getItem('songs') || '[]');
	if(storedSongs.find((song)=>song._tittle===newSong._tittle)){
		alert('Esta canción ya existe!');
		return
	}else storedSongs.push(newSong);
  localStorage.setItem('songs', JSON.stringify(storedSongs));
	console.log(JSON.parse(localStorage.getItem('songs')));
}