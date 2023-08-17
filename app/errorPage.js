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


 // Obtener elementos del DOM
 const modal = document.getElementById('miModal');
 const mostrarModalBtn = document.getElementById('mostrarModal');

 // Función para mostrar el modal y redirigir
 function mostrarModalYRedirigir() {
     modal.style.display = 'block';
     setTimeout(() => {
         window.location.href = '/index.html'; // Cambia la URL a la página de inicio
     }, 2000); // 10000 milisegundos = 10 segundos
 }

 // Asociar la función al evento click del botón
 mostrarModalBtn.addEventListener('click', mostrarModalYRedirigir);
