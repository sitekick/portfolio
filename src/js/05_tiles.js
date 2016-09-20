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
