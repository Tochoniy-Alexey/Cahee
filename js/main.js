$(function() {
	$(".mouse-icon").click(function() {
		$("html, body").animate({
			scrollTop : $("#about").offset().top
		}, 800);
	});
	});