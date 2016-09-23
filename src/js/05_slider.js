var sliderModule = (function () {
	
	//@todo resize slider after window resize
	
	var module = function (options) {
		
		let selector = {
			el : options.element,
			item : options.slide,
			get name() {
				return this.el + ' ' + this.item;
			}
		};
		
		let slider = {
			offset : $(selector.el).offset(),
			width: $(selector.el).width(),
			get itemWidth(){
				return this.width - (this.border * 2);
			},
			height: $(selector.el).height(),
			get itemHeight(){
				return this.height - (this.border * 2);
			},
			get itemPosition(){
				//return {top:this.border, left:this.border, 'border-width' : this.border};
				return {'border-width' : this.border};
			},
			border: options.border || 0,
			start : options.index.start,
			get startPosition() {
				return this.offset.top - (this.height * this.start);
			},
			currentPosition : function(axis) {
				let coords = $(selector.el).position();
				return coords[axis];
			}
			
		};
		
		/* make item match dimensions of slider view */
		
		//$(selector.name).width(slider.width).height(slider.height);
		$(selector.name).width(slider.itemWidth).height(slider.itemHeight);
		//console.log(slider.itemPosition);
		$(selector.name).css(slider.itemPosition);
		/* set start position of slider element */
		$(selector.el).offset({top : slider.startPosition});
		
		/* controls */
		let buttons = $(options.nav).children();
		
		var current_index = slider.start;
		for(let i= 0; i < buttons.length; i++){
			
			buttons[i].addEventListener('click', function(e){
				
				let to_index = $(this).attr('data-index');
				/* prevent double tap */
				if(current_index === to_index)
					return;
				
				_animateSlider(to_index);
			}, false);
		};
		
		function _animateSlider(to_index){
			
			let delta = to_index - current_index;
			current_index = to_index;
			
			if(delta === 0)
				return;
			
			let y_start = slider.currentPosition('top');
			//let y_end = y_start - ((slider.height + (slider.border*2)) * delta);
			let y_end = y_start - (slider.height * delta);
			
			$(selector.el).animate({
				top : y_end
			});
		}
	}
	
	return module;
	
})();