$(document).ready(function(){
	$('#slides').superslides({
		animation: "fade",
		play: 5000
	})

	const typed = new Typed(".typed",{
		strings: ["A RPG, turned based RPG.", " Anime, drama, series.", "Coding , SEO. "],
		typeSpeed: 70,
	    loop:true,
	    startDelay:1000,
	    showCursor: false

	});

});