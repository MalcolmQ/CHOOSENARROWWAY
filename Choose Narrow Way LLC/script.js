
//show Side Navigation bar
 function showSidenav() {
      const sidenav = document.querySelector('.sidenav');
      sidenav.style.display = 'flex';
    }

  function hideSidenav() {
      const sidenav = document.querySelector('.sidenav');
      sidenav.style.display = 'none';
    }

//swiper slide show of products
var swiper = new Swiper(".productSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });

swiper.update();
