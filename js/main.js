// =========================
//  PROYECTO ZAURA - jQuery
// =========================

$(document).ready(function () {
  // Menú responsive
  $(".js-toggle-menu").on("click", function () {
    $(".nav-links").toggleClass("is-open");
  });

  // Scroll suave para enlaces con clase .js-scroll
  $(".js-scroll").on("click", function (e) {
    const destino = $(this.getAttribute("href"));
    if (destino.length) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: destino.offset().top - 80,
        },
        600
      );
    }
  });
});
