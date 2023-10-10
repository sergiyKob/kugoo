

// swiper product-card //
const sliderProductCard = new Swiper('.slider-product-card', {
   // Optional parameters
   loop: true,

   // швидкість прокрутки
   speed: 500,

   // Листання слайдів пальцем
   allowTouchMove: false,


   // Navigation arrows
   navigation: {
      nextEl: '.slider-btn-next',
      prevEl: '.slider-btn-prev',
   }
});

// swiper product-card end //


//  hero-slider //

const heroSlider = new Swiper('.hero-slider', {
   // незкінечний слайдер
   loop: true,

   // швидкість прокрутки
   speed: 600,

   // к-ть слайдів
   slidesPerView: 1,

   // автопрокрутка 
   autoplay: {
      delay: 5000,
   },

   // відступи між слайдами
   spaceBetween: 20,

   //Ефект переключення слайду
   // effect: 'fade',

   // fadeEffect: {
   //    crossFade: true
   // },

   //-------------------

   // брейкпойнтс 
   // breakpoints: {
   //    320: {
   //       slidesPerView: 1,
   //    },
   //    768: {
   //       slidesPerView: 1,
   //    },
   //    992: {
   //       slidesPerView: 1,
   //    },
   //    1200: {
   //       slidesPerView: 1,
   //    },
   // },

   // pagination
   pagination: {
      el: '.hero-slider__pagination',

      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
         return '<span class="' + currentClass + '"></span>' +
            ' / ' +
            '<span class="' + totalClass + '"></span>';
      },
   },

   // Navigation arrows
   navigation: {
      nextEl: '.hero-slider__next',
      prevEl: '.hero-slider__prev',
   }
});

// testimonials-swiper //

const testimonialsSwiper = new Swiper('.testimonials-swiper', {
   // Optional parameters
   loop: false,

   // к-ть слайдів
   slidesPerView: 4,

   // к-ть слайдів для пролистування
   slidesPerGroup: 2,

   // відступи між слайдами
   spaceBetween: 15,

   // Автовисота
   // autoHeight: false,

   // мульти рядність
   grid: {
      rows: 2,
   },

   // scrollbar: {
   //    el: '.swiper-scrollbar',
   //    draggable: true
   // },

   // швидкість прокрутки
   speed: 800,


   // Navigation arrows
   navigation: {
      nextEl: '.testimonials-swiper__next',
      prevEl: '.testimonials-swiper__prev',
   }
});

// video-review-swiper //
const videoReview = new Swiper('.video-review-swiper', {
   // Optional parameters
   loop: true,

   // швидкість прокрутки
   speed: 800,

   // к-ть слайдів
   slidesPerView: 3,

   // відступи між слайдами
   spaceBetween: 30,

   // Зміна назви активного слайду
   slideActiveClass: 'active-slide',




   // Navigation arrows
   navigation: {
      nextEl: '.video-review-swiper__next',
      prevEl: '.video-review-swiper__prev',
   }
});

// blog__swiper //
const blogSwiper = new Swiper('.blog__swiper', {
   // Optional parameters
   loop: true,

   // швидкість прокрутки
   speed: 600,

   // к-ть слайдів
   slidesPerView: 3,

   // відступи між слайдами
   spaceBetween: 30,


   // Navigation arrows
   navigation: {
      nextEl: '.blog__swiper-next',
      prevEl: '.blog__swiper-prev',
   }
});

// service-team__swiper //
const teamSwiper = new Swiper('.service-team__swiper', {
   // Optional parameters
   loop: true,

   // швидкість прокрутки
   speed: 600,

   // к-ть слайдів
   slidesPerView: 4,

   // відступи між слайдами
   spaceBetween: 30,


   // Navigation arrows
   navigation: {
      nextEl: '.service-team__next',
      prevEl: '.service-team__prev',
   }
});

