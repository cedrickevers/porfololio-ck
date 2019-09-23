$(document).ready(function(){
	$('#slides').superslides({
		animation: "fade",
		play: 5000
	})

	const typed = new Typed(".typed",{
		strings: ["A RPG, turned based RPG.", " Anime, drama , series.", "Coding , SEO. "]
	});

});