 // Testimonials slider (Google-style cards)
    const reviewsSwiper = new Swiper('#reviewsSwiper', {
      loop: true,
      spaceBetween: 16,
      grabCursor: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        0:   { slidesPerView: 1 },
        760: { slidesPerView: 2 },
        1100:{ slidesPerView: 3 }
      }
    });