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
		//height : container.height()
		get height(){
			return  $(window).height() - (this.offset.top * 2);
			} 
	}
	
	var markup = `
	<div id="project">
		<div class="imagery">
	 		<div class="close"><img src="assets/img/button.close.png" alt="close button"/></div>
	 		<div id="slider" class="content">
	 			${_formatImages(data.sidebar,tag)}
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
			$('#tiles').hide();
			_projectEvents(id, tag, parent_specs);
		});
}

function _projectEvents(id, active_tag, parent_specs) {
	
	var resizeid;
	/* initialize slider */
	
	sliderModule({
		element : '#slider',
		slide : '.item',
		index : {
			start : $('.tabs .' + active_tag).attr('data-index'),
			stop : null
			},
		nav : '.tabs ul',		
		border : 10
		});

	let control = document.querySelector('.close');
	
	control.addEventListener('click', function(e){
		
		$('#tiles').show();
		
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
	
	/* resize */
	
	window.addEventListener('resize', resizeThrottle, false);
	
	function resizeThrottle() {
		if ( !resizeid ) {
		 	resizeid = setTimeout(function() {
		 		resizeid = null;
		 		_resizeProject(active_tag);
       		}, 100);
    	}
	}
	
	
}// _projectEvents
	
function _resizeProject(active_tag){
	
	let container = $('#container');

	let container_specs = {
		offset : container.offset(),
		width : container.width(),
		get height(){
			return  $(window).height() - (this.offset.top * 2);
		} 
	}
	
	$('#project').animate({
			left : container_specs.offset.left,
			top : container_specs.offset.top,
			width : container_specs.width,
			height : container_specs.height
		}, 
		100,
		function () {
			_resizeImages();
		});
}	

function _resizeImages() {
	
	let slider_width = $('#slider').width();
	let border_val = parseInt( $('#slider .image').css('border-width') , 10);
	
	$('#slider .image').width( slider_width - (border_val * 2) );
	
}
		
function _formatTabTags(data, active){
	
	let tags = data.tags;
	let content = '';
	let markup = '<div class="tabs"><ul>';
	
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

function _formatImages(content, tag_active){
	
	let markup = '';
	
	for(var item in content){	
	
		markup += `<div class="item ${content[item].type} ${item}">`
		switch(content[item].type){
			case 'image' :
			markup += `<img src="assets/img/${item}/${content[item].content}" alt=""/>`;
			break;
			case 'div' :
			markup += `<div>${content[item].content}</div>`;
			break;
		};
		
		markup += `</div>`
	}
	return markup;
}
var sliderModule = (function () {
	
	//@todo resize slider after window resize
	
	var module = function (options) {
		
		let selector = {
			el : options.element,
			item : options.slide,
			get name() {
				return this.el + ' ' + this.item;
			}
		};
		
		let slider = {
			offset : $(selector.el).offset(),
			width: $(selector.el).width(),
			get itemWidth(){
				return this.width - (this.border * 2);
			},
			height: $(selector.el).height(),
			get itemHeight(){
				return this.height - (this.border * 2);
			},
			get itemPosition(){
				return {'border-width' : this.border};
			},
			border: options.border || 0,
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
		
		$(selector.name).width(slider.itemWidth).height(slider.itemHeight);
		
		$(selector.name).css(slider.itemPosition);
		
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
								<img src="assets/img/logo-design/${tiles[i].sidebar['logo-design'].content}" alt="" />
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


