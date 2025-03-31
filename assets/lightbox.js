document.addEventListener('DOMContentLoaded', function() {
    // Obtener el lightbox y sus elementos
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close-btn');
    
    // Obtener todas las imágenes de proyectos
    const projectImages = document.querySelectorAll('.project-item img');
    
    // Configurar el click para cada imagen
    projectImages.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
            captionText.innerHTML = this.alt;
            
            // Deshabilitar scroll del body
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Cerrar lightbox con el botón X
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Cerrar lightbox haciendo clic fuera de la imagen
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Cerrar con la tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});