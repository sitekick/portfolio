(function profileEffects() {
	
	let contact = false;
	
	$('#profile a.me').on('click', function(){
		
		$('#profile .photo').toggleClass('hide');
		
		$(this).toggleClass('active');
		
		if( $('#profile .photo').hasClass('hide') ){
			//inactive
			backgroundImages.blur = true;
		} else {
			//active
			backgroundImages.blur = false;
		}
		
		_resetLoop();

	});
	
	$('#profile a.contact').on('click', function(){
		
		contact = (contact === true) ? false : true;
		
		if(contact === true) showContact();
	
	});
	
	function showContact(){
		
		let panel = growPanel({
			source : '#profile .back',
		 	target : '#container',
		 	id : 'contact',
		 	markup : _markup(),
		 	events : {
			 	afterload : function(){
				 	console.log('open');
			 	},
			 	afterclose : function(){
				 	contact = false;
				 	console.log('open');
				 	$('#profile .photo').removeClass('flip');
			 	}
		 	}
		});
		 	
		function _markup(){
			return {
				primary : `<h1>Hunter Williams</h1><h2>designer • developer</h2>
				<p>Lorem ipsum</p>
				<a class="linkedin" href="https://www.linkedin.com/in/bhunterwilliams" target="_blank"><img width="125px" src="assets/img/linkedin/logo@1x.png" alt="linked in profile hunter williams" /></a>`,
				secondary : `<form action="#" method="post"><div>
				<p><label for="name">Name</label> 
				<input type="text" id="name" placeholder="Name" maxlength="100">
				</p>
				<p><label for="email">Email</label> 
				<input type="email" id="email" placeholder="Email address" maxlength="100">
				</p>
				<p><label for="comment">Comment</label> 
				<textarea id="comment" rows="8" columns="5" placeholder="Comment"></textarea>
				</p></div>
				<input id="submit" type="submit" value="Send"></form>`
			}
		}
	
	
	}
	
	let profile_events = {
		flip : function(el) {
			$(el).find('.photo').not('.hide').addClass('flip');
		},
		unflip : function(el) {
			
			if(contact === false)
			$(el).find('.photo').removeClass('flip');
		}
	};
	
	$('#profile .wrapper').on({
		focusin : function(){
			
			profile_events.flip(this);
			
				if( $(this).find('.photo').hasClass('hide') === true) {
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
		
		let images = {
			timers : {
				loop : 0,
				fade : 0,
				reset : 0
				},
			items : ['dexter@1x.jpg', 'groomsmen@1x.jpg', 'firstdance@1x.jpg', 'commodore@1x.jpg', 'redskins@1x.jpg'],
			mode : 'preload',
			blur : true,
			storage : {
				picked : [],
				pool : [],
				moveBetween : function(index, source, target){
					let random_value = source.splice(index, 1);
					return target.unshift(random_value[0]);
				},
				reset : function(){
					//move picked items to pool;empty picked
					for(pick in this.picked){
						this.pool.push(this.picked[pick]);
					}
					this.picked = [];
				}
			},
			settings : {
				path : 'assets/img/background/',
				delay : 12000,
				transition : 3000,
				count : 0,
				max : 5
			},
			helpers : {
				updateBackground : function(src, blur){
					
					let classes = (blur === false) ? 'loaded focus' : 'loaded';
					
					$('#background').css('background-image' , 'url(' + src + ')').removeClass().addClass(classes);
					
					$('#profile .preload').remove();
				},
				randomIntBetween : function (min, max){
					return Math.floor( Math.random() * (max - min) + min );
				}
			},
			loopAction : function() {
			
				let thisObj = this;
				
				switch(thisObj.mode){
					case 'preload' :
						// pull random from images, push to storage array (picked) 
						let random = this.helpers.randomIntBetween(0, thisObj.items.length);
						let picked = this.storage.moveBetween(random, thisObj.items, thisObj.storage.picked) ;
					
						if(thisObj.items.length == 0){
							thisObj.mode = 'load';
						}
						// preload to temporary location
						let preload = `<img class="preload" src="${thisObj.settings.path}${thisObj.storage.picked[0]}" alt="" />`;
						// when loaded; apply src to background
						$(preload).appendTo('#profile').bind('load', function(){
							let src = $(this).attr('src');
							thisObj.helpers.updateBackground(src, thisObj.blur);
						});
					
					break;
					
					case 'load' :
						// all images already  preloaded
						if(thisObj.storage.pool == 0){
							thisObj.settings.count++
							thisObj.storage.reset();
						}
					
						let random2 = thisObj.helpers.randomIntBetween(0, thisObj.storage.pool.length);
						let picked2 = thisObj.storage.moveBetween(random2, thisObj.storage.pool, thisObj.storage.picked);
					
						let src = thisObj.settings.path + thisObj.storage.picked[0];
						thisObj.helpers.updateBackground(src, thisObj.blur);
					
					break;
				}
				
				// remove fading transition; leave for last image
				if(thisObj.settings.count == thisObj.settings.max) {
					clearInterval(thisObj.timers.loop);
				} else {
					
					thisObj.timers.fade = window.setTimeout(function(){
						$('#background').removeClass('loaded');
						
					}, thisObj.settings.delay - thisObj.settings.transition);
					
				}
			}
		};
		
		(function timedLoop() {
			
			images.loopAction();
			
			images.timers.loop = window.setInterval(function(){
				images.loopAction();
			}, images.settings.delay);
				
		})();
		
		return images;
		
	})() //backgroundImages;
	
	function _resetLoop(){
		
		//clear running timers
		clearInterval(backgroundImages.timers.loop);
		clearTimeout(backgroundImages.timers.fade);
		clearTimeout(backgroundImages.timers.reset);	
		//reset count
		backgroundImages.settings.count = 0;
		//fade current image	
		$('#background').removeClass('loaded');
		//reset loops	
		backgroundImages.timers.reset = window.setTimeout(function(){
				
			backgroundImages.loopAction();
				
			backgroundImages.timers.loop = window.setInterval(function(){
				backgroundImages.loopAction();
			}, backgroundImages.settings.delay);

		},backgroundImages.settings.transition);
	}
	
	
})()// profileEffects