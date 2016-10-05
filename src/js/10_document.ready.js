$(function () {
	
	$.getJSON('assets/data/projects.json', function (data) {
		_init(data.projects);
	});
	
	function _init(data) {
		
		layoutTiles(data);
	}
	
	
	
	
});


