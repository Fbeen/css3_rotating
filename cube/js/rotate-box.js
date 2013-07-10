
var active = 'show-front';
var box, fig;
var trans;

function timerfunction() {
	// maak de transparantie minder
	trans += 0.025;
	fig.css('background','rgba(255, 255, 255, ' + trans + ')')
	
	// als de transparantie kleiner is dan 1, roep deze functie over 50 milliseconden opnieuw aan.
	if(trans < 1)
		setTimeout(timerfunction, 50);
}

$(document).ready(function() {
	box = $('#cube');
	fig = $('#cube figure');
	
	$('.menu li a').click(function(e) {
		
		// als er op de actieve pagina geklikt wordt, doe niets.
		if(active == $(this).attr('href'))
			return false;
			
		// maak de achtergrond enigzins transparant
		fig.css('background','rgba(255, 255, 255, 0.7)')

		// draai de kubus
		box.removeClass(active);
		active = $(this).attr('href');
		box.addClass(active);
		
		// wacht 1000 milliseconden en start dan met de achtergrond minder transparant maken
		trans = 0.7;
		setTimeout(timerfunction, 1000);
		
		// verder niet op de snelkoppelling reageren
		return false;
    });
});
