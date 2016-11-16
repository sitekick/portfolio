function showProject(tile_class, tag, data){
	
	let viewport = getViewport();
	
	let parent = $(tile_class, '#tiles ').parent();
	
	let panel = growPanel({
			source : parent,
		 	target : '#container',
		 	id : 'project',
		 	markup : {
			 	primary : `<h1>${data.name}</h1><p>${data.description}</p>
			 				${__formatTabTags(data,tag)}`,
			 	secondary : `<div id="slider" class="content ${viewport}">${__formatImages(data,tag)}</div>`
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
	
	function __formatTabTags(){
		
		let foci = data.foci;
		let content = '';
		let markup = '<div class="tabs"><ul tabindex="0">';
		let counter = 0;
		
		for(focus in foci){	
			let activate = ( focus == tag) ? true : false;
			let a_classes = '';
			if(activate)
				a_classes += 'active ';
			if(foci[focus].favorite)
				a_classes += 'fav';
			markup += `<li data-index="${counter}" class="${focus}"><a href="#" tabindex="-1" class="tab${(activate) ? ' active' : ''}">${foci[focus].tag}</a></li>`;
			content += `<div class="copy ${focus} ${a_classes}">${foci[focus].copy}</div>`;
			counter++;
		}
		
		markup += '</ul>';
		markup += '<div class="content">';
		markup += content
		markup += '</div></div>';
		
		return markup;
}

	function __formatImages(){
		
		let markup = '';
		
		let foci = data.foci;
		
		for(focus in foci){	
			
			markup += `<div class="item ${foci[focus].highlight.type} ${focus}">`
			switch(foci[focus].highlight.type){
				case 'image' :
					markup += `<img src="assets/img/${focus}/${foci[focus].highlight.content}" alt=""/>`;
				break;
				case 'html' :
					markup += `<div class="wrapper">${foci[focus].highlight.content}</div>`;
				break;
			};
			
			markup += `</div>`
		}
		return markup;
	}
	
	

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
	
	$('#project .tabs a.tab').on('click', function() {
		// menu 
		$('#project .tabs a.active').removeClass('active');
		$(this).addClass('active');
		// content
		$('#project .copy.active').removeClass('active');
		let content = '.' + $(this).parents('li').attr('class');
		$(content, '#project .tabs .content').addClass('active');
		
	});
	
	
	/* iframe */
	let src = $('#project iframe').attr('data-src');
	$('#project iframe').attr('src', src);

		
}// _projectEvents
	

