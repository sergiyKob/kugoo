

// swiper product-card //
const sliderProductCard = new Swiper('.slider-product-card', {
   // Optional parameters
   loop: true,

   // швидкість прокрутки
   speed: 500,


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
   speed: 500,

   // автопрокрутка 
   // autoplay: {
   //    delay: 5000,
   // },

   // к-ть слайдів
   slidesPerView: 1,

   // відступи між слайдами
   spaceBetween: 20,

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

// hero-slider end //

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



// choices.js end //











$(function () {

   //    // --- scroll-up ---//

   //    // click
   //    $('.scroll-up ').click(function () {
   //       $("html, body").animate({ scrollTop: 0 }, 1500);
   //       return false;
   //    });

   //    // onScroll
   //    $(window).scroll(function () {
   //       var scroll = $('.scroll-up');
   //       if ($(this).scrollTop() > 500) {
   //          scroll.addClass('scroll-up--active');
   //       } else {
   //          scroll.removeClass('scroll-up--active');
   //       }
   //    });

   //    // --- scroll-up END ---//

   //    //  Плавний скрол  //

   //    $(".menu__link, .footer__logo").on("click", function (event) {
   //       event.preventDefault();
   //       var id = $(this).attr('href'),
   //          top = $(id).offset().top;
   //       $('body,html').animate({ scrollTop: top }, 1000);
   //    });


   //    //  burger menu  //

   //    $('.burger').on('click', function () {
   //       $('.burger,.menu__list,.burger__line').toggleClass('active');
   //       $('body').toggleClass('lock');
   //    });

   //    $('.menu__list a').on('click', function () {
   //       $('.burger,.menu__list,.burger__line').removeClass('active');
   //       $('body').removeClass('lock');
   //    });



   //    //  mixitup  //

   //    var mixer = mixitup('.portfolio__content');


   //    //  accordion  //
   //    //  клас 'one-open', відкритий буде тільки один аккордеон  //

   //    $('.accordion__title').click(function () {

   //       if ($('.accordion__title').hasClass('one-open')) {
   //          $('.accordion__title').not($(this)).removeClass('active');
   //          $('.accordion__content').not($(this).next()).slideUp(300);
   //       }
   //       $(this).toggleClass('active').next().slideToggle(300);

   //    });







   //    //  burger menu  //

   //    $('.burger').on('click', function () {
   //       $('.burger,.menu__list,.burger__line').toggleClass('active');
   //       $('body').toggleClass('lock');
   //    });

   //    $('.menu__list a').on('click', function () {
   //       $('.burger,.menu__list,.burger__line').removeClass('active');
   //       $('body').removeClass('lock');
   //    });

   //    //  tabs  //

   //    $('.tabs__link').on('click', function (e) {
   //       e.preventDefault();
   //       $('.tabs__link').removeClass('tabs__link--active');
   //       $(this).addClass('tabs__link--active');


   //       $('.tabs__content-item').removeClass('tabs__content-item--active');
   //       $($(this).attr('href')).addClass('tabs__content-item--active');

   //    });

   //    //=======================//


   //    //  slider revews  //

   // $('.reviews__slider').slick({
   //    prevArrow: '<button type="button" class="slick-prev"><svg class="slick-arrow slick-arrow-prev "><use xlink: href = "images/sprite.svg#arrow-left"></use></svg></button>',

   //    nextArrow: '<button type="button" class="slick-next"><svg class="slick-arrow slick-arrow-next"><use xlink: href = "images/sprite.svg#arrow-left"></use></svg ></button>',
   //    dots: true,
   //    slidesToShow: 2,
   //    slidesToScroll: 1,
   //    responsive: [
   //       {
   //          breakpoint: 992,
   //          settings: {
   //             slidesToShow: 1,
   //             slidesToScroll: 1,
   //             arrows: false
   //          }
   //       }
   //    ]
   // });
















   //    //  fixed header  //

   //    $(window).scroll(function () {
   //       var menu = $('.menu');
   //       if ($(this).scrollTop() > 1) {
   //          menu.addClass('menu-fixed');
   //       } else {
   //          menu.removeClass('menu-fixed');
   //       }
   //    });








   //    //  tabs  //

   //    $('.tabs__link').on('click', function (e) {
   //       e.preventDefault();
   //       $('.tabs__link').removeClass('tabs__link--active');
   //       $(this).addClass('tabs__link--active');


   //       $('.tabs__content-item').removeClass('tabs__content-item--active');
   //       $($(this).attr('href')).addClass('tabs__content-item--active');

   //    });

   //    //=======================//

   //----- testimonial rating -----//
   $(".testimonial-card__rating").rateYo({
      starWidth: "14px",
      spacing: "5px",
      normalFill: "rgba(255, 255, 255, 0.50)"
   });


});