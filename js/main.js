$(function () {
  $('.header__btn').on('click', function () {
    $('.rightside-menu').removeClass('rightside-menu--close')
  });
  $('.rightside-menu__close').on('click', function () {
    $('.rightside-menu').addClass('rightside-menu--close')
  });

  $('#fullpage').fullpage({
		autoScrolling:true,
		scrollHorizontally: true,
    sectionSelector:'.section',
    
	});
});
