const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
const songCard = `<div class="song-card container-fluid row">
<div class="song-thumbnail h-100 col-3"></div>
<div class="song-specs d-flex flex-column justify-content-evenly h-100 col-7">
  <h5></h5>
  <p></p>
</div>
<div class="song-options col-2 d-flex flex-column justify-content-around align-items-end">
  <i class="bi bi-plus-circle-dotted"></i>              
  <i class="bi bi-info-circle"></i>
  <span></span>
</div>
</div>';`
const cardSection = document.querySelector('.cards-section');
const playlistSection = document.querySelector('.playlist-section');
const storedSongs = JSON.parse(localStorage.getItem('songs')) || '[]';

let showCards = () => {

}