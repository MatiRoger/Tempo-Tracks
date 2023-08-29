const storedSongs = JSON.parse(localStorage.getItem('songs') || '[]');
const userAuth = localStorage.getItem('userAuth');
const user = JSON.parse(userAuth);
const titleEdit = document.getElementById('tittleEdit');
const artistEdit = document.getElementById('artistEdit');
const categoryEdit = document.getElementById('categoryEdit');
const imageEdit = document.getElementById('imgEdit');
const durationEdit = document.getElementById('durationEdit');


if(user.email !== 'admin@admin.com'&& user.password !== '@Admin123' || !userAuth)window.location.href = '../index.html';
class Song {
  constructor(id){
	  this._id=id;
    this._tittle='';
    this._artist='';
    this._category='';
	  this._image='';
    this._duration='';
  }
} 
let editionIndexDraft;
let addSong = (event) => {
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
}
  let createTable = () => {
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
            editCell.innerHTML = '<i class="bi bi-pen"data-bs-toggle="modal" data-bs-target="#editSongModal" onclick="editedSongIndex(event)"></i> ';
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
  let editedSongIndex = (event)=>{
    editionIndexDraft = event.target.parentElement.className;
    const song = storedSongs.find(song=>song._id===parseInt(editionIndexDraft));
    titleEdit.value = song._tittle;
    artistEdit.value = song._artist;
    categoryEdit.value = song._category;
    imageEdit.value = song._image;
    durationEdit.value = song._duration;
  }
  let editSong=(event)=>{
    let editedSong = new Song (parseInt(editionIndexDraft));
    editedSong._tittle = titleEdit.value;
    editedSong._artist = artistEdit.value;
    editedSong._category = categoryEdit.value;
    editedSong._image = imageEdit.value;
    editedSong._duration = durationEdit.value;

    storedSongs.splice(editionIndexDraft-1,1,editedSong);
    localStorage.setItem('songs',JSON.stringify(storedSongs));
  }
  
  createTable();
