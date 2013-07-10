
var active = 'show-front';
var box;

$(document).ready(function() {
	box = $('#card');
	
	if($('#card').hasClass('show-back'))
		active = 'show-back';
	
	$('.menu li a').click(function(e) {
		
		// draai de kubus
		box.removeClass(active);
		active = $(this).attr('href');
		box.addClass(active);
		
		// verder niet op de snelkoppelling reageren
		return false;
    });
});
