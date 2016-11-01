function profileEffects() {
	
	$('#profile button').on('click', function(){
		$('#profile .photo').toggleClass('hide');
	});
	
	let profile_events = {
		flip : function(el) {
			$(el).find('.photo').not('.hide').addClass('flip');
		},
		unflip : function(el) {
			$(el).find('.photo').removeClass('flip');
		}
	};
	
	
	$('#profile .wrapper').on({
		focusin : function(){
			profile_events.flip(this);
			

				if( $(this).find('.photo').hasClass('hide') === true) {
					console.log('next');
					$(this).siblings('button').focus();
				}
						
		},
		mouseover : function(){
			profile_events.flip(this);
		},
		focusout : function(){
			profile_events.unflip(this);
		},
		mouseout : function(){
			profile_events.unflip(this);
		}
	});
	
	let a11y = {
			profile : keyFocus('#profile')
		};
		
		
	var backgroundImages = (function (){
		
		let loaded = [];
		
		let images = [
			'commodore.jpg',
			'groomsmen.jpg',
			'redskins.jpg'
		];
		
		
		(function backgroundLoop(i) {
			
			setTimeout(function() {
			// 0) remove background class
			console.log(i);
			
			let random = Math.floor(Math.random() * (images.length - 0) + 0);
			// 1) pull random from images, push to front of loaded */
			let num_loaded = loaded.unshift(images.splice(random, 1)[0]);
			// 2) preload to temporary location  
			let preload = `<img class="preload" src="assets/img/background/${loaded[0]}" alt="" />`;
		
			$(preload).appendTo('#profile').bind('load', function(){
				let src = $(this).attr('src')
			// 3) once loaded; update src to background image 
			    $('#background').css('background-image' , 'url(' + src + ')').addClass('loaded');
			});
			// 4) remove class; continue loop
			if(i--) 
				setTimeout(function(){
					$('#background').removeClass('loaded');
					backgroundLoop(i);
				}, 5000);
			
			}, 10000)
		})(images.length);
		
		
	
	})();
			
}