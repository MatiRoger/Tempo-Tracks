const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
const playlistSection = document.querySelector('.playlist-section');
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
  window.location.href = '../index.html';
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
        <div class="song-options col-2 d-flex flex-column justify-content-around align-items-end">
          <i class="bi bi-plus-circle-dotted"></i>              
          <i class="bi bi-info-circle"></i>
          <span>${element._duration}</span>
        </div>`;
        cardSection.appendChild(songCard);
    });
}
showCards(storedSongs);