function layoutTiles(data, focus) {
	
	var tiles = data.projects;
	var mode = getViewport();
	//console.log(mode);
	let num = tiles.length;
	let continued = 0;
	var markup = `<ul id="tiles" class="${focus} bground"><div id="mask"></div>`;
	let cap = 4;
	var nav = {
		buttons : [],
	};	
		
		tiles: 
		for(let i = 0; i < num; i++){
			let tile_foci = tiles[i].foci;
			
			mode: 
				switch(focus){
					case 'fav' :
						let not_favs = [];
						
						for(tile_focus in tile_foci){
							if (tile_foci[tile_focus].favorite === false) {
								not_favs.push(Number(tile_focus));
							}
						}
						
						if(not_favs.length == tile_foci.length){
							continued++;
							continue tiles;
						}
							
						
						tile_foci = $.grep(tile_foci, function(n, i) {
							return $.inArray(i, not_favs) ==-1;
						});
						
						
					break mode;
					default : 
						let found = false;
							
						filter:
						/* filter out non-matching tiles */
						for(tile_focus in tile_foci){
							if (tile_foci[tile_focus].slug == focus) {
								found = true;
								break filter;
							}
						}
						if(found === false) {
							continued++;
							continue tiles; 
						}
							
				}//switch
				
			/* markup for matching tiles */
			markup += `<li class="${(cap > 0) ? 'show' : ''}">
					<div data-project="${i+1}" class="tile tile-${(i+1) - continued} flip-y"> 
						<div class="side front">
							<div class="content vcenter">
								<img src="assets/img/${tiles[i].foci[0].slug}/${tiles[i].foci[0].highlight.content}" alt="" />

							</div>	
						</div>
						<div class="side back">
							<div class="content vcenter">
							<h1>${tiles[i].name}</h1>
							<p>${tiles[i].description}</p>
							${_formatTileTags(tile_foci)}
							</div>
						</div>
					</div>
					</li>`;
		
		
		nav.buttons.push({
			tile : (i+1) - continued, 
			state : (cap > 0) ? 'show' : 'hide'
			});
		cap --;
		}
		
	markup += '</ul>';
	$('#container').append(markup);
	$('#tilenav').remove();
	_buildTileNav(nav.buttons);
	
	let time = 100;
	let lengthen = 75;
	let numTiles = num - continued;
	let dur = time + ((numTiles-1)*lengthen);
	let transitionMs = 1500;

	setTimeout(function() {
		$('#mask').remove();
	},(dur + transitionMs));

	for(let i = 1; i <= numTiles; i++){
		setTimeout(function() {
		
		$('#tiles .tile-' + i).removeClass('flip-y');
		},time);
		time += lengthen;
	}
	
	addEvents(tiles);
		
}

function addEvents(data) {
	
	
	setTimeout(function() {
		$('#tiles').removeClass('bground');
		
	}, 100)
	
/*
	let i = 1;
	let classInterval = setInterval( classTimer, 500);
*/
	
	function classTimer(){
		
		$('#tiles').removeClass('bground-' + (i-1));
		$('#tiles').addClass('bground-' + i);
			if(i <= 3){
			i++;
			} else {
			clearInterval(classInterval);
			}
	}
	
	
	var tiles = document.querySelectorAll('#tiles li');
	/* place events on bounding element to prevent repeated */
	/* class toggling during animation of hovered element */
	
	/* Tiles */
	for(let i = 0; i < tiles.length; i++){
		
		tiles[i].addEventListener('mouseover', function(){
    		
    		$(this).find('.tile').toggleClass('flip-x');
    	
		}, false);
		
		tiles[i].addEventListener('mouseout', function(){
    		
    		/* prevent flip of active(clicked) tile */
    		let active = $(this).find('.tile').hasClass('active');
    		
    		if(active === false){
	    		$(this).find('.tile').toggleClass('flip-x');
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
				let tile_classes = tile.attr('class');
				let tile_class = _findTileClass(tile_classes, true)
				
				showProject(tile_class, tag_active, data[tile_id-1] );
			}, false);
		}
}

function _formatTileTags(tags){
	
	let markup = '<ul class="tags">';
	
	for(let i = 0; i < tags.length; i++){
		markup += `<li><button class="${tags[i].slug}">${tags[i].tag}</button></li>`;
	}
	
	markup += '</ul>';
	
	return markup;
}


function _findTileClass(haystack, asSelector){
	
	let classes = haystack.split(' ');
	let tileClass;
	
	for (i = 0; i < classes.length; i++){
		
		let tile_class = classes[i];
		
		if( tile_class.indexOf('tile-') > -1 ) {
		 	tileClass = tile_class ;
		 	break;
		 } else {
			continue;
		 };
	}
	
	return (asSelector) ? '.' + tileClass : tileClass;
}

