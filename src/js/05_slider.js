var sliderModule = (function () {
	
	var module = function (options) {
	
		var clicked = false;
	
		var settings = {
			el : options.element,
			item : options.slide,
			get name() {
				return `${this.el} ${this.item}`;
			},
			index : Number(options.index),
			nav : options.nav,
			mode : options.mode
		};
		
		var slider =  {
			fillImageWrapper : function() {
				let val_width = $(settings.el).parent().width();
				let val_height = $(settings.el).parent().height();
				
				$(settings.name).width(val_width).height(val_height);
				
			},
			setStartPosition : function() {
				let offset = $(settings.el).parent().offset();
				let pos = (offset) ? offset.top : 0;
				let adjustment = $(settings.el).parent().height() * settings.index;
								
				$(settings.el).offset({top : (pos - adjustment)});
			},
			overflowFix : function() {
				
				let items = $(settings.name);
				let slider_height = $(items).first().height();
				
				$('.overflow', items).removeClass('overflow');
				
				for(let i=0; i< items.length; i++){
					let item = items[i];
					let img = $('img', item)
					let img_height = $('img', item).height();
					if( $(img).height() > slider_height)
						$(img).addClass('overflow');
				}
				
			},
			animateSlide : function(to_index) {
				let delta = to_index - settings.index;
				settings.index = to_index
				
				if(delta === 0)
					return;
					
				let y_start = $(settings.el).position()
				let y_end = y_start.top - ( $(settings.el).parent().height() * delta );
			
				$(settings.el).animate({
					top : y_end
					}, 300, 'swing', function() {
						clicked = false;
					});
			}		
		};
		
		function _rebuild(load) {
			
			if(load) {
				slider.setStartPosition();
			}

			/* Check for switch between viewport modes */
			let prev_mode = settings.mode;
			let curr_mode =  getViewport();
		
			if(prev_mode != curr_mode) {
				settings.mode = curr_mode;
				slider.setStartPosition();
			}
			
			/* make item match dimensions of slider view */
			slider.fillImageWrapper();
			/* check for overflowed image */
			slider.overflowFix();
		};
		
		var _events = function(){
			
			window.addEventListener('resize', function (){
					_rebuild();
				}, false);

			/* controls */
			let buttons = $(settings.nav).children();
			
			for(let i= 0; i < buttons.length; i++){
				
				buttons[i].addEventListener('click', function(e){
						
					let to_index = Number($(this).attr('data-index'));

					/* prevent double tap */
					if(settings.index === to_index)
						return;
					
					if(clicked === false){
						slider.animateSlide(to_index);
						clicked = true;
					}
					
				}, false);
			}
				
			_rebuild(true);
				
		}();
		
	};// module
	
	return module;
		
})();