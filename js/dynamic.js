$(function() {
	$('div.panel > div, .product .information .scroll, .text .scroll').each(function() {
		$(this).jScrollPane({
			showArrows: $(this).is('.arrow')
		});
		var api = $(this).data('jsp');
		var throttleTimeout;
		$(window).bind('resize', function() {
			if (!throttleTimeout) {
				throttleTimeout = setTimeout(function() {
					api.reinitialise();
					throttleTimeout = null;
				}, 50);
			}
		});
	})
});
$(document).ready(function() {
	$('.product .slider, .product .gallery').slides({
		generatePagination: false,
		generateNextPrev: true,
		container: 'container',
		effect: 'fade',
		fadeSpeed: 250,
		play: 7500,
		pause: 2500
	});
	$('.carousel, .set > ul').jcarousel({
		scroll: 1,
		animation: 250,
		easing: 'easeInOutQuint'
	});
	$('.carousel').mousewheel(function(event, delta) {
		if (delta < 0)
			$('.jcarousel-next').click();
		else if (delta > 0)
			$('.jcarousel-prev').click();
		return false;
	});
	$('div.popup').append('<span class="close"></span>');
	$('.product button.buy, .product button.order').click(function() {
		$('div.popup').fadeIn(150);
		return false;
	});
	$('div.popup .close').click(function() {
		$('div.popup').fadeOut(150);
		return false;
	});
	$(this).keydown(function(eventObject){
		if (eventObject.which == 27)
		$('div.popup').fadeOut(150);
	});
	$('div.panel > div, .product .information .scroll, .text .scroll').jScrollPane({
		verticalDragMinHeight: 63,
		verticalDragMaxHeight: 63,
		contentWidth: '0'
	});
	$('div.panel').append('<span class="hide"></span>');
	$('.content ul.link a').click(function() {
		$('div.panel').animate({'right': '0'}, 500, 'easeInCubic');
		return false;
	});
	$('div.panel .hide').click(function() {
		$('div.panel').animate({'right': '-523px'}, 500, 'easeOutCubic');
		return false;
	});
	$('.menu div ul li.sub').hover(
		function() {
			$(this).addClass('active');
			$(this).children('div').stop(true, true).fadeIn(150);
		},
		function() {
			$(this).removeClass('active');
			$(this).children('div').stop(true, true).fadeOut(150);
		}
	);
	$('.menu div ul li.sub').each(function() {
		var left = $(this).children('a').width()+30;
		var paddingleft = 227-left;
		var arrowleft = paddingleft-13;
		var arrowtop = $(this).position().top;
		$(this).children('div').css({'left': left+'px', 'padding-left': paddingleft+'px', 'background-position': arrowleft+'px '+arrowtop+'px'});
	});
	$('div.panel .news li > p a').click(function() {
		$(this).parents('li').children('div').slideToggle(0);
		return false;
	});
	var max = -1;
	$('.menu > div > ul > li > div').each(function() {
		var h = $(this).height(); 
		max = h > max ? h : max;
	});
	$('.content').css({'min-height': max+20+'px'});
	$('.collection p span').click(function() {
		$(this).parents('.collection').find('ul').slideToggle(0);
		$(this).parent('p').toggleClass('active');
		return false;
	});
	$('.collection ul li a').click(function() {
		var current = $(this).text();
		$(this).parents('ul').slideUp(0);
		$(this).parents('.collection').find('p span').empty().text('Коллекция «'+current+'»');
		$(this).parents('.collection').find('p').removeClass('active');
	});
	$('.product .information .scroll :last-child, .text .scroll :last-child').css({'margin-bottom': '0'});
	$('.index .shop1').delay(1000).animate({'top': '17%', 'left': '50%', 'opacity': '1'}, 1000, 'easeOutExpo');
	$('.index .shop2').delay(1000).animate({'top': '20%', 'right': '50%', 'opacity': '1'}, 1000, 'easeOutExpo');
	$('.index .kid').animate({'bottom': '0', 'opacity': '1'}, 2500, 'easeOutBack');
	var itemanimation = 'easeOutQuint';
	var itemdelay =  1500;
	var itemspeed = 5000;
	$('.index .costume').delay(itemdelay).animate({'right': '12%', 'top': '25%', 'opacity': '1'}, itemspeed, itemanimation);
	$('.index .toys').delay(itemdelay).animate({'left': '17%', 'top': '22%', 'opacity': '1'}, itemspeed, itemanimation);
	$('.index .gift').delay(itemdelay).animate({'left': '-1%', 'bottom': '28%', 'opacity': '1'}, itemspeed, itemanimation);
	$('.index .headphones').delay(itemdelay).animate({'left': '15%', 'top': '0', 'opacity': '1'}, itemspeed, itemanimation);
	$('.index .mushroom').delay(itemdelay).animate({'left': '43%', 'top': '25%', 'opacity': '1'}, itemspeed, itemanimation);
	$('.index .sneakers').delay(itemdelay).animate({'left': '13.3%', 'bottom': '17%', 'opacity': '1'}, itemspeed, itemanimation);
	$('.index .scooter').delay(itemdelay).animate({'left': '27%', 'bottom': '7%', 'opacity': '1'}, itemspeed, itemanimation);
	$('.index .plane').delay(itemdelay).animate({'right': '37.7%', 'top': '25.5%', 'opacity': '1'}, itemspeed, itemanimation);
	$('.index .phone').delay(itemdelay).animate({'right': '-1%', 'top': '12%', 'opacity': '1'}, itemspeed, itemanimation);
	$('.index .ball').delay(itemdelay).animate({'right': '13.5%', 'top': '0', 'opacity': '1'}, itemspeed, itemanimation);
	$('.index .ladybug').delay(itemdelay).animate({'right': '23%', 'top': '10%', 'opacity': '1'}, itemspeed, itemanimation);
	$('.index .racecar').delay(itemdelay).animate({'right': '20%', 'bottom': '27%', 'opacity': '1'}, itemspeed, itemanimation);
	$('.index .rabbit').delay(itemdelay).animate({'right': '11%', 'bottom': '32%', 'opacity': '1'}, itemspeed, itemanimation);
	$('.index .backpack').delay(itemdelay).animate({'right': '13%', 'bottom': '3%', 'opacity': '1'}, itemspeed, itemanimation);
	$('.index .indexlink').hover(
		function() {
			$(this).children('.bg').stop(true, true).animate({'opacity': '0.75'}, 1000);
			$(this).children('a').stop(true, true).animate({'backgroundColor': '#ffffff'}, 1000);
			$(this).find('img.default').stop(true, true).fadeOut(0);
			$(this).find('img.hovered').stop(true, true).delay(0).fadeIn(1000);
		},
		function() {
			$(this).children('.bg').stop(true, true).animate({'opacity': '0.5'}, 1000);
			$(this).children('a').stop(true, true).animate({'backgroundColor': '#009ee0'}, 1000);
			$(this).find('img.hovered').stop(true, true).fadeOut(0);
			$(this).find('img.default').stop(true, true).delay(0).fadeIn(500);
		}
	);
	$('.index .indexlink.left').delay(1000).animate({'left': '50%', 'opacity': '1'}, 1000, 'easeOutQuint');
	$('.index .indexlink.right').delay(1000).animate({'right': '50%', 'opacity': '1'}, 1000, 'easeOutQuint');
});