// slider-certificate //
const certificateSwiper = new Swiper('.slider-certificate', {
   // Optional parameters
   loop: false,

   // швидкість прокрутки
   speed: 600,

   // к-ть слайдів
   slidesPerView: 1,

   // відступи між слайдами
   spaceBetween: 20,


   // Navigation arrows
   navigation: {
      nextEl: '.slider-certificate__next',
      prevEl: '.slider-certificate__prev',
   }
});




// modal-contacts //

const modalBtn = document.querySelectorAll('.header-contacts__btn');
const modalContacts = document.querySelector('.modal-contacts');
const modalOverlay = document.querySelector('.overlay');
const modalBtnIcon = document.querySelector('.header-contacts__btn-icon');
const modalClose = document.querySelector('.modal-contacts__close');
// const body = document.querySelector('.body');


modalBtn.forEach((el) => {
   el.addEventListener('click', (e) => {
      let path = e.currentTarget.getAttribute('data-path');

      modalBtnIcon.classList.add('is-active');
      modalOverlay.classList.add('is-active');
      modalContacts.classList.add('is-open');
      // body.classList.add('lock');

   });
});


modalOverlay.addEventListener('click', (e) => {

   modalOverlay.classList.remove('is-active');
   modalContacts.classList.remove('is-open');
   modalBtnIcon.classList.remove('is-active');
   // body.classList.remove('lock');


});


modalClose.addEventListener('click', (e) => {

   modalOverlay.classList.remove('is-active');
   modalContacts.classList.remove('is-open');
   modalBtnIcon.classList.remove('is-active');
   // body.classList.remove('lock');


});
// modal-contacts end //



// choices.js //

// Pass single element
const defaultSelect = () => {
   const element = document.querySelector('.default-select');
   const choices = new Choices(element, {
      searchEnabled: false,
   });
};

defaultSelect();

// multi select
const multiDefault = () => {
   const elements = document.querySelectorAll('.multi-default');

   elements.forEach(el => {
      const choices = new Choices(el, {
         searchEnabled: false,
         classNames: {
            containerInner: 'multi-default__inner',
         }
      });
   });
};

multiDefault();



// modal select
const modalSelect = () => {
   const elements = document.querySelectorAll('.modal-select');

   elements.forEach(el => {
      const choices = new Choices(el, {
         searchEnabled: false,
         classNames: {
            containerInner: 'modal-select__inner',
            list: 'modal-select__list',
         }
      });
   });
};

modalSelect();



// choices.js end //




// accordion  //

document.addEventListener('DOMContentLoaded', () => {
   const accordions = document.querySelectorAll('.accordion__item');

   accordions.forEach(el => {
      el.addEventListener('click', (e) => {
         const self = e.currentTarget;
         const control = self.querySelector('.accordion__control');
         const content = self.querySelector('.accordion__content');

         self.classList.toggle('open');

         // if accordion open
         if (self.classList.contains('open')) {
            control.setAttribute('aria-expanded', true);
            content.setAttribute('aria-hidden', false);
            content.style.maxHeight = content.scrollHeight + 'px';
         }
         else {
            control.setAttribute('aria-expanded', false);
            content.setAttribute('aria-hidden', true);
            content.style.maxHeight = null;

         }
      });
   });
});









// $(function () {

//    //    // --- scroll-up ---//

//    //    // click
//    //    $('.scroll-up ').click(function () {
//    //       $("html, body").animate({ scrollTop: 0 }, 1500);
//    //       return false;
//    //    });

//    //    // onScroll
//    //    $(window).scroll(function () {
//    //       var scroll = $('.scroll-up');
//    //       if ($(this).scrollTop() > 500) {
//    //          scroll.addClass('scroll-up--active');
//    //       } else {
//    //          scroll.removeClass('scroll-up--active');
//    //       }
//    //    });

//    //    // --- scroll-up END ---//

//    //    //  Плавний скрол  //

