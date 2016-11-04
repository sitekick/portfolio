function showProject(tile_class, tag, data){
	
	let viewport = getViewport();
	
	let parent = $(tile_class, '#tiles ').parent();
	
	let panel = growPanel({
			source : parent,
		 	target : '#container',
		 	id : 'project',
		 	markup : {
			 	primary : `<h1>${data.name}</h1><p>${data.description}</p>
			 				${_formatTabTags(data,tag)}`,
			 	secondary : `<div id="slider" class="content ${viewport}">${_formatImages(data,tag)}</div>`
		 	},
		 	events : {
			 	afterload : function(){
				 	_projectEvents(tile_class, tag, viewport);
			 	},
			 	afterclose : function(){
				 	$(tile_class, '#tiles ').removeClass('active').removeClass('flip-y');
			 	}
		 	}
		});
	
	

} // showProject

function _projectEvents(tile_class, active_tag, mode) {	
	
	/* initialize slider */
	let slider = sliderModule({
		element : '#slider',
		slide : '.item',
		index : $('.tabs .' + active_tag).attr('data-index'),
		nav : '.tabs ul',		
		mode : mode
	});
	
	/* a11y */
	let ally = {
		'tags' : keyFocus('#project .tabs'),
		'close' : keyFocus('#project .close')
	};
	
	/* tabs nav */
	
	$('#project .tabs a').on('click', function() {
		// menu 
		$('#project .tabs a.active').removeClass('active');
		$(this).addClass('active');
		// content
		$('#project .copy.active').removeClass('active');
		let content = '.' + $(this).parents('li').attr('class');
		$(content, '#project .tabs .content').addClass('active');
		
	});
		
}// _projectEvents
	

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