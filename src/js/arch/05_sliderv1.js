var sliderModule = (function () {
	
	var selector, slider;
		
	var specs = function() {
		return {
			get offset() {
				return $(selector.el).offset();
			}, 
			width : $(selector.el).width(),
			get itemWidth(){
				return this.width - (selector.options.border * 2);
			},
			height : $(selector.el).height(),
			get itemHeight(){
				return this.height - (selector.options.border * 2);
			},
			get itemPosition(){
				return {'border-width' : selector.options.border};
			},
			get startPosition() {
				return this.offset.top - (this.height * selector.options.index);
			},
			currentPosition : function(axis) {
				let coords = $(selector.el).position();
				return coords[axis];
			}
		};
	}
	
	var moduleStart = function (options) {
	
		//@todo resize slider after window resize
		selector = {
			el : options.element,
			item : options.slide,
			get name() {
				return this.el + ' ' + this.item;
			},
			options : {
				border: options.border || 0,
				index : options.index,
				nav : options.nav,
				mode : options.mode
			}
		};
		
		slider = specs();
				
		/* make item match dimensions; position of slider view */
		$(selector.name).width(slider.itemWidth).height(slider.itemHeight).css(slider.itemPosition);
		
		/* set start position of slider element */
		$(selector.el).offset({top : slider.startPosition});
		
		var _events = function(){
			
			/* controls */
			let buttons = $(selector.options.nav).children();
			
			for(let i= 0; i < buttons.length; i++){
				
				buttons[i].addEventListener('click', function(e){
						
					let to_index = Number($(this).attr('data-index'));
					/* prevent double tap */
					if(selector.options.index === to_index)
						return;
					
					_animateSlider(to_index);
					
					}, false);
				}
		}();
	
		function _animateSlider(to_index){
					
			let delta = to_index - selector.options.index;
			selector.options.index = to_index
			
			if(delta === 0)
				return;
					
			let y_start = slider.currentPosition('top');
			let y_end = y_start - (slider.height * delta);
			
			$(selector.el).animate({top : y_end});		
		}
		
	};// module
	
	var moduleResize = function(opts) {
		
		slider = specs();
		$(selector.name).width(slider.itemWidth);
		//$(selector.name)height(slider.itemHeight);
		//$(selector.name).css(slider.itemPosition);
		
		//$('#slider')
		let prev_mode = selector.options.mode;
		let curr_mode =  opts.mode;
		
		//console.log(selector.options.mode + ':' + opts.mode);
		
		if(prev_mode != curr_mode) {
			selector.options.mode = curr_mode;
			$(selector.name).height(slider.itemHeight);
/*
			switch(true){
				case curr_mode = 'mobile'
			}
*/
		}
		
		if(selector.options.index != 0){
			//$(selector.el).offset({top : slider.startPosition});
			//$(selector.name).height(slider.itemHeight);
		}
		//console.log(selector.options);
		
		/* set start position of slider element */
		 //$(selector.el).offset({top : slider.startPosition});

		

		
	};
	
	return {
		init : moduleStart,
		reset : moduleResize
		}
		
})();