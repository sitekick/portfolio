$(function () {
	
	//var projects;
	
	$.getJSON('assets/data/projects.json', function (data) {
		
		tileModule(data);
		
	});
	
	
});


