const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  
  // Disable mouse control
  simulateTouch: false,

  
  //Autoplay Settings
  autoplay: {
    delay: 3700,
    disableOnInteraction: false, 
  },
});


var dec_ = window.document.getElementById("img_d")
