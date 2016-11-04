var growPanel = (function () {

	var module = function(settings) {
		
		let markup = `<div id="${settings.id}" class="growpanel">
				<div class="secondary">
					<div class="close" tabindex="0"><img tabindex="-1" src="assets/img/button.close.png" alt="close button"/></div>
					${settings.markup.secondary}
					</div>
				<div class="primary">
					${settings.markup.primary}
				</div>
			</div>`;

		
		let values = {
			source : {
				offset : $(settings.source).offset(),
				width : $(settings.source).width(),
				height : $(settings.source).height()
			},
			target : {
				selector : '#' + settings.id,
				offset : $(settings.target).offset(),
				width : $(settings.target).width(),
				height : $(settings.target).height()
			}
		}
		
		$(markup).prependTo(settings.target).css({
				top: values.source.offset.top - values.target.offset.top,
				left: values.source.offset.left - values.target.offset.left,
				width:  values.source.width,
				height:  values.source.height
				});
			

		$(values.target.selector).animate({
			top : 0,
			left : 0,
			width : values.target.width,
			height: values.target.height,
			opacity : 1
		},250,function () {
			//reset css to allow resizing
			$(this).css({
				right: 0,
				bottom: 0,
				width: 'auto',
				height: 'auto'
			}).find('.secondary').addClass('loaded');
			$('#container').addClass(settings.id);
			$('#interface').hide();
			_events();
			return settings.events.afterload();
		});	
	
	
	function _events(){
		
		$('.close', values.target.selector).on('click', function(){
			
			$('#interface').show();
		
			$(values.target.selector).animate({
				top: values.source.offset.top - values.target.offset.top, 
				left: values.source.offset.left - values.target.offset.left,
				width : values.source.width,
				height : values.source.height,
				opacity : .3
			}, 
			200,
			function () {
				$('#container').removeClass(settings.id);
				$(this).remove();
				return settings.events.afterclose();
			});
		});
	}
	
	
	}	
	
	return module;

})();