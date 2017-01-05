/**
*  Functions used in "event.html"
**/

//Detects events nav sub-menu for change of background active
$(document).ready(function(e){
	$('.navMenu ul li a').click(function(e){
		$('.navMenu ul li a').removeClass('active');
		$(this).addClass('active');
	});
});
