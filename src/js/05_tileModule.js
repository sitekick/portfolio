var tileModule = (function() {
	
	/* @todo : polyfill or handle ie9 lack of csstransition support */
	
	let active, //slug of desired tile projects to show
		viewport, //active media query
		viewmode, //desktop layout or mobile
		disabled = false, //flag for preventing events until transitions completed 
		projects, //hold project data
		events = {
			'(max-width: 500px)' : function() { 
					viewport = 'screen-small';
					viewmode = 'mobile';
			},
			'(max-width: 768px)' : function() { 
					viewport = 'screen-medium';
					viewmode = 'mobile';
			},
			'(max-width: 1024px)' : function() { 
					viewport = 'screen-large';
					viewmode = 'desktop';
			},
			'(max-width: 1324px)' : function() { 
					viewport = 'screen-xlarge';
					viewmode = 'desktop';
			},
			'(min-width: 1324px)' : function() { 
					viewport = 'screen-full';
					viewmode = 'desktop';
			},
			'(all)' : function() {
				layoutTiles();
			}
		}
			 
	resizeQuery(events, true);	
	
	var module = function(data) {
		
		projects = data.projects;
			
		layoutTiles();
	}
	
	function layoutTiles() {
	
		$('#interface').remove();
		
		let vars = {
			tiles : projects.slice(),
			filter : {
				active : active || 'fav',
				all : ['fav','logo-design','web-design','html-js'],
				count : 0 //counter for filtered rows
			},
			get cap() {
				let val;  //number of tiles per row
				switch(viewport){
					case 'screen-small' :
						val = 1;
					break;
					case 'screen-medium' : 
						val = 2;
					break;
					case 'screen-large' : 
						val = 3;
					break;
					case 'screen-xlarge' : 
						val = 4;
					break;
					case 'screen-full' :
						val = 5;
					break; 
					default :
						val = 1;
				}
				return val;
			},
			buttons : [], //store tile data to build controls,
			timerCalc : function(time, lengthen) {
				/* total time to compete function */
				let dur = time + ((vars.cap-1)*lengthen);
				/* dur time plus transition completion time */
				let css = $('#tiles .tile').css('transition-duration').split(',');
				let val = Number(css[0].substring(0, css[0].indexOf('s'))) * 1000 || 0; 
				return dur + val ;
			}
			
		}
		
		$('#container').append( _tileMarkup() );
		
		/* if resized while project overlay displayed */
		if( $('#container').hasClass('project') )
			$('#interface').hide();
			
		/* accesibility controls*/
		let a11y = {
			tiles : keyFocus('#tiles'),
			nav : keyFocus('#nav')
		};
		
		/* animate tiles; fires _addEvents after completion */
		_animateTiles();
		
		function _animateTiles(){
			
			let timer = {
				time : 100,
				lengthen : 200
			};
			
			setTimeout(function() {
				$('#mask').remove();
				_addEvents();
			},vars.timerCalc(timer.time, timer.lengthen));
	
			/* animate active tiles */
			for(let i = 1; i <= vars.cap; i++){
				setTimeout(function() {
					/* flip the first set of tiles */
					let li = $('#tiles .tile-' + i).addClass('flip-x');
				},timer.time);
				timer.time += timer.lengthen;
			};

		}
		
		function _addEvents() {
	
			/* Tiles */
			
			/* place events on bounding element to prevent repeated */
			/* class toggling during animation of hovered element */
			
			let tile_events = {
				flip : function(el) {
					$('.tile', el).removeClass('transform0').addClass('flip-y');
				},
				unflip : function(el) {
					let active = $('.tile', el).hasClass('active');
					
					if(active === false){
			    		$('.tile', el).removeClass('flip-y');
					}
				}
			};
			
			$('#tiles li').on({
					focusin : function(){
						tile_events.flip(this);
					},
					focusout : function(){
						tile_events.unflip(this);
					},
					mouseover : function(){
						tile_events.flip(this);
					},
					mouseout : function(){
						tile_events.unflip(this);
					}
			});

			/* Tags */
			let tags = document.querySelectorAll('.tile .tags button');
				
				for(let i=0; i < tags.length; i++) {
					tags[i].addEventListener('click', function(e){
						let focus_clicked = $(this).attr('class');
						let tile = $(this).parents('.tile');
						tile.addClass('active');
						let tile_id = tile.attr('data-project');
						let tile_classes = tile.attr('class');
						let tile_class = __findTileClass(tile_classes, true)
						
						showProject(tile_class, focus_clicked, vars.tiles[tile_id] );
					}, false);
				}
				
			/* Main Nav */
			$('#nav > li > a').on('click', function(){
				let clicked = $(this).attr('id');
				active = clicked;
				layoutTiles();
			});

			/* Main Subnav */
			$('.controls a').on('click', function(){
				
				if( $(this).hasClass('active') )
						return;
				
				let id = $(this).attr('id');
				
				if(disabled === false)
					__cycleTiles(id);
						
			});
		
			function __cycleTiles(id) {
		
				disabled = true;
					
				let clicked = {
					get val() {
						let val = id.substring(7,id.length+1);
						return Number(val);
					}
				}
				
				let startIndex = {
						get current() {
							let start_str = $('.controls .active').first().attr('id');
							let start_num = start_str .substring(7,start_str .length+1)
							return  Number(start_num);
						},
						get next() {
							let include = vars.cap - 1;
							let start;
							/* which dir */
								if(clicked.val > this.current) {
									start = ((clicked.val - include) > 1) ? clicked.val - include : 1; 
								} else {
									start = clicked.val;
								}
							
							return start;
						}
						
				};
				
				/* need to put these in variables before removing .active class */
				let next_start = startIndex.next;
				let current_start = startIndex.current;
				
				$('.controls .button').removeClass('active');
				
				let timer = {
					time : 100,
					lengthen : 200
				}
				
				let nexts = [];
				let currents = [];
				
				setTimeout(function() {
					
					/* manipulate classes for appropriate tiles */
					/* timed to occur after transition transform completion */
					
					for(let i=0; i<vars.cap; i++){
						
						let tile_current = '#tiles .tile-' + currents[i];
						let tile_next = '#tiles .tile-' + nexts[i];
						
						if( nexts.indexOf(currents[i]) < 0 ) {
			  				/* previous tiles not shown on next set */
			  				let tile = '#tiles .tile-' + currents[i];
			  				$(tile_current).removeClass('flip-x flip-x2').parent('li').removeAttr('tabindex').removeClass('show');
						} else {
							/* previous tiles shown on next set in new position */
							$(tile_current).addClass('transform0').removeClass('flip-x2');
						}
						
						if( currents.indexOf(nexts[i]) < 0 ) {
							/* new tiles shown on next set */
							$(tile_next).addClass('flip-x').parent('li').attr('tabindex', '-1').addClass('show');
						}
						
						/* adjust last class */
							if(currents[i] == currents[(vars.cap-1)])
								$(tile_current).parent('li').removeClass('last');
								
							if(nexts[i] == nexts[(vars.cap-1)])
								$(tile_next).parent('li').addClass('last');
						
						/* remove faux content */
						$('.faux img', tile_current).remove();
						$('.back', tile_current).removeClass('flipping');
					}
					
					/* re-enable button controls */
					disabled = false;
					/* reset key focus for tiles */
					a11y.tiles.resetListeners();
					
				},vars.timerCalc(timer.time, timer.lengthen));
				
				/* manipulate the CURRENT tiles to show flip effect */
				for(let i=0; i < vars.cap; i++){
					
					/* buttons */
					let button = $('#button-' + next_start);
					$(button).addClass('active');
					
					/* tile faces */
					let current_tile = $('#tiles .tile-' + current_start);
					let tmp_html = $('#tiles .tile-' + next_start + ' .front .content').html();
					$('.back .faux', current_tile).append(tmp_html);
					
					/* flip */
					setTimeout(function() {
						$(current_tile).removeClass('transform0').addClass('flip-x2');
						$('.back', current_tile).addClass('flipping');
						
					},timer.time);
					timer.time += timer.lengthen;
					
					/* counters */
					currents.push(current_start);
					current_start++
					nexts.push(next_start);
					next_start++
				};
				
			}
			
			function __findTileClass(haystack, asSelector){
		
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
			
		}

		function _tileMarkup(){
			
			let markup = `<div id="interface" class="${viewmode}"><div class="wrapper">`
			
			markup += `<ul id="tiles" tabindex="0" class="${vars.filter.active} cols-${vars.cap}"><div id="mask"></div>`;
			
			tilesloop: 
			for(let i = 0; i < vars.tiles.length; i++){
				
				let tile_foci = vars.tiles[i].foci;
				let idelta = i - vars.filter.count; //track index when rows are filtered
				
				if(vars.filter.active == 'fav'){
					
					let not_favs = [];
						
					for(tile_focus in tile_foci){
						if (tile_foci[tile_focus].favorite === false) {
							not_favs.push(Number(tile_focus));
						}
					}
						
					if(not_favs.length == tile_foci.length){
						vars.filter.count++;
						continue tilesloop;
					}
							
					tile_foci = $.grep(tile_foci, function(n, i) {
						return $.inArray(i, not_favs) ==-1;
					});
						
				} else {
				
					let found = false;
						
					/* filter out non-matching tiles */
					filter:
					for(tile_focus in tile_foci){
						if (tile_foci[tile_focus].slug == vars.filter.active) {
							found = true;
							break filter;
						}
					}
						
					if(found === false) {
						vars.filter.count++;
						continue tilesloop; 
					}
				};	
					
			/* markup for matching tiles */
			markup += `<li ${(idelta < vars.cap) ? 'tabindex="-1"' : ''} class="${(idelta < vars.cap) ? ((idelta+1) == vars.cap) ? 'show last' : 'show' : ''}">
				 <div data-project="${i}" class="tile tile-${(idelta + 1)}">  
						<div class="side front">
							<div class="content vcenter">
								<img src="assets/img/${vars.tiles[i].foci[0].slug}/${vars.tiles[i].foci[0].highlight.content}" alt="" />
							</div>	
						</div>
						<div class="side back">
							<div class="content vcenter">
								<div class="source">
									<h1>${vars.tiles[i].name}</h1>
									<p>${vars.tiles[i].description}</p>
									${__formatTileTags(tile_foci)} 
								</div>
								<div class="faux"></div>
							</div>
						</div>
				</div>
			</li>`;
			
			vars.buttons.push({
				tile : (idelta + 1), 
				state : (idelta < vars.cap) ? 'show' : 'hide'
			});
			
			}// tiles:
			
			if(viewmode == 'mobile') {
				markup += `</ul>${__tileControls(vars.buttons, viewmode)}</div>`;
			} else {
				markup += `</ul></div>`
			}
							
			markup += `<div class="wrapper"><ul id="nav" tabindex="0">`
							
				for(let i=0; i<vars.filter.all.length; i++){
					markup += `<li><a tabindex="-1" id="${vars.filter.all[i]}" class="button ${(vars.filter.active == vars.filter.all[i]) ? 'active' : ''}">${vars.filter.all[i]}</a></li>`
					
					if(viewmode == 'desktop' && i == 1)
						markup += `<li>${__tileControls(vars.buttons, viewmode)}</li>`;
					}
							
			markup += `</div></div></div>`;
		
		return markup;
		
		function __formatTileTags(tags){
	
			let markup = '<ul class="tags">';
			
			for(let i = 0; i < tags.length; i++){
				markup += `<li><button tabindex="-1" class="${tags[i].slug}">${tags[i].tag}</button></li>`;
			}
	
			markup += '</ul>';
	
			return markup;
		}
		
		
		function __tileControls(buttons, mode){
			
			
			let markup = `<div class="controls ${mode}"><h1>Portfolio</h1><ul>`;
			
			for(button in buttons){
				markup += `<li><a tabindex="-1" id="button-${buttons[button].tile}" class="button ${(buttons[button].state == 'show') ? 'active' : ''} " href="#"><span>${buttons[button].tile}</span></a></li>`;
			}
			
			markup += '</ul></div>';
			
			return markup;
		}
		
		}
		
	}// _layoutTiles()
	
	return module;
	
})();