$(function() {

    //Cлайдер на главной

    var owl = $(".main-slider__inner");
    owl.owlCarousel({
        loop: true,
        items: 1,
        autoplay: true
    });

    //Cлайдер на странице товара

    var owl = $(".product__slider-inner");
    owl.owlCarousel({
        loop: true,
        items: 1,
        autoplay: true
    });

    //Увеличение фото на отдельной странице
    $(".product__slider-item").fancybox({
          Width	: '100%',
          Height	: '100%',
          fitToView	: false,
          closeClick	: true,
          padding : 0,
          margin     : 0,
          autoCenter : false,
          helpers: {
              title : {
                  type : 'float'
              }
          }
      	});


    //Мобильное меню

    $('.header__nav-button').click(function() {
        if ($('.header__nav').is(':visible')) {
            $('.header__nav-button i').removeClass('fa-times');
            $('.header__nav-button i').addClass('fa-bars');
        } else {
            $('.header__nav-button i').removeClass('fa-bars');
            $('.header__nav-button i').addClass('fa-times');
        };
        $('.header__nav').slideToggle(200);
		return false;
    })
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".header__nav").length) {
			if ($('.header__nav').is(':visible')) {
				$('.header__nav').slideUp(200);
				$('.header__nav-button i').removeClass('fa-times');
	            $('.header__nav-button i').addClass('fa-bars');
			}
        }
        e.stopPropagation();
    });

    //Поле поиска

    $('.header__search-button').click(function() {
        $('.header__search').slideToggle(200);
		return false;
    });
	$(document).on('click', function(e) {
        if (!$(e.target).closest(".header__search").length) {
			if ($('.header__search').is(':visible')) {
				$('.header__search').slideUp(200);
			}
        }
        e.stopPropagation();
    });

    //Выравнивание блоков по высоте

    $(".main-catalog__item-img").equalHeights();
    $(".main-catalog__item-text").equalHeights();
    $(".main-popular__item-img").equalHeights();
    $(".main-popular__item-name").equalHeights();
    $(".main-popular__item-price").equalHeights();
    $(".catalog-list__item-img").equalHeights();
    $(".catalog-list__item-name").equalHeights();
    $(".catalog-list__item-article").equalHeights();
    $(".catalog-list__item-price").equalHeights();
    $(".catalog-list__item-rating").equalHeights();


    //catalog

    $('.catalog__list').on('click', '.catalog__list-item:not(.active)', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).children().find('.fa').removeClass('fa-angle-down').addClass('fa-angle-up');
        $(this).children('.catalog__under-list').slideDown(200);
        $(this).siblings().children('.catalog__under-list').slideUp(200);
        $(this).siblings().children().find('.fa').removeClass('fa-angle-up').addClass('fa-angle-down');
        return false;
    });

    //Переключение сортировки и фильтра

    $('.filter__tabs').on('click', '.filter__tabs-item', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $('.filter__box').find('.filter__item').removeClass('active').eq($(this).index()).addClass('active');
    });

    //Открывание разделов в фильтрах

    $('.filter__filtrate').on('click', '.filter__filtrate-item-title', function() {
        $(this).parent('.filter__filtrate-item').toggleClass('active');
        $(this).parent('.filter__filtrate-item').children('fieldset').slideToggle(200);
        if ($(this).parent('.filter__filtrate-item').hasClass('active')) {
            $(this).parent('.filter__filtrate-item').children('.filter__filtrate-item-title').find('.fa').removeClass('fa-plus').addClass('fa-minus');
        } else {
            $(this).parent('.filter__filtrate-item').children('.filter__filtrate-item-title').find('.fa').removeClass('fa-minus').addClass('fa-plus');
        }
    });


    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $("img, a").on("dragstart", function(event) {
        event.preventDefault();
    });

    //Прелоадер
    $(document).ready(function() {
        $("#preloader__img").fadeOut();
        $("#preloader").delay(400).fadeOut("slow");
    });
});
