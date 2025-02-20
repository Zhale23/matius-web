document.addEventListener("scroll", function () {
    let menu = document.querySelector(".menu-sticky");
    if (window.scrollY > 50) {
        menu.classList.remove("animate__fadeOutRight")
        menu.classList.add("menu-scroll");
    }
    else{
        menu.classList.add("animate__fadeOutRight")
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var offcanvasNavbar = document.getElementById('offcanvasNavbar');
    
    // Desactivar scroll al abrir el offcanvas
    offcanvasNavbar.addEventListener('shown.bs.offcanvas', function () {
        document.body.style.overflow = 'hidden';
    });
    
    offcanvasNavbar.addEventListener('hidden.bs.offcanvas', function () {
        document.body.style.overflow = 'auto';
    });

    // Cerrar offcanvas y navegar a la sección al hacer clic en un enlace
    // var navLinks = document.querySelectorAll('.offcanvas-body .nav-link');
    // navLinks.forEach(function(link) {
    //     link.addEventListener('click', function(event) {
    //         event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
            
    //         var targetSection = document.querySelector(this.getAttribute('href'));
            
    //         var bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasNavbar);
    //         if (bsOffcanvas) {
    //             bsOffcanvas.hide();
    //         }
            
    //         if (targetSection) {
    //             // Esperar a que el offcanvas se cierre antes de desplazarse
    //             setTimeout(function() {
    //                 targetSection.scrollIntoView({ behavior: 'smooth' });
    //             }, 300); // Ajustar el tiempo si es necesario
    //         }
            
    //         document.body.style.overflow = 'auto';
    //     });
    // });
});

