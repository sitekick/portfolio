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
			$('#tiles').hide();
			_projectEvents(id, tag, parent_specs);
		});
}

function _projectEvents(id, active_tag, parent_specs) {
	
	var resizeid;
	/* initialize slider */
	
	sliderModule({
		element : '#slider',
		slide : '.image',
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
       		}, 66);
    	}
	}
	
	
}// _projectEvents
	
function _resizeProject(active_tag){
		
	$('#slider').hide();
	
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
			/* @ todo resize slider
			sliderModule.repos; */
		});
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

function _slider(active_tag) {
	
	

}
function _formatImages(images, tag_active){
	
	let markup = '';
	
	for(var image in images){	
		markup += `<div class="image ${image}"><img src="assets/img/${image}/${images[image]}" alt=""/></div>`
	}
	return markup;
}