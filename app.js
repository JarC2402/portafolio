var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  btnClose.onclick = function (){
    menu.classList.remove('active')
  }

  btnOpen.onclick = function (){
    menu.classList.add('active')
  }