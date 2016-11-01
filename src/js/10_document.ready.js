$(function () {
	
	//var projects;
	
	$.getJSON('assets/data/projects.json', function (data) {
		
		tileModule(data);
		
	});
	
	/* Modernizer checks for preserve 3D (required for flip effect); fails flexbox for non supporting */
	
	if(Modernizr.preserve3d && Modernizr.flexbox){
		$('html').removeClass('no-js').addClass('js').addClass('flexbox');
	} else {
		$('html').removeClass('no-js').addClass('js').addClass('no-flexbox');
	}
	
	//$('html').removeClass('no-js').addClass('js').addClass('no-flexbox')

	
	
});


