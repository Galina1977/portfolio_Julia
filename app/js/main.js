$(function () {
   // Липкая кнопка
   $('body').append('<div class="upbtn"></div>');
   $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
         $('.upbtn').css({
            transform: 'scale(1)'
         });
      } else {
         $('.upbtn').css({
            transform: 'scale(0)'
         });
      }
   });
   $('.upbtn').on('click', function () {
      $('html, body').animate({
         scrollTop: 0
      }, 500);
      return false;
   });

   //BildSlider
   let sliders = document.querySelectorAll('._swiper');
   if (sliders) {
      for (let index = 0; index < sliders.length; index++) {
         let slider = sliders[index];
         if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
               for (let index = 0; index < slider_items.length; index++) {
                  let el = slider_items[index];
                  el.classList.add('swiper-slide');
               }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');

            if (slider.classList.contains('_swiper_scroll')) {
               let sliderScroll = document.createElement('div');
               sliderScroll.classList.add('swiper-scrollbar');
               slider.appendChild(sliderScroll);
            }
         }
      }
      sliders_bild_callback();
   }
   function sliders_bild_callback(params) { }

   if (document.querySelector('.slider-main__body')) {
      new Swiper('.slider-main__body', {
         observer: true,
         observeParents: true,
         slidesPerView: 1,
         spaceBetween: 32,
         watchOverflow: true,
         speed: 800,
         loop: true,
         loopAdditionalSlides: 5,
         preloadImages: false,
         parallax: true,
         grabCursor: true,
         keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
         },
         pagination: {
            el: '.controls-slider-main__dotts',
            clickable: true,
         },
         navigation: {
            nextEl: '.slider-main .slider-arrow_next',
            prevEl: '.slider-main .slider-arrow_prev',
         },
         autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
         },
         speed: 800,
      });
   }
   //

   new WOW().init();

   // Пупап 
   $(".hover-image").magnificPopup({
      delegate: "a",
      type: "image",
      tloading: "loading image #%curr%...",
      mainClass: "mfp-img-mobile",
      gallery: {
         enabled: true,
         navigateByImgClick: true,
         preload: [0, 1],
      },
   });


});
