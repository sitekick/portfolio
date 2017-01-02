'use strict';

(function profileEffects() {

	var contact = false;

	$('#profile a.me').on('click', function () {

		$('#profile .photo').toggleClass('hide');
		//.find('.contact').attr('tabindex','-1')

		$(this).toggleClass('active');

		if ($('#profile .photo').hasClass('hide')) {
			//inactive
			$('#profile').css('z-index', 'auto');
		} else {
			//active
			$('#profile').css('z-index', 100);
		}
	});

	$('#profile a.contact').on('click', function () {

		contact = contact === true ? false : true;

		if (contact === true) showContact();
	});

	function showContact() {

		var panel = growPanel({
			source: '#profile .back',
			target: '#container',
			id: 'contact',
			markup: _markup(),
			events: {
				afterload: function afterload() {
					var captchaContainer = void 0;
					var loadCaptcha = function () {
						captchaContainer = grecaptcha.render('recaptcha2', { 'sitekey': '6LeOvAsUAAAAAAZdqwnqALUgWk_FyAlsPiirxyNy' });
						var kf = keyFocus('#contact .close');
					}();
				},
				afterclose: function afterclose() {
					contact = false;
					$('#profile .photo').removeClass('flip');
					var kf = undefined;
				}
			}
		});

		function _markup() {
			return {
				primary: '<h1>Hunter Williams</h1><h2>designer • developer</h2>\n\t\t\t\t<p>With the ability to create both artistically and technically, I am seeking to apply my sixteen years of freelance experience to a permanent web/front-end developer position. Contract work will be considered.</p>\n\t\t\t\t<a class="linkedin" href="https://www.linkedin.com/in/bhunterwilliams" target="_blank"><img width="125px" src="assets/img/linkedin/logo@1x.png" alt="linked in profile hunter williams" /></a>',
				secondary: '<form action="index.php?contact=true" method="post"><div>\n\t\t\t\t<p><label for="name">Name</label> \n\t\t\t\t<input type="text" name="name" id="name" placeholder="Name" maxlength="100">\n\t\t\t\t</p>\n\t\t\t\t<p><label for="email">Email</label> \n\t\t\t\t<input type="email" name="email" id="email" placeholder="Email address" maxlength="100">\n\t\t\t\t</p>\n\t\t\t\t<p><label for="comment">Comment</label> \n\t\t\t\t<textarea id="comment" name="comment" rows="8" columns="5" placeholder="Comment" maxlength="300"></textarea>\n\t\t\t\t<div id="recaptcha2" class="g-recaptcha"></div>\n\t\t\t\t</div>\n\t\t\t\t<input id="submit" type="submit" value="Send" /></form>'
			};
		}
	}

	var profile_events = {
		flip: function flip(el) {
			$(el).find('.photo').not('.hide').addClass('flip');
		},
		unflip: function unflip(el) {

			if (contact === false) $(el).find('.photo').removeClass('flip');
		}
	};

	$('#profile .wrapper').on({
		focusin: function focusin() {

			profile_events.flip(this);

			if ($(this).find('.photo').hasClass('hide') === true) {
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
})(); // profileEffects