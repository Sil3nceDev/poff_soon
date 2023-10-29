


$(function () {
	"use strict";
	
		//Countdown
	
		$('[data-countdown]').each(function () {
			var $this = $(this),
				finalDate = $(this).data('countdown');
			$this.countdown(finalDate, function (event) {
				$this.html(event.strftime('<div class="countdown d-flex"><div class="single-count-content"><span class="count">%D</span><p class="text">Dias</p></div><div class="single-count-content"><span class="count">%H</span><p class="text">Horas</p></div><div class="single-count-content"><span class="count">%M</span><p class="text">Minutos</p></div><div class="single-count-content"><span class="count">%S</span><p class="text">Segundos</p></div></div>'));
			});
		});
	
		// WOW active
		new WOW().init();
	
	});	
	