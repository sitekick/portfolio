function showProject(tile_class, tag, data){
	
	let viewport = getViewport();
	
	let parent = $(tile_class, '#tiles ').parent();
	
	$('#container').addClass('project');
	
	/* the selected tile */
	let parent_specs = {
		offset : parent.offset(),
		width : parent.width(),
		height : parent.height()
	}
	/* the project pane */
	let container_specs = {
		offset : $('#container').offset(),
		width : $('#container').width(),
		get height(){
			return Math.round( $(window).height() - (this.offset.top * 2) );
		}
				
	}
	
	var markup = `
	<div id="project">
		<div class="imagery">
	 		<div class="close" tabindex="0"><img tabindex="-1" src="assets/img/button.close.png" alt="close button"/></div>
	 		<div id="slider" class="content ${viewport}">${_formatImages(data,tag)}</div>
	 	</div>
	 	<div class="info">
	 		<h1>${data.name}</h1><p>${data.description}</p>
	 		${_formatTabTags(data,tag)}
		</div>
	</div>`;
	
	$(markup).prependTo('#container')
		.offset({
			top: parent_specs.offset.top, 
			left: parent_specs.offset.left
			})
			.width(parent_specs.width)
			.height(parent_specs.height);
	
	$('#project').animate({
			top : Math.round(container_specs.offset.top),
			left : Math.round(container_specs.offset.left),
			width : container_specs.width,
			height :container_specs.height,
			opacity : 1
		}, 
		150,
		function () {
			$(this).find('.imagery').addClass('loaded');
			$('#interface').hide();
			_projectEvents(tile_class, tag, parent_specs, viewport);
		});
}

function _projectEvents(tile_class, active_tag, parent_specs, mode) {
	
	var resizeid;
	/* initialize slider */
	
	/* a11y */
	
	let ally = {
		'tags' : keyFocus('#project .tabs'),
		'close' : keyFocus('#project .close')
	};
	
	sliderModule({
		element : '#slider',
		slide : '.item',
		index : Number($('.tabs .' + active_tag).attr('data-index')),
		nav : '.tabs ul',		
		mode : mode
		});

	let control = document.querySelector('.close');
	
	control.addEventListener('click', function(e){
		
		$('#interface').show();
		
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
			$(tile_class, '#tiles ').removeClass('active').removeClass('flip-y');
			$('#container').removeClass('project');
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
	
	let container_specs = {
		offset : $('#container').offset(),
		width : $('#container').width(),
		get height(){
			return  $(window).height() - (this.offset.top * 2) ;
		} 
	}
	
	$('#project').css({
			top : Math.round(container_specs.offset.top),
			left : Math.round(container_specs.offset.left),
			width : container_specs.width,
			height : Math.round(container_specs.height)
		}); 
}	


function _formatTabTags(data, active){
	
	let foci = data.foci;
	let content = '';
	let markup = '<div class="tabs"><ul tabindex="0">';

	for(let i = 0; i < foci.length; i++){
		let activate = ( foci[i].slug == active) ? true : false;
		let a_classes = '';
		if(activate)
			a_classes += 'active ';
		if(foci[i].favorite)
			a_classes += 'fav';
		markup += `<li data-index="${i}" class="${foci[i].slug}"><a href="#" tabindex="-1" class="${a_classes}">${foci[i].tag}</a></li>`;
		content += `<div class="copy ${foci[i].slug} ${(activate) ? 'active' : ''}">${foci[i].copy}</div>`;
	}
	
	markup += '</ul>';
	markup += '<div class="content">';
	markup += content
	markup += '</div></div>';
	
	return markup;
}


function _formatImages(data, tag_active){
	
	let markup = '';
	
	let highlights = data.foci
	
	for(let i = 0; i < highlights.length; i++){	
	
		markup += `<div class="item ${highlights[i].highlight.type} ${highlights[i].slug}">`
		switch(highlights[i].highlight.type){
			case 'image' :
			markup += `<img src="assets/img/${highlights[i].slug}/${highlights[i].highlight.content}" alt=""/>`;
			break;
			case 'div' :
			markup += `<div>${highlights[i].highlight.content}</div>`;
			break;
		};
		
		markup += `</div>`
	}
	return markup;
}