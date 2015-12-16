var ismobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));

var initApp = function() {
	this.actions = {
		toggleMenu: function() {
			var overlay = $('.overlay-hugeinc');
			console.log('here');
			if (overlay.hasClass('open')) {
				overlay.removeClass('open');
				overlay.addClass('open');
			} else if (!overlay.hasClass('close')) {
				overlay.addClass('open');
			}
		}
	}
};

initApp.prototype = {
	constructor:initApp,
	fullPage: function() {
		$('#fullpage').fullpage({
			//Navigation
			menu: true,
			lockAnchors: false,
			navigation: true,
			navigationPosition: 'right',
			showActiveTooltip: false,
			slidesNavigation: true,
			slidesNavPosition: 'bottom',
			sectionSelector: 'section',
			slideSelector: '.slide',
		});
	},
	onDomReady: function() {
		var self = this;
		$('#menu-btn').on('click', function() {
			$(this).toggleClass('active');
			self.actions.toggleMenu();
		})
	}
};

var init = new initApp();

$(document).ready(function() {
	init.fullPage();
	init.onDomReady();
});