//    //    $(".menu__link, .footer__logo").on("click", function (event) {
//    //       event.preventDefault();
//    //       var id = $(this).attr('href'),
//    //          top = $(id).offset().top;
//    //       $('body,html').animate({ scrollTop: top }, 1000);
//    //    });


//    //    //  burger menu  //

//    //    $('.burger').on('click', function () {
//    //       $('.burger,.menu__list,.burger__line').toggleClass('active');
//    //       $('body').toggleClass('lock');
//    //    });

//    //    $('.menu__list a').on('click', function () {
//    //       $('.burger,.menu__list,.burger__line').removeClass('active');
//    //       $('body').removeClass('lock');
//    //    });



//    //    //  mixitup  //

//    //    var mixer = mixitup('.portfolio__content');


//    //    //  accordion  //
//    //    //  клас 'one-open', відкритий буде тільки один аккордеон  //

//    //    $('.accordion__title').click(function () {

//    //       if ($('.accordion__title').hasClass('one-open')) {
//    //          $('.accordion__title').not($(this)).removeClass('active');
//    //          $('.accordion__content').not($(this).next()).slideUp(300);
//    //       }
//    //       $(this).toggleClass('active').next().slideToggle(300);

//    //    });







//    //    //  burger menu  //

//    //    $('.burger').on('click', function () {
//    //       $('.burger,.menu__list,.burger__line').toggleClass('active');
//    //       $('body').toggleClass('lock');
//    //    });

//    //    $('.menu__list a').on('click', function () {
//    //       $('.burger,.menu__list,.burger__line').removeClass('active');
//    //       $('body').removeClass('lock');
//    //    });

//    //    //  tabs  //

//    //    $('.tabs__link').on('click', function (e) {
//    //       e.preventDefault();
//    //       $('.tabs__link').removeClass('tabs__link--active');
//    //       $(this).addClass('tabs__link--active');


//    //       $('.tabs__content-item').removeClass('tabs__content-item--active');
//    //       $($(this).attr('href')).addClass('tabs__content-item--active');

//    //    });

//    //    //=======================//


//    //    //  slider revews  //

//    // $('.reviews__slider').slick({
//    //    prevArrow: '<button type="button" class="slick-prev"><svg class="slick-arrow slick-arrow-prev "><use xlink: href = "images/sprite.svg#arrow-left"></use></svg></button>',

//    //    nextArrow: '<button type="button" class="slick-next"><svg class="slick-arrow slick-arrow-next"><use xlink: href = "images/sprite.svg#arrow-left"></use></svg ></button>',
//    //    dots: true,
//    //    slidesToShow: 2,
//    //    slidesToScroll: 1,
//    //    responsive: [
//    //       {
//    //          breakpoint: 992,
//    //          settings: {
//    //             slidesToShow: 1,
//    //             slidesToScroll: 1,
//    //             arrows: false
//    //          }
//    //       }
//    //    ]
//    // });
















//    //    //  fixed header  //

//    //    $(window).scroll(function () {
//    //       var menu = $('.menu');
//    //       if ($(this).scrollTop() > 1) {
//    //          menu.addClass('menu-fixed');
//    //       } else {
//    //          menu.removeClass('menu-fixed');
//    //       }
//    //    });








//    //    //  tabs  //

//    //    $('.tabs__link').on('click', function (e) {
//    //       e.preventDefault();
//    //       $('.tabs__link').removeClass('tabs__link--active');
//    //       $(this).addClass('tabs__link--active');


//    //       $('.tabs__content-item').removeClass('tabs__content-item--active');
//    //       $($(this).attr('href')).addClass('tabs__content-item--active');

//    //    });

//    //    //=======================//

//    //----- testimonial rating -----//
//    $(".testimonial-card__rating").rateYo({
//       starWidth: "14px",
//       spacing: "5px",
//       normalFill: "rgba(255, 255, 255, 0.50)"
//    });


// });