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



function showProject(id, tag, data){
	
	//console.log(id, tag, data);
	
	let tile_class = '.tile-' + id;
	let tile = $(tile_class);
	
	let container = $('#container');
	let parent = tile.parent();

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
	
	var markup = `
	<div id="project">
		<div class="imagery">
	 		<ul class="controls">
	 			<li><button class="close">Close</button></li>
	 		</ul>
	 		<div id="slider" class="content">
	 			${_formatImages(data.imagery,tag)}
	 		</div>
	 	</div>
	 <h1>${data.name}</h1>
	 <p>${data.description}</p>
	 ${_formatTabTags(data,tag)}
	</div>`;
	
	$(markup).prependTo('#container')
	.offset({
		top: parent_specs.offset.top, 
		left: parent_specs.offset.left
		})
	.width(parent_specs.width)
	.height(parent_specs.height);
	
	$('#project').animate({
			left : container_specs.offset.left,
			top : container_specs.offset.top,
			width : container_specs.width,
			height : container_specs.height,
			opacity : 1
		}, 
		200,
		function () {
			$(this).find('.imagery').addClass('loaded');
			_projectEvents(id, tag, parent_specs);
		});
}

function _projectEvents(id, active_tag, parent_specs) {
	
	/* initialize slider */
	
	sliderModule({
		element : '#slider',
		slide : '.image',
		index : {
			start : $('.tabs .' + active_tag).attr('data-index'),
			stop : null
			},
		nav : '.tabs ul'
		});
	
	
	let control = document.querySelector('button.close');
	
	control.addEventListener('click', function(e){
		
		$('#project').animate({
			left : parent_specs.offset.left,
			top : parent_specs.offset.top,
			width : parent_specs.width,
			height : parent_specs.height,
			opacity : .3
		}, 
		200,
		function () {
			$(this).remove();
			let tile = '.tile-' + id;
			$(tile).removeClass('active');
			$(tile).toggleClass('flipped');
		});

		
	}, false);
	
	/* tabs nav */
	
	let tags = document.querySelectorAll('.tabs li');
	
	for(let i=0; i < tags.length; i++){
		tags[i].addEventListener('click', function(e){
			/* menu */
			$(tags).find('a').removeClass('active');
			$(this).find('a').addClass('active');
			/* content */
			$('.copy.active').removeClass('active');
			let content = '.' + $(this).attr('class');
			$(content, '.tabs .content').addClass('active');
		})
	}
	
	
}
	
function _formatTabTags(data, active){
	
	let tags = data.tags;
	let content = '';
	let markup = '<div class="tabs"><ul>';
	//console.log(active);
	for(let i = 0; i < tags.length; i++){
		let activate = ( tags[i].name.replace(/[\/ ]/g,'-') == active) ? true : false;
		markup += `<li data-index="${i}" class="${tags[i].slug}"><a href="#" class="${(activate) ? 'active' : ''}">${tags[i].name}</a></li>`;
		content += `<div class="copy ${tags[i].slug} ${(activate) ? 'active' : ''}">${data.copy[tags[i].slug]}</div>`;
	}
	
	markup += '</ul>';
	markup += '<div class="content">';
	markup += content
	markup += '</div></div>';
	
	return markup;
}

function _formatImages(images, tag_active){
	
	let markup = '';
	
	for(var image in images){	
		markup += `<div class="image ${image}"><img src="assets/img/${image}/${images[image]}" alt=""/></div>`
	}
	return markup;
}
var sliderModule = (function () {
	
	var module = function (options) {
		
		let selector = {
			el : options.element,
			item : options.slide
		};
		
		let slider = {
			offset : $(selector.el).offset(),
			width: $(selector.el).width(),
			height: $(selector.el).height(),
			start : options.index.start,
			get startPosition() {
				return this.offset.top - (this.height * this.start);
			},
			currentPosition : function(axis) {
				let coords = $(selector.el).position();
				return coords[axis];
			}
			
		};
		
		/* make item match dimensions of slider view */
		$(selector.el + ' ' + selector.item).width(slider.width).height(slider.height);
		/* set start position of slider element */
		$(selector.el).offset({top : slider.startPosition});
		/* controls */
		let buttons = $(options.nav).children();
		
		var current_index = slider.start;
		for(let i= 0; i < buttons.length; i++){
			
			buttons[i].addEventListener('click', function(e){
				
				let to_index = $(this).attr('data-index');
				/* prevent double tap */
				if(current_index === to_index)
					return;
				
				_animateSlider(to_index);
			}, false);
		};
		
		function _animateSlider(to_index){
			
			let delta = to_index - current_index;
			current_index = to_index;
			
			if(delta === 0)
				return;
			
			let y_start = slider.currentPosition('top');
			let y_end = y_start - (slider.height * delta);
			
			$(selector.el).animate({
				top : y_end
			});
		}
	}
	
	return module;
	
})();
function layoutTiles(data) {
	
	var tiles = data;
	
	var markup = '<ul id="tiles">';
	
		for(let i = 0; i < tiles.length; i++){
 
			markup += `<li>
					<div data-project="${i+1}" class="tile tile-${i+1}"> 
						<div class="side front">
							<div class="content vcenter">
							<img src="assets/img/logo-design/${tiles[i].imagery['logo-design']}" alt="" />
							</div>
						</div>
						<div class="side back">
							<div class="content vcenter">
							<h1>${tiles[i].name}</h1>
							<p>${tiles[i].description}</p>
							${_formatTileTags(tiles[i].tags)}
							</div>
						</div>
					</div>
					</li>`;
		}
		
	markup += '</ul>';	
	
	$('#container').append(markup);
	
	addEvents(tiles);
	
}


function addEvents(data) {
	
	var tiles = document.querySelectorAll('#tiles li');
	/* place events on bounding element to prevent repeated */
	/* class toggling during animation of hovered element */
	
	/* Tiles */
	for(let i = 0; i < tiles.length; i++){
		
		tiles[i].addEventListener('click', function(){
    	
    	 //let clickedClass = $(this).find('.tile').attr('class');
    	
		}, false);
		
		tiles[i].addEventListener('mouseover', function(){
    	
    		$(this).find('.tile').toggleClass('flipped');
    	
		}, false);
		
		tiles[i].addEventListener('mouseout', function(){
    		
    		/* prevent flip of active(clicked) tile */
    		let active = $(this).find('.tile').hasClass('active');
    		
    		if(active === false){
	    		$(this).find('.tile').toggleClass('flipped');
    		}
			
			
		}, false);
	}

	let tags = document.querySelectorAll('.tile .tags button');
		
		for(let i=0; i < tags.length; i++) {
			tags[i].addEventListener('click', function(e){
				let tag_active = $(this).attr('class');
				let tile = $(this).parents('.tile');
				tile.addClass('active');
				let tile_id = tile.attr('data-project');
				//console.log(tile);
				showProject(tile_id, tag_active, data[tile_id-1] );
			}, false);
		}
}

function _formatTileTags(tags){
	let markup = '<ul class="tags">';
	
	for(let i = 0; i < tags.length; i++){
		markup += `<li><button class="${tags[i].slug}">${tags[i].name}</button></li>`;
	}
	
	markup += '</ul>';
	
	return markup;
}




$(function () {
	
	$.getJSON('assets/data/projects.json', function (data) {
		_init(data.projects);
	});
	
	
	function _init(data) {
		
		layoutTiles(data);
			
	}
	
});


