'use strict';

$(function () {

	//var projects;

	$.getJSON('assets/data/projects.json', function (data) {

		var contact = getParameterByName('contact');
		/* if the contact form was submitted; bypass tiles while validating */
		if (contact == null) tileModule(data);
	});

	/* Modernizer checks for preserve 3D (required for flip effect); fails flexbox for non supporting */

	if (Modernizr.preserve3d && Modernizr.flexbox) {
		$('html').removeClass('no-js').addClass('js').addClass('flexbox');
	} else {
		$('html').removeClass('no-js').addClass('js').addClass('no-flexbox');
	}

	//$('html').removeClass('no-js').addClass('js').addClass('no-flexbox')
});