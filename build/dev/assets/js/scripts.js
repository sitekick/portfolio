function getParameterByName(name, url) {
    /* http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript */
    
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function formatTags(tags, active){
	let markup = '<ul class="tags">';
	
	for(let i = 0; i < tags.length; i++){
		let activate = ( tags[i].name.replace(/[\/ ]/g,'-') == active) ? true : false;
		markup += `<li><a href="${tags[i].link}" class="${(activate) ? 'active' : ''}">${tags[i].name}</a></li>`;
	}
	
	markup += '</ul>';
	
	return markup;
}

function showProject(id, tag, data){
	
	let tile_class = '.tile-' + Number(id);
	let tile = $(tile_class);
	let container = $('#container');
	let parent = tile.parent();
	//console.log(tag);
	
	let parent_specs = {
		offset : parent.offset(),
		width : parent.width(),
		height : parent.height()
	}

	let container_specs = {
		offset : container.offset(),
		width : container.width(),
		height : container.height()
	}
	
	var markup = `<div id="project">
	 <div class="imagery">
	 	<ul class="controls">
	 	<li><button class="close">Close</button></li>
	 	</ul>
	 	<div class="content">
	 	<img src="assets/img/${tag}/${data.imagery[tag]}" alt=""/>
	 	</div>
	 </div>
	 <h1>${data.name}</h1>
	 <p>${data.description}</p>
	 ${formatTags(data.tags, tag)}
	</div>`;
	
	//var position = $('#tiles').position();
	
	//console.log(tile_specs.offset);
	//console.log(container_specs);
	
	//$('#tiles').prepend(markup);
	
	$(markup).prependTo('#container').offset({top: parent_specs.offset.top, left: parent_specs.offset.left})
	.width(parent_specs.width)
	.height(parent_specs.height);
	
	$('#project').animate({
		left : container_specs.offset.left,
		top : container_specs.offset.top,
		width : container_specs.width,
		height : container_specs.height,
		opacity : 1
		}, 
		300,
		'swing',
		function () {
			_projectEvents();
		});
	
	//.appendTo( 'body' );
	//console.log( $('#project').css(['top','right','bottom','left']) );
}

function _projectEvents() {
	let control = document.querySelector('button.close');
	
	control.addEventListener('click', function(e){
		//console.log('click');
		$('#project').remove();
	}, false);
	}
function layoutTiles(data, id) {
	
	var tiles = data;
	let tile_index = Number(id) || false;
	
	var markup = '<ul id="tiles">';
	
		for(let i = 0; i < tiles.length; i++){
			let tag_markup = formatTags(tiles[i].tags);
			markup += `<li>
					<div class="tile tile-${i+1} ${ (tile_index == i + 1) ? 'flipped' : '' }">
						<div class="side front">
							<div class="content vcenter">
							<img src="assets/img/logo-design/${tiles[i].imagery['logo-design']}" alt="" />
							</div>
						</div>
						<div class="side back">
							<div class="content vcenter">
							<h1>${tiles[i].name}</h1>
							<p>${tiles[i].description}</p>
							${tag_markup}
							</div>
						</div>
					</div>
					</li>`;
		}
		
	markup += '</ul>';	
	
	$('#container').append(markup);
	
	addEvents();
	
}

/*
function formatTags(tags){
	
	let markup = '<ul class="tags">';
	
	for(let i = 0; i < tags.length; i++){
		markup += `<li><a href="${tags[i].link}">${tags[i].name}</a></li>`;
	}
	
	markup += '</ul>';
	
	return markup;
}
*/

function addEvents() {
	
	var tiles = document.querySelectorAll('#tiles li');
	/* place events on bounding element to prevent repeated */
	/* class toggling during animation of hovered element */
	
	for(let i = 0; i < tiles.length; i++){
		
		tiles[i].addEventListener('click', function(){
    	
    	 let clickedClass = $(this).find('.tile').attr('class');
    	 
    	 _clickTile(clickedClass);
    	
		}, false);
		
		tiles[i].addEventListener('mouseover', function(){
    	
    		$(this).find('.tile').toggleClass('flipped');
    	
		}, false);
		
		tiles[i].addEventListener('mouseout', function(){
    		
    		$(this).find('.tile').toggleClass('flipped');
    	
		}, false);
		
		
	}
}

function _clickTile(el) {
	
	//console.log(el);
}

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


