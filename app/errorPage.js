// Obtén una referencia a la imagen
const image = document.querySelector('.img-fluid');

// Agrega un event listener para el evento 'mouseover' (hover)
image.addEventListener('mouseover', () => {
  // Aplica una transformación de rotación a la imagen
  image.style.transform = 'rotate(10deg)';
});

// Agrega un event listener para el evento 'mouseout' (cuando el mouse sale del hover)
image.addEventListener('mouseout', () => {
  // Restaura la transformación a su estado original
  image.style.transform = 'rotate(0deg)';
});

