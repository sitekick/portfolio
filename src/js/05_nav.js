function _buildTileNav(buttons) {
	
	let nav = '<ul id="tilenav">';
	
	for(button in buttons){
		nav += `<li><a id="button-${buttons[button].tile}" class="button ${(buttons[button].state == 'show') ? 'active' : ''} " href="#"><span>${buttons[button].tile}</span></a></li>`;
	}
	
	nav += '</ul>';
	
	$('#container').append(nav);
	
	_buildTileNavEvents();
}

function _buildTileNavEvents() {
	
	
	$('#tilenav .button').on({
		
		click : function () {
			let id = $(this).attr('id')
			if( $(this).hasClass('active') )
				return;
			
			_cycleTiles(id);
		}
	});
	
}

function _disable(bool) {
		
		var disabled = (bool) ? bool : disabled;
		
		return disabled;
}
	
function _cycleTiles(id) {
	
	
	var buttons =  {
			el : '#tilenav .button', 
			get total() {
				return $(this.el).length;
			},
			active : 4,
			clicked : _retrieveId(id)
		};
	
	var startIndex = {
			get current() {
				var start = _retrieveId( $('#tilenav .active').first().attr('id') ) ;
				return start;
			},
			get next() {
				
				let include = buttons.active - 1;
				let start;
				/* which dir */
					if(buttons.clicked > this.current) {
						start = ((buttons.clicked - include) > 1) ? buttons.clicked - include : 1; 
					} else {
						start = buttons.clicked;
					}
				
				return start;
			}
	};
	
	/* need to put these in variables before removing .active class */
	let next_start = startIndex.next;
	let current_start = startIndex.current;
	$(buttons.el).removeClass('active');
	
	let timer = {
		time : 100,
		lengthen : 75,
		get dur() {
			 /* total time to compete function */
			 return this.time + ((buttons.active-1)*this.lengthen);
		},
		transitionMs : 1500,
		get transitionDur() {
			 /* dur time plus transition completion time */
			let css = $('#tiles .tile').css('transition-duration').split(',');
			let val = Number(css[0].substring(0, css[0].indexOf('s'))) * 1000 || 0; 
			
			return this.dur + val ;
		}
	}
	

	let nexts = [];
	let currents = [];
	
	/* manipulate the CURRENT tiles to show flip effect */
	for(let i=0; i<buttons.active; i++){
		
		/* buttons */
		let button = $('#button-' + next_start);
		$(button).addClass('active');
		
		/* tile faces */
		let current_tile = $('#tiles .tile-' + current_start);
		let tmp_html = $('#tiles .tile-' + next_start + ' .front .content').html();
		$('.back .faux', current_tile).append(tmp_html);
		
		/* flip */
		setTimeout(function() {
			$(current_tile).removeClass('notransition').addClass('flip-x2');
			$('.back', current_tile).addClass('transition');
			
		},timer.time);
		timer.time += timer.lengthen;
		
		/* counters */
		currents.push(current_start);
		current_start++
		nexts.push(next_start);
		next_start++
	};
	
	setTimeout(function() {
		
		/* manipulate classes for appropriate tiles */
		/* timed to occur after transition transform completion */
		
		for(let i=0; i<buttons.active; i++){
			
			let tile_current = '#tiles .tile-' + currents[i];
			let tile_next = '#tiles .tile-' + nexts[i];
			
			if( nexts.indexOf(currents[i]) < 0 ) {
  				/* previous tiles not shown on next set */
  				let tile = '#tiles .tile-' + currents[i];
  				$(tile_current).removeClass('flip-x flip-x2').parent('li').removeClass('show');
			} else {
				/* previous tiles shown on next set in new position */
				$(tile_current).addClass('notransition').removeClass('flip-x2');
			}
			
			if( currents.indexOf(nexts[i]) < 0 ) {
				/* new tiles shown on next set */
				$(tile_next).addClass('flip-x').parent('li').addClass('show');
			}
			
			/* remove faux content */
			$('.faux img', tile_current).remove();
			$('.back', tile_current).removeClass('transition');
		}
		
	},timer.transitionDur);
	
	function _retrieveId(str){
		let val = str.substring(7,str.length+1);
		return Number(val);
	}
	
}
