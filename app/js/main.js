$(function () {

   // --- scroll-up ---//

   // click
   $('.scroll-up ').click(function () {
      $("html, body").animate({ scrollTop: 0 }, 1500);
      return false;
   });

   // onScroll
   $(window).scroll(function () {
      var scroll = $('.scroll-up');
      if ($(this).scrollTop() > 500) {
         scroll.addClass('scroll-up--active');
      } else {
         scroll.removeClass('scroll-up--active');
      }
   });

   // --- scroll-up END ---//

   //  Плавний скрол  //

   $(".menu__link, .footer__logo").on("click", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1000);
   });


   //  burger menu  //

   $('.burger').on('click', function () {
      $('.burger,.menu__list,.burger__line').toggleClass('active');
      $('body').toggleClass('lock');
   });

   $('.menu__list a').on('click', function () {
      $('.burger,.menu__list,.burger__line').removeClass('active');
      $('body').removeClass('lock');
   });



   //  mixitup  //

   var mixer = mixitup('.portfolio__content');


   //  accordion  //
   //  клас 'one-open', відкритий буде тільки один аккордеон  //

   $('.accordion__title').click(function () {

      if ($('.accordion__title').hasClass('one-open')) {
         $('.accordion__title').not($(this)).removeClass('active');
         $('.accordion__content').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);

   });





  

   //  burger menu  //

   $('.burger').on('click', function () {
      $('.burger,.menu__list,.burger__line').toggleClass('active');
      $('body').toggleClass('lock');
   });

   $('.menu__list a').on('click', function () {
      $('.burger,.menu__list,.burger__line').removeClass('active');
      $('body').removeClass('lock');
   });

   //  tabs  //

   $('.tabs__link').on('click', function (e) {
      e.preventDefault();
      $('.tabs__link').removeClass('tabs__link--active');
      $(this).addClass('tabs__link--active');


      $('.tabs__content-item').removeClass('tabs__content-item--active');
      $($(this).attr('href')).addClass('tabs__content-item--active');

   });

   //=======================//


   //  slider revews  //

   $('.reviews__slider').slick({
      prevArrow: '<button type="button" class="slick-prev"><svg class="slick-arrow slick-arrow-prev "><use xlink: href = "images/sprite.svg#arrow-left"></use></svg></button>',

      nextArrow: '<button type="button" class="slick-next"><svg class="slick-arrow slick-arrow-next"><use xlink: href = "images/sprite.svg#arrow-left"></use></svg ></button>',
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false
            }
         }
      ]
   });








   //  fixed header  //

   $(window).scroll(function () {
      var menu = $('.menu');
      if ($(this).scrollTop() > 1) {
         menu.addClass('menu-fixed');
      } else {
         menu.removeClass('menu-fixed');
      }
   });








   //  tabs  //

   $('.tabs__link').on('click', function (e) {
      e.preventDefault();
      $('.tabs__link').removeClass('tabs__link--active');
      $(this).addClass('tabs__link--active');


      $('.tabs__content-item').removeClass('tabs__content-item--active');
      $($(this).attr('href')).addClass('tabs__content-item--active');

   });

   //=======================//





});