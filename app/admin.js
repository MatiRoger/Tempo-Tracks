class Song {
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
const storedSongs = JSON.parse(localStorage.getItem('songs') || '[]');

let addSong = (event) => {
  //event.preventDefault();
  let newSong = new Song(storedSongs.length+1);

  newSong._tittle = document.getElementById('tittleInput').value;
  newSong._artist = document.getElementById('artistInput').value;
  newSong._category = document.getElementById('categoryInput').value;
  newSong._image = document.getElementById('imgInput').value;
  newSong._duration = document.getElementById('durationInput').value;
  
  if(storedSongs.find((song)=>song._tittle===newSong._tittle&&song._artist===newSong._artist)){
		alert('Esta canción ya existe!');
		return;
	}else {
		storedSongs.push(newSong);
		alert('Canción agregada exitosamente!');
	}
  localStorage.setItem('songs', JSON.stringify(storedSongs));
  createTable();
}
  let createTable = () => {
    //const songsArray = JSON.parse(localStorage.getItem('songs') || '[]');
    while (songsTable.firstChild) {
      songsTable.removeChild(songsTable.firstChild);
    }
    storedSongs.forEach(song => {
      const row = document.createElement('tr');
      
        for (const key in song) {
          if(key!=='_category'){
            const cell = document.createElement('td');
            cell.textContent = song[key];
            row.appendChild(cell);
          }else{
            const editCell = document.createElement('td');
            editCell.className = song._id;
            editCell.style='text-align:center;color:#DC00FF;font-size:1.5em;'
            editCell.innerHTML = '<i class="bi bi-pen"></i> ';
            row.appendChild(editCell);
            const deleteCell = document.createElement('td');
            deleteCell.className = song._id;
            deleteCell.style='text-align:center;color:#d11a2a;font-size:1.5em;'
            deleteCell.innerHTML = '<i class="bi bi-trash" onclick="deleteSong(event)"></i>';
            row.appendChild(deleteCell);
            break;
          }
      }
      document.getElementById('songsTable').appendChild(row);
    });
  }
  let deleteSong = (event)=>{
    let deleteIndex = event.target.parentElement.className;
    storedSongs.splice(deleteIndex-1,1);
    for (let index = 0; index < storedSongs.length; index++) {
      storedSongs[index]._id = index+1;
    }
    localStorage.setItem('songs',JSON.stringify(storedSongs));
    createTable();
    };
  createTable();
