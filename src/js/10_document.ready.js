$(function () {
	
	var projects;
	
	$.getJSON('assets/data/projects.json', function (data) {
		
		projects = data;
		_init();
		
	});
	
	
	function _init() {
		
		var cloned = Object.assign({}, projects);

		$('#main button').on('click', function(){
			$('#tiles').remove();
			$('#main button').removeClass('active');
			let clicked = $(this).attr('id');
			$(this).addClass('active');
			
			_navClick(clicked);
		});
		
		function _navClick(active) {
			layoutTiles(cloned, active);
		};
		
		$('#fav').click();
	}

});


