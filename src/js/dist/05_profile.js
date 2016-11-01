'use strict';

function profileEffects() {

	$('#profile button').on('click', function () {
		$('#profile .photo').toggleClass('hide');
		$('#background').toggleClass('blur');
	});

	var profile_events = {
		flip: function flip(el) {
			$(el).find('.photo').not('.hide').addClass('flip');
		},
		unflip: function unflip(el) {
			$(el).find('.photo').removeClass('flip');
		}
	};

	$('#profile .wrapper').on({
		focusin: function focusin() {
			profile_events.flip(this);

			if ($(this).find('.photo').hasClass('hide') === true) {
				console.log('next');
				$(this).siblings('button').focus();
			}
		},
		mouseover: function mouseover() {
			profile_events.flip(this);
		},
		focusout: function focusout() {
			profile_events.unflip(this);
		},
		mouseout: function mouseout() {
			profile_events.unflip(this);
		}
	});

	var a11y = {
		profile: keyFocus('#profile')
	};

	var backgroundImages = function () {

		var images = {
			items: ['commodore.jpg', 'dexter.jpg', 'groomsmen.jpg', 'redskins.jpg'],
			preload: true,
			get total() {
				return this.items.length;
			},
			storage: {
				picked: [],
				pool: [],
				moveBetween: function moveBetween(index, source, target) {
					var random_value = source.splice(index, 1);
					return target.unshift(random_value[0]);
				},
				reset: function reset() {
					//move picked items to pool;empty picked
					for (pick in this.picked) {
						this.pool.push(this.picked[pick]);
					}
					this.picked = [];
				}
			},
			settings: {
				path: 'assets/img/background/',
				delay: 8000,
				transition: 1500,
				count: 0,
				max: 2
			},
			helpers: {
				updateBackground: function updateBackground(src) {
					$('#background').css('background-image', 'url(' + src + ')').addClass('loaded');
				},
				randomIntBetween: function randomIntBetween(min, max) {
					return Math.floor(Math.random() * (max - min) + min);
				},
				preloaded: function preloaded() {
					$('#profile .preload').remove();
				}

			}
		};

		var timer;

		(function timedLoop() {

			_loopAction();

			timer = setInterval(function () {

				_loopAction();
			}, images.settings.delay);
		})();

		function _loopAction() {

			if (images.preload === true) {
				// pull random from images, push to storage array (picked) 
				var random = images.helpers.randomIntBetween(0, images.items.length);
				var picked = images.storage.moveBetween(random, images.items, images.storage.picked);

				if (images.items.length == 0) {
					images.preload = false;
				}

				// preload to temporary location
				var preload = '<img class="preload" src="' + images.settings.path + images.storage.picked[0] + '" alt="" />';
				// when loaded; apply src to background
				$(preload).appendTo('#profile').bind('load', function () {
					var src = $(this).attr('src');
					images.helpers.updateBackground(src);
				});
			} else {
				// all images already  preloaded

				if (images.storage.pool == 0) {
					images.settings.count++;
					images.storage.reset();
				}

				var _random = images.helpers.randomIntBetween(0, images.storage.pool.length);
				var _picked = images.storage.moveBetween(_random, images.storage.pool, images.storage.picked);

				var src = images.settings.path + images.storage.picked[0];
				images.helpers.updateBackground(src);

				if (images.settings.count > images.settings.max) clearInterval(timer);
			}
			// 4) remove fading transition 
			setTimeout(function () {
				$('#background').removeClass('loaded');
			}, images.settings.delay - images.settings.transition);
		};
	}();
}