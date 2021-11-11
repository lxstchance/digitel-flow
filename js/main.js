$(function () {
  $('.header__btn').on('click', function () {
    $('.rightside-menu').removeClass('rightside-menu--close')
  });
  $('.rightside-menu__close').on('click', function () {
    $('.rightside-menu').addClass('rightside-menu--close')
  });

    $('.scroll-points__link').on('click', function () {
    $('.scroll-points__link').removeClass('scroll-points__link--active')
  });

  $(".scroll-points__link").click(function () {
     $(this).toggleClass("scroll-points__link--active");
   });




  $('#fullpage').fullpage({
		autoScrolling:true,
		scrollHorizontally: true,
    sectionSelector:'.section',
    scrollOverflow: true,
    anchors: ['aplication', 'about', 'portfolio', 'offer', 'benefits', 'spec-offer', 'footer'],
	   menu: '#scroll-nav',
	});


});
