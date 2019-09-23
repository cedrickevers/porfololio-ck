$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Software Engineer.", "Web Developer.", "Student."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4, 
 	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        700:{
	            items:3
	        },
	        920:{
	        	item:4
	        }
	    }
	});
	$('.chart').easyPieChart({
		easing: " easeInOut",
		barColor:"snow",
		trackColor: false,
		scaleColor:false,
		lineWidth: 5,
		size: 152,
		onStep: function(from, to, percent) {
			$(this.el).find('.percent')
		}

         });

});