$(document).ready(function(){

	$(document).on('click','.radio-btn',function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$(this).removeClass('error');
			$(this).addClass('active');
		}
	});

	$(document).on('click','.mobile-btn',function(){
		if ( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$('.mobile-menu').removeClass('active');
			$('body').removeClass('no-scroll');
		} else {
			$(this).addClass('active');
			$('.mobile-menu').addClass('active');
			$('body').addClass('no-scroll');
		}
	});

	$('.fancybox-gal').fancybox({loop: true});
	$('.fancybox').fancybox({touch: false});
	$('input[type="tel"]').inputmask('+7 (999) 999-99-99');

	$(document).on('click','.close-btn',function(){
		$('.mobile-btn').removeClass('active');
		$('.mobile-menu').removeClass('active');
		$('body').removeClass('no-scroll');
	});

	$('input').on('input',function(){
		$(this).removeClass('error');
	});
	$('textarea').on('input',function(){
		$(this).removeClass('error');
	});

	$('form').on('submit',function(){
		var valid = true;

		if ( $(this).find('.policy-text .radio-btn').length ){
			if ( $(this).find('.policy-text .radio-btn').hasClass('active') ){
				$(this).find('input').each(function(){
					if(!$(this).val().length) { 
						event.preventDefault();
						valid = false;
						$(this).addClass("error"); 
					} else { 
						$(this).removeClass("error"); 
					}
				});
				$(this).find('textarea').each(function(){
					if(!$(this).val().length) { 
						event.preventDefault();
						valid = false;
						$(this).addClass("error"); 
					} else { 
						$(this).removeClass("error"); 
					}
				});
			} else {
				$(this).find('.policy-text .radio-btn').addClass('error');
				event.preventDefault();
				return false;
			}
		} else {
			$(this).find('input').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault();
					valid = false;
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
			$(this).find('textarea').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault();
					valid = false;
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
		}

		if (!valid) {
			event.preventDefault();
			return false;
		}
	});

	function footerYear(){
		var date = new Date();
		var year = date.getFullYear();
		$('#footer-year').text(year);
	}
	footerYear();

	$('.face-slider').slick({
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive:[
			{
				breakpoint: 560,
				settings: {
					arrows: false
				}
			}
		]
	});

	$('.b-services-slider').slick({
		slidesToScroll: 1,
		slidesToShow: 4,
		responsive:[
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 380,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.b-catalog-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$(document).on('click','.footer-nav .item .item-title',function(){
		var eh = $(this).parents('.item').find('.item-wrap').innerHeight() + 10;
		
		$(this).parents('.item').toggleClass('active');
		if ( $(this).parents('.item').hasClass('active') ){
			$(this).parents('.item').find('.item-content').animate({'height': eh},300);
		} else {
			$(this).parents('.item').find('.item-content').animate({'height': 0},300);
		}
	});

	$(window).resize(function(){

		$('.footer-nav').find('.item.active').each(function(){
			var eh = $(this).find('.item-wrap').innerHeight() + 10;

			if ( $(window).width() > 768 ){
				$(this).find('.item-content').removeAttr('style');
			} else {
				$(this).find('.item-content').css('height',eh);
			}
		});

	});

});