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



