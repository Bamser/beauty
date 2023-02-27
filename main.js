const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
   

    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    },

  });