document.querySelector('.picture').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    audio.play();
  });


  var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });


  var swiper = new Swiper(".coverSwiper", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
