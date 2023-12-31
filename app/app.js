const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
const cardSection = document.querySelector('.cards-section');
const storedSongs = JSON.parse(localStorage.getItem('songs')) || '[]';
const userAuth = localStorage.getItem('userAuth');
const user = JSON.parse(userAuth);
const userOptions = document.getElementsByClassName('user-option');
const adminOptions = document.getElementsByClassName('admin-option');
const logOut = document.getElementsByClassName('log-out');

if(userAuth){
  for(let i = 0 ; i < userOptions.length;i++){
    userOptions[i].classList.add('d-none');
  }
  for(let i = 0 ; i < logOut.length;i++){
    logOut[i].classList.add('d-block');
  }
}else{
  for(let i = 0 ; i < logOut.length;i++){
    logOut[i].classList.add('d-none');
  }
};
if(!userAuth || user.email !== 'admin@admin.com'&& user.password !== '@Admin123' ){
  for(let i = 0 ; i<adminOptions.length;i++){
    adminOptions[i].classList.add('d-none');
  }
};
let signOut = (event)=>{
  event.preventDefault();
  localStorage.removeItem('userAuth');
  alert("Sesión Finalizada");
  window.location.reload ();
}
let showCards = (songsArray) => {
    songsArray.forEach(element => {
        let songCard = document.createElement('div');
        songCard.classList.add('song-card','m-1','container-fluid', 'row');
        songCard.innerHTML = `<div class="song-thumbnail h-100 col-3"></div>
        <div class="song-specs d-flex flex-column justify-content-evenly h-100 col-7">
          <h5>${element._tittle}</h5>
          <p>${element._artist}</p>
        </div>
        <div class="song-options col-2 d-flex flex-column justify-content-around align-items-end"id="${element._id}">
          <i class="bi bi-youtube"onclick="playSong(event)"></i>              
          <i class="bi bi-info-circle" data-bs-toggle="modal" data-bs-target="#songInfoModal" onclick="showSongInfo(event)"></i>
          <span>${element._duration}</span>
        </div>`;
        if(element._image.length>0){
          songCard.firstElementChild.setAttribute("style",`	background-image: url(${element._image});`)
        }else{
          songCard.firstChild.setAttribute("style","background-image: url(./assets/music-default-thumbnail.jpg);")
        }
        cardSection.appendChild(songCard);
    });
}
let showSongInfo = (event) => {
  let song = storedSongs[parseInt(event.target.parentElement.id)-1];
  const songInfo = document.querySelector('#songInfo'); 
  songInfo.innerHTML =
    `<div class="song-thumbnail"></div>
    <p><strong>Título:</strong> ${song._tittle}</p>
    <p><strong>Artista:</strong> ${song._artist}</p>
    <p><strong>Género Musical:</strong> ${song._category}</p>
    <p><strong>Duración:</strong> ${song._duration}</p>`
    ;
  if(song._image.length>0){
    songInfo.firstElementChild.setAttribute("style",`	background-image: url(${song._image});`)
  }else{
    songInfo.firstChild.setAttribute("style","background-image: url(./assets/music-default-thumbnail.jpg);")
  }
}
let playSong = (event) => {
  if(!userAuth){
    alert("Por favor inicia sesión para poder reproducir esto.");
    return;
  }
  let song = storedSongs[parseInt(event.target.parentElement.id)-1];
  let searchQuery = song._tittle.trim().replace(' ','+').toLowerCase() + '+'+ song._artist.trim().replace(' ', '+').toLowerCase();
  window.open(`https://www.youtube.com/results?search_query=${searchQuery}`, '_blank');
}
let filterSongs = (event) =>{
  event.preventDefault();
  let filterBy = document.getElementById('songSearch').value.toLowerCase();
  let filteredSongs = storedSongs.filter((song) => 
    song._tittle.toLowerCase() === filterBy || song._artist.toLowerCase() === filterBy
  );
  if(filterBy.length!==0){
    while (cardSection.firstChild) {
      cardSection.removeChild(cardSection.firstChild);
    }
    showCards(filteredSongs)
  }
  else window.location.reload();
  }
showCards(storedSongs);

