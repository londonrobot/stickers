const swiper = new Swiper('.new__slider', {
  loop: true,
  spaceBetween: 32,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  }

});

