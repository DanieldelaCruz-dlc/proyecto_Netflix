// 1. Localizamos los elementos en nuestra página
const btnPlay = document.getElementById('playBtn');
const modal = document.getElementById('videoModal');
const btnClose = document.getElementById('closeBtn');
const video = document.getElementById('myVideo');

// 2. Función para ABRIR el modal y darle PLAY al video
btnPlay.addEventListener('click', () => {
    modal.style.display = 'flex'; // Cambia de 'none' a 'flex' para mostrarlo
    video.play(); // Inicia el video automáticamente
});

// 3. Función para CERRAR el modal y PAUSAR el video
btnClose.addEventListener('click', () => {
    modal.style.display = 'none';
    video.pause(); // Pausa el video al cerrar
});

// 4. (Opcional) Cerrar el modal si hace clic afuera del video (en el fondo negro)
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        video.pause();
    }
});

