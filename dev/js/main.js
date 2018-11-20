$(document).ready(function(){

  $('#slider-banner').owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    margin: 0,
    dots: true
  });

  $('#slider-goods-day').owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    margin: 30,
    dots: true,
    responsive: {
      768: {
        items: 2
      },
      992: {
        items: 1
      }
    }
  });

  $('#slider-gallery').owlCarousel({
    items: 1,
    loop: false,
    nav: true,
    margin: 30,
    dots: true
  });

  $('#carousel-gallery').owlCarousel({
    items: 7,
    loop: false,
    nav: true,
    margin: 10,
    dots: false,
    responsive: {
      0: {
        items: 5
      },
      992: {
        items: 6
      },
      1200: {
        items: 7
      }
    }
  });

  $('#slider-gallery').on('changed.owl.carousel', function(event) {
    var index = event.page.index;
    $('.gallery-carousel__item--active').removeClass('gallery-carousel__item--active');
    $('.gallery-carousel__item[data-slide=' + index + ']').addClass('gallery-carousel__item--active');
  });

  $('#carousel-gallery').on('click', '.gallery-carousel__item', function() {
    var slide = $(this).data('slide');
    $('.gallery-carousel__item--active').removeClass('gallery-carousel__item--active');
    $(this).addClass('gallery-carousel__item--active');
    $('#slider-gallery').find('.owl-dot:nth(' + slide + ')').click();
  });

  $('#carousel-partner').owlCarousel({
    items: 4,
    loop: true,
    nav: true,
    margin: 10,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      576: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });

  $('#action-timer').mbComingsoon({
    expiryDate: new Date(2019, 4, 2, 0),
    localization: {
      days: 'Дней',
      hours: 'Часов',
      minutes: 'Минут',
      seconds: 'Секунд'
    }
  });

  $(window).scroll(function() {
    var headerHeight = $('.header').outerHeight();

    $('.dropdown-menu__list--active').removeClass('dropdown-menu__list--active');

    if($(this).scrollTop() > headerHeight + 100) {
      if(!$('.header-small').hasClass('header-small--active')) {
        $('.header-small').addClass('header-small--active');
      }
    } else {
      $('.header-small--active').removeClass('header-small--active');
    }
  });

  $('.show-sidebar').on('click', function() {
    var id = $(this).data('sidebar');
    $('#' + id).addClass('mobile-sidebar--active');
    return false;
  });

  $('.mobile-sidebar__close').on('click', function() {
    $('.mobile-sidebar--active').removeClass('mobile-sidebar--active');
    return false;
  });

  $('.filter-block__open-btn').on('click', function() {
    $(this).toggleClass('filter-block__open-btn--open');
    $(this).next('.filter-block__content').toggleClass('filter-block__content--open');
    return false;
  });

  $('.filter-block__name').on('click', function() {
    $(this).toggleClass('filter-block__name--open');
    $(this).next('.filter-block__value').toggleClass('filter-block__value--open');
    return false;
  });

  $('.range-block').each(function() {
    var uiRangeBlock = $(this).find('.range-block__ui-range');
    var minValue = uiRangeBlock.data('min');
    var maxValue = uiRangeBlock.data('max');
    var step = uiRangeBlock.data('step');
    var value = [];
    value.push($(this).find('.range-block__input--min').val());
    value.push($(this).find('.range-block__input--max').val());

    uiRangeBlock.slider({
      range: true,
      min: minValue,
      max: maxValue,
      values: value,
      step: step,
      slide: function(event, ui) {
        var rangeBlock = $(event.target).parents('.range-block');
        rangeBlock.find('.range-block__input--min').val(ui.values[0]);
        rangeBlock.find('.range-block__input--max').val(ui.values[1]);
      }
    });
  });

  $('.range-block__input--min, .range-block__input--max').on('change', function() {
    var rangeBlock = $(this).parents('.range-block');
    var uiRangeBlock = rangeBlock.find('.range-block__ui-range');
    var value = [];
    value.push(rangeBlock.find('.range-block__input--min').val());
    value.push(rangeBlock.find('.range-block__input--max').val());

    uiRangeBlock.slider('option', 'values', value);
  });

  $('#filter-reset').on('click', function() {
    $('.range-block').each(function() {
      var uiRangeBlock = $(this).find('.range-block__ui-range');
      var minValue = uiRangeBlock.data('min');
      var maxValue = uiRangeBlock.data('max');
      var value = [];
      value.push(minValue);
      value.push(maxValue);

      uiRangeBlock.slider('option', 'values', value);
    });
  });

  $('input[type="tel"]').inputmask({mask:"+7 (999) 999-99-99"});

  $('.menu-btn').on('click', function(){
    var btn = $(this);
    var timeout = 200;
    btn.addClass('menu-btn--hidden');

    if(btn.hasClass('menu-btn--active')) {
      timeout = 0;
    }

    setTimeout(function() {
      btn.removeClass('menu-btn--hidden');
      btn.toggleClass('burger--active menu-btn--active');
    }, timeout);
    $('.main-menu').toggleClass('main-menu--active');
    $('body').toggleClass('no-scrol');
    return false;
  });

  $('.fancybox').fancybox({
    minWidth: '250',
    autoCenter: true,
    wrapCSS: 'popup-block',
    helpers: {
      overlay: {
        closeClick: true,
        locked: false
      }
    }
  });

  $('.tabs-list__link').on('click', function() {
    var tabs = $(this);
    var id = tabs.attr('href');

    $('.tabs-list__link--active').removeClass('tabs-list__link--active');
    $('.tabs-block__item--active').removeClass('tabs-block__item--active');

    $('.tabs-block__preloader').addClass('tabs-block__preloader--active');

    setTimeout(function () {
      tabs.addClass('tabs-list__link--active');
      $(id).addClass('tabs-block__item--active');
      $('.tabs-block__preloader--active').removeClass('tabs-block__preloader--active');
    }, 1000);

    return false;
  });

  $('.card, .card-vertical, .card-horizontal').on('touchend', function() {});

  $('.dropdown-menu__btn').on('click', function(){
    $(this).next('.dropdown-menu__list').toggleClass('dropdown-menu__list--active');
    return false;
  });

});