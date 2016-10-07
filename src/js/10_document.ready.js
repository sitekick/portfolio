$(function () {
	
	var projects;
	
	$.getJSON('assets/data/projects.json', function (data) {
		
		projects = data;
		_init();
		
	});
	
	
	function _init() {
		
		$('#main button').on('click', function(){
			$('#tiles').remove();
			$('#main button').removeClass('active');
			let clicked = $(this).attr('id');
			$(this).addClass('active');
			let cloned = Object.assign({}, projects);
			layoutTiles(cloned, clicked);
		})
	
	}
	
	
	
	
});


