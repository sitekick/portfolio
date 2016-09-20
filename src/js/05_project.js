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