$(function () {
	
	$.getJSON('assets/data/projects.json', function (data) {
		_init(data.projects);
	});
	
	
	function _init(data) {
		
		let id = getParameterByName('id');
		
		layoutTiles(data,id);
		
		if(id !== null) {
			let data_index = Number(id)-1;
			projectdata = data[data_index];
			let active = getParameterByName('tag')
			showProject(id, active, projectdata);
		}
			
	}
	
});


