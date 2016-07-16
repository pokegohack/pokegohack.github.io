// Sticky v1.0 by Daniel Raftery
// http://thrivingkings.com/sticky
//
// http://twitter.com/ThrivingKings

(function($) {

	// Using it without an object
	$.stickyfy = function(note, options, callback) {
		return $.fn.stickyfy(note, options, callback);
	};

	$.fn.stickyfy = function(note, options, callback) {
		// Default settings
		var position = 'bottom-right';
		// top-left, top-right, bottom-left, or bottom-right

		var settings = {
			'speed' : 'slow', // animations: fast, slow, or integer
			'duplicates' : false, // true or false
			'autoclose' : 8000 // integer or false
		};

		// Passing in the object instead of specifying a note
		if (!note) {
			note = this.html();
		}

		if (options) {
			$.extend(settings, options);
		}

		// Variables
		var display = true;
		var duplicate = 'no';

		// Somewhat of a unique ID
		var uniqID = Math.floor(Math.random() * 99999);

		// Handling duplicate notes and IDs
		$('.sticky-note').each(function() {
			if ($(this).html() == note && $(this).is(':visible')) {
				duplicate = 'no';
				if (!settings['duplicates']) {
					display = false;
				}
			}
			if ($(this).attr('id') == uniqID) {
				uniqID = Math.floor(Math.random() * 9999999);
			}
		});

		// Make sure the sticky queue exists
		if (!$('body').find('.sticky-queue').html()) {
			$('body').append('<div class="sticky-queue ' + position + '"></div>');
		}

		// Can it be displayed?
		if (display) {
			// Building and inserting sticky note
			$('.sticky-queue').prepend('<div class="sticky border-' + position + '" id="' + uniqID + '"></div>');
			$('#' + uniqID).append('<img src="images/close.png" class="sticky-close" rel="' + uniqID + '" title="Close" />');
			$('#' + uniqID).append('<div class="sticky-note" rel="' + uniqID + '">' + note + '</div>');

			// Smoother animation

			$('#' + uniqID).slideDown(settings['speed']);
			display = true;
		}

		// Listeners
		$('.sticky').ready(function() {
			// If 'autoclose' is enabled, set a timer to close the sticky
			if (settings['autoclose']) {
				$('#' + uniqID).delay(settings['autoclose']).fadeOut(settings['speed']);
			}
		});
		// Closing a sticky
		$('.sticky-close').click(function() {
			$('#' + $(this).attr('rel')).dequeue().fadeOut(settings['speed']);
		});

		// Callback data
		var response = {
			'id' : uniqID,
			'duplicate' : duplicate,
			'displayed' : display,
			'position' : position
		}

		// Callback function?
		if (callback) {
			callback(response);
		} else {
			return (response);
		}

	}
	
	$.stickyfy('<b><img src="images/us.png"/>JohnnyWhaleson received <img src="images/clash_of_clans_coin_icon.jpg" width="15" height="17"/> - 999999</b>');
	var callnotification = function() {
		$.stickyfy('<b><img src="images/Czech-Republic-Flag-icon.png"/>1BankPoor received <img src="images/clash_of_clans_coin_icon.jpg" width="15" height="17"/> - 169000</b>');
	}
	setInterval(callnotification, 5000);

	var callnotification = function() {
		$.stickyfy('<b><img src="images/Canada-Flag-icon.png"/> 1MJoshC received <img src="images/clash_of_clans_coin_icon.jpg" width="15" height="17"/> - 999999</b>');
	}
	setInterval(callnotification, 7000);

	var callnotification = function() {
		$.stickyfy('<b><img src="images/France-Flag-icon.png"/>F0tisL1k3sDikz received <img src="images/clash_of_clans_coin_icon.jpg" width="15" height="17"/> - 699999 </b>');
	}
	setInterval(callnotification, 8000);

	var callnotification = function() {
		$.stickyfy('<b><img src="images/France-Flag-icon.png"/> Magicien  received <img src="images/clash_of_clans_coin_icon.jpg" width="15" height="17"/> - 999999</b>');
	}
	setInterval(callnotification, 9000);

	var callnotification = function() {
		$.stickyfy('<b><img src="images/France-Flag-icon.png"/>1MShark received <img src="images/clash_of_clans_coin_icon.jpg" width="15" height="17"/> - 999999</b>');
	}
	setInterval(callnotification, 11000);

	var callnotification = function() {
		$.stickyfy('<b><img src="images/Canada-Flag-icon.png"/>GuessWhat3838 received <img src="images/clash_of_clans_coin_icon.jpg" width="15" height="17"/> - 999999</b>');
	}
	setInterval(callnotification, 13000);

	var callnotification = function() {
		$.stickyfy('<b><img src="images/Canada-Flag-icon.png"/>JoshWins received <img src="images/clash_of_clans_coin_icon.jpg" width="15" height="17"/> - 999999</b>');
	}
	setInterval(callnotification, 15000);

	var callnotification = function() {
		$.stickyfy('<b><img src="images/France-Flag-icon.png"/>JeMangerBaguette2 received <img src="images/clash_of_clans_coin_icon.jpg" width="15" height="17"/> - 999999</b>');
	}
	setInterval(callnotification, 16000);

	var callnotification = function() {
		$.stickyfy('<b><img src="images/Denmark-Flag-icon.png"/>MaslinT21 received <img src="images/clash_of_clans_coin_icon.jpg" width="15" height="17"/> - 999999</b>');
	}
	setInterval(callnotification, 18000);

	var callnotification = function() {
		$.stickyfy('<b><img src="images/Bouvet-Island-icon.png"/>GamerTieriu201 received <img src="images/clash_of_clans_coin_icon.jpg" width="15" height="17"/> - 999999</b>');
	}
	setInterval(callnotification, 19000);

	var callnotification = function() {
		$.stickyfy('<b><img src="images/England-Flag-icon.png"/>SirKingofCOC2014 received <img src="images/clash_of_clans_coin_icon.jpg" width="15" height="17"/> - 999999</b>');
	}
	setInterval(callnotification, 19000);

	var callnotification = function() {
		$.stickyfy('<b><img src="images/Brazil-Flag-icon.png"/> GDufresneC  received <img src="images/clash_of_clans_coin_icon.jpg" width="15" height="17"/> - 90000</b>');
	}
	setInterval(callnotification, 21000);

	var callnotification = function() {
		$.stickyfy('<b><img src="images/Bouvet-Island-icon.png"/> Gamer0102  received <img src="images/clash_of_clans_coin_icon.jpg" width="15" height="17"/> - 90000</b>');
	}
	setInterval(callnotification, 22000);

	var callnotification = function() {
		$.stickyfy('<b><img src="images/us.png"/> RyanHawk25  received <img src="images/clash_of_clans_coin_icon.jpg" width="15" height="17"/> - 40310</b>');
	}
	setInterval(callnotification, 24000);

	var callnotification = function() {
		$.stickyfy('<b><img src="images/Brazil-Flag-icon.png"/> VernonSalmonsd32  received <img src="images/clash_of_clans_coin_icon.jpg" width="15" height="17"/> - 70880</b>');
	}
	setInterval(callnotification, 25000);
})(jQuery);