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
			_cycleTiles(id);
		}
	});
	
}

function _cycleTiles(id) {
	
	
	let buttons = $('#tilenav .button');
	var group =  {
			total : buttons.length, 
			active : 4
		};
	
/*
	var states = {
		current : {
			get selected() {
				let start = _retrieveId( $('#tilenav .active').first().attr('id') ) ;
				let end = start + (group.active - 1);
				return { 
					'start' : start,
					'end' : end
				}
			}
		},
		next : {
			get selected() {
				
				let clicked = _retrieveId(id);
				let include = group.active - 1;
				
				let start = ((clicked - include) > 1) ? clicked - include : 1;
				
				let end = start + include;
				return {
					'start' : start,
					'end' : end
					}
			}
		}
	}
*/
	var states2 = {
			get current() {
				var start = _retrieveId( $('#tilenav .active').first().attr('id') ) ;
				var end = start + (group.active - 1);
				return { 
					'start' : start,
					'end' : end
				}
			},
			get next() {
				
				let clicked = _retrieveId(id);
				let include = group.active - 1;
				let start;
				/* which dir */
					if(clicked > this.current.start) {
						start = ((clicked - include) > 1) ? clicked - include : 1; 
					} else {
						start = clicked;
					}
				
				
				let end = start + include;
				
				return {
					'start' : start,
					'end' : end
					}
			}
	}
	
	
	let start = states2.next.start;
	let end = states2.next.end;
	
	$(buttons).removeClass('active');
	//let tiles = $('#tiles > li');
	$('#tiles li').removeClass('show');
	
	for(i=start; i<=end; i++){
		let button = $('#button-' + i);
		$(button).addClass('active');
		let tile = $('#tiles > li').get(i-1);
		$(tile).addClass('show');
	}
	
	function _retrieveId(str){
		let val = str.substring(7,str.length+1);
		return Number(val);
	}
	
}