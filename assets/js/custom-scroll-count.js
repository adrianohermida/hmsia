/*==========

Template Name: Lawart - Attorney & Lawyer HTML Template

==========*/

/*==========
----- JS INDEX -----
1.Whole Script Strict Mode Syntax
2.Counting JS
3.Skill Progress Bar JS
==========*/



$(document).ready(function($) {

	// Whole Script Strict Mode Syntax
	"use strict";

	var a = 0;
	var b = 0;
	$(window).on('scroll', function() {

	// Counting JS Start
		var oTop = $('#counter').offset().top - window.innerHeight;
		if (a === 0 && $(window).scrollTop() > oTop) {
			$('.counting-data').each(function() {
			  var $this = $(this),
			      countTo = $this.attr('data-count');
			  
			  $({ countNum: $this.text()}).animate({
			    countNum: countTo
			  },

			  {

			    duration: 3000,
			    easing:'linear',
			    step: function() {
			      $this.text(Math.floor(this.countNum));
			    },
			    complete: function() {
			      $this.text(this.countNum);
			    }

			  });  
			  
			});
		a = 1;
	  	}
	// Counting JS End

	// Skills Progress Bar JS Start
	var oTop2 = $('#progress_bar').offset().top - window.innerHeight;
	if (b === 0 && $(window).scrollTop() > oTop2) {
		$(".skill-bar").each(function(){
		  $(this).find(".skill-bar-inner").animate({
			width: $(this).attr("data-width")
		  },3000);
		});
	}
	// Skills Progress Bar JS End

	});

});