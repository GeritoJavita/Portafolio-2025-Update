
// Navegación entre secciones
document.addEventListener('DOMContentLoaded', function() {
  const sectionButtons = document.querySelectorAll('.section-btn');
  const contentSections = document.querySelectorAll('.content-section');
  
  sectionButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remover clase active de todos los botones
      sectionButtons.forEach(btn => btn.classList.remove('active'));
      
      // Añadir clase active al botón clickeado
      button.classList.add('active');
      
      // Obtener la sección a mostrar
      const sectionToShow = button.getAttribute('data-section');
      
      // Ocultar todas las secciones y mostrar la seleccionada
      contentSections.forEach(section => {
        section.classList.remove('active');
      });
      
      document.getElementById(`${sectionToShow}-section`).classList.add('active');
    });
  });
});
