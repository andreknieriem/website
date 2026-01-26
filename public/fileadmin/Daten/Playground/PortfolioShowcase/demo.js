$(function(){
	// arrow animation
	downani();

	// parallax scroll animation
	var $body = $('body'),
		$window = $(window),
		desktop = $('.devices .desktop .screenshot'),
		tablet = $('.devices .tablet .screenshot'),
		phone = $('.devices .phone .screenshot'),
		devices = [];

	if(desktop.length){
		devices.push({
			elem: desktop,
			offset: desktop.offset().top
		});
	}
	if(tablet.length){
		devices.push({
			elem: tablet,
			offset: tablet.offset().top
		});
	}
	if(phone.length){
		devices.push({
			elem: phone,
			offset: phone.offset().top,
			reverse: true
		});
	}

	$window.scroll(function(){
		$.each(devices, function(i,item){
			var elem = item.elem,
				offset = item.offset,
				reverse = item.reverse,
				windowHeight = $window.height(),
				tpLowerLimit = .2 * windowHeight,
				tpUpperLimit = Math.min(.8 * windowHeight, offset),
				tp = offset - $( document ).scrollTop(),
				ratio = (tp - tpUpperLimit) / (tpLowerLimit - tpUpperLimit);
				ratio = Math.max(0, ratio), ratio = Math.min(1, ratio), ratio *= 100;
				elem.css("background-position", "0 " + (reverse ? 100 - ratio : ratio) + "%")
		});
	});
	// parallax scroll animation end
});

function downani() {
	$('.icon-down-wrapper .icon-down').animate({
		'top':'10px'
	},1000).animate({
		'top':'0'
	},1000, downani);
}
