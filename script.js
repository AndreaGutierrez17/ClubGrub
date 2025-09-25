// AOS
AOS.init({ once: true, duration: 700, easing: 'ease-out' });

// Carruseles (autoplay suave)
document.addEventListener('DOMContentLoaded', () => {
  const how = document.getElementById('howCarousel');
  const amn = document.getElementById('amenitiesCarousel');
  const rev = document.getElementById('reviews');

  if (how) new bootstrap.Carousel(how, { interval: 4000, ride: 'carousel', pause: false, wrap: true });
  if (amn) new bootstrap.Carousel(amn, { interval: 4500, ride: 'carousel', pause: false, wrap: true });
  if (rev) new bootstrap.Carousel(rev, { interval: 5000, ride: 'carousel', pause: false, wrap: true });

  // Cierre automático del menú hamburguesa al hacer click en un link
  const navCollapse = document.getElementById('nav');
  if (navCollapse) {
    const bsCollapse = new bootstrap.Collapse(navCollapse, { toggle: false });
    navCollapse.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (navCollapse.classList.contains('show')) bsCollapse.hide();
      });
    });
    // Cierra si haces click fuera del menú
    document.addEventListener('click', (e) => {
      if (navCollapse.classList.contains('show') &&
          !navCollapse.contains(e.target) &&
          !e.target.closest('.navbar-toggler')) {
        bsCollapse.hide();
      }
    });
  }

  // Validación básica de formulario
  const forms = document.querySelectorAll('.needs-validation');
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) { event.preventDefault(); event.stopPropagation(); }
      form.classList.add('was-validated');
    }, false);
  });
});
