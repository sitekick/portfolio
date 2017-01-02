/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-flexbox-preserve3d-mq !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,s,a;for(var l in y)if(y.hasOwnProperty(l)){if(e=[],t=y[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),C.push((o?"":"no-")+a.join("-"))}}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):x?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(){var e=t.body;return e||(e=i(x?"svg":"body"),e.fake=!0),e}function a(e,n,r,o){var a,l,u,f,d="modernizr",p=i("div"),c=s();if(parseInt(r,10))for(;r--;)u=i("div"),u.id=o?o[r]:d+(r+1),p.appendChild(u);return a=i("style"),a.type="text/css",a.id="s"+d,(c.fake?c:p).appendChild(a),c.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),p.id=d,c.fake&&(c.style.background="",c.style.overflow="hidden",f=w.style.overflow,w.style.overflow="hidden",w.appendChild(c)),l=n(p,e),c.fake?(c.parentNode.removeChild(c),w.style.overflow=f,w.offsetHeight):p.parentNode.removeChild(p),!!l}function l(e,t){return!!~(""+e).indexOf(t)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function f(e,t){return function(){return e.apply(t,arguments)}}function d(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?f(o,n||t):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+p(t[o])+":"+r+")");return i=i.join(" or "),a("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function m(e,t,o,s){function a(){d&&(delete k.style,delete k.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var f=c(e,o);if(!r(f,"undefined"))return f}for(var d,p,m,h,v,y=["modernizr","tspan","samp"];!k.style&&y.length;)d=!0,k.modElem=i(y.shift()),k.style=k.modElem.style;for(m=e.length,p=0;m>p;p++)if(h=e[p],v=k.style[h],l(h,"-")&&(h=u(h)),k.style[h]!==n){if(s||r(o,"undefined"))return a(),"pfx"==t?h:!0;try{k.style[h]=o}catch(g){}if(k.style[h]!=v)return a(),"pfx"==t?h:!0}return a(),!1}function h(e,t,n,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+b.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?m(a,t,o,i):(a=(e+" "+T.join(s+" ")+s).split(" "),d(a,t,n))}function v(e,t,r){return h(e,n,n,t,r)}var y=[],g={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){y.push({name:e,fn:t,options:n})},addAsyncTest:function(e){y.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=g,Modernizr=new Modernizr;var C=[],w=t.documentElement,x="svg"===w.nodeName.toLowerCase();Modernizr.addTest("preserve3d",function(){var e=i("a"),t=i("a");e.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",t.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",e.appendChild(t),w.appendChild(e);var n=t.getBoundingClientRect();return w.removeChild(e),n.width&&n.width<4});var S=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return a("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();g.mq=S;var _="Moz O ms Webkit",b=g._config.usePrefixes?_.split(" "):[];g._cssomPrefixes=b;var T=g._config.usePrefixes?_.toLowerCase().split(" "):[];g._domPrefixes=T;var z={elem:i("modernizr")};Modernizr._q.push(function(){delete z.elem});var k={style:z.elem.style};Modernizr._q.unshift(function(){delete k.style}),g.testAllProps=h,g.testAllProps=v,Modernizr.addTest("flexbox",v("flexBasis","1px",!0)),o(),delete g.addTest,delete g.addAsyncTest;for(var E=0;E<Modernizr._q.length;E++)Modernizr._q[E]();e.Modernizr=Modernizr}(window,document);
var growPanel = (function () {

	var module = function(settings) {
		
		let markup = `<div id="${settings.id}" class="growpanel">
				<div class="secondary"><div class="close" tabindex="0"><img tabindex="-1" src="assets/img/button.close.png" alt="close button"/></div>${settings.markup.secondary}</div>
				<div class="primary">${settings.markup.primary}</div>
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
function getParameterByName(name, url) {
    /* http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript */
    
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var getViewport = (function() {
	
	var viewports = {
		queries : {
			mobile : ['(max-width: 500px)','(max-width: 768px)'],
			desktop : ['(max-width: 1024px)','(max-width: 1324px)','(min-width: 1324px)']
		}
	}
	
	Object.defineProperty(viewports, 'viewport', {
		get: function() {
			mode : 
			for(query in this.queries){
				for(let i = 0; i < this.queries[query].length; i++){
					let mq = this.queries[query][i];
					if(Modernizr.mq(mq)){
						return query;
						break mode;
					}
				}
			}
		},
		enumerable: false
		});
	
	return (function() {
		return viewports.viewport;
	});
	
})();

function sigmaCalculation(start, end, whatToSum){
    var sum = 0;

    for (var i = start; i <= end; i++){
        sum += whatToSum(i);
    };

    return sum;
}


var keyFocus = function (id, child, clickEvent) {	
	
	/* Handles event listeners on tab focused groups for WAI tabbing/keyboard compliance
	* A) Parent element containing requires tabindex="0" attribute
	* B) Focusable children require tabindex="-1" attribute
	* Option: clickEvent false to prevent 'enter' keydown event listeners 
	*/ 
	
	var el = document.querySelector(id);
	var kf_group = new FocusGroup(el);		
	
	function FocusGroup(el) {	
		
		var thisObj = this;
		
		this.el = el;
		this.child = child || '*';
		this.focusable = el.querySelectorAll(this.child+'[tabindex="-1"]');
		this.focus_pos = 0;
		this.focus_end = this.focusable.length - 1;
		this.clickEvent = (clickEvent === false) ? false : true;
		this.tabbed = false;
		
		this.addListeners = function(){
			
			/* parent element */
			this.el.addEventListener('focus', elementHover = function(e) {
				
				return thisObj.elementFocus(e, this);
			
			}, true);
			
			/* children */
			for(var i = 0; i <= this.focus_end; i++){
				
				this.focusable[i].addEventListener('keydown', childrenHover = function(e) {
					
					return thisObj.childFocus(e, this);
				
				}, false);
	
			};
		
		};
		
		this.addListeners();
	};
		
	FocusGroup.prototype.elementFocus = function(e, el) {
			//when parent element focused via tab (only); switch to first focusable child
			
			let focusable = this.focusable;
			let focus_pos = this.focus_pos;
			
			el.addEventListener('keyup', test = function(e){
				
				let keystroke = (e.key) ? e.key : e.keyCode.toString();
				
				if(keystroke == 'Tab' || keystroke == '9'){
					let first = focusable[focus_pos];
					first.focus();
				}
					
			}, false);
			
	}
		
	FocusGroup.prototype.childFocus = function (e, el) {
  
		if (e.defaultPrevented) {
			return; // Should do nothing if the default action has been cancelled
		}
		
		var handled = false;
		if (e.key !== undefined) {
		// Handle the event with KeyboardEvent.key and set handled true.
			switch(e.key){
				case 'ArrowRight' :
				case 'Right' :
				case 'ArrowDown' :
				case 'Down' :
					(this.focus_pos < this.focus_end ) ? this.focus_pos++ : this.focus_pos = 0;
					handled = true;
				break;
				case 'ArrowLeft' : 
				case 'Left' : 
				case 'ArrowUp' :
				case 'Up' :
					(this.focus_pos > 0 ) ? this.focus_pos-- : this.focus_pos = this.focus_end;
					handled = true;
				break;
				case ' ' :
				case 'Spacebar' :
					//space will scroll element; prevent:
					e.preventDefault();
				case 'Enter' :
					if(this.clickEvent === true){
						el.click();
						handled = true;
					}
				break;
			}
  		} else if (e.keyCode !== undefined) {
  		// Handle the event with KeyboardEvent.keyCode and set handled true.
  			switch(e.keyCode){
				case '39' :
				case '40' :
					(this.focus_pos < this.focus_end ) ? this.focus_pos++ : this.focus_pos = 0;
					handled = true;
				break;
				case '37' : 
				case '38' :
					(this.focus_pos > 0 ) ? this.focus_pos-- : this.focus_pos = this.focus_end;
					handled = true;
				break;
				case '32' :
					//space will scroll element; prevent:
					e.preventDefault();
				case '13' :
					if(this.clickEvent === true){
						el.click();
						handled = true;
					}
				break;
			}
  		}

  		if (handled) {
	  		let next = this.focusable[this.focus_pos];
	  		next.focus();
	  		// Suppress "double action" if event handled
	  		e.preventDefault();
  		}
	};
	
	FocusGroup.prototype.resetListeners = function(){
		
		
		this.el.removeEventListener('focus', elementHover, true);
		
		for(var i = 0; i < this.focusable.length; i++){
		 	this.focusable[i].removeEventListener('keydown', childrenHover, true);
		}
		
		this.focus_pos = 0;
		this.focusable = el.querySelectorAll(this.child+'[tabindex="-1"]');
		
		this.addListeners();
		
	}
	
	return kf_group;
};
var resizeQuery = function () {
	
		/* Version 2
			
			USAGE:
				
			var events = {
				'(max-width: 500px)' : function(){
					//do stuff when screen is first resized to a size smaller than 500px;
				},
				'(min-width: 800px)' : {}, // register the query only for comparison; may be needed for intended 'any' change usage
				'(min-width: 500px)' : function(){
					//do stuff when screen is first resized to a size larger than 500px;
				},
				'(any)' : function(){
					// Optional: do stuff when screen is first resized to a size different than the current media query bounds; 
					NOTE: Will only fire for changes between media queries described in the events object;
				}
			};
			
			var rq = resizeQuery(events);
			
			(object) events : contains objects keyed on a media query with a callback as value to invoke when a screen has been resized to match
			NOTE REGARDING MULTIPLE MATCHING QUERIES:
			The first matching query will be triggered; so order the queries appropriately when multiple queries can match i.e. 
			• min-width: 800px; min-width: 500px; NOT min-width: 500px; min-width: 800px;
			• max-width: 600px; max-width: 700px; NOT max-width: 700px; max-width: 600px; 
			
			var rq = resizeQuery(events, true);
			(boolean) init : check for a matching query on initialization of the script(true) or wait for resize to occur (falsey) 
				
		*/
		
		var mQueries,
			currentMQ;
		
		var monitorMQ = function (eventsobj, init) {
			
			mQueries = _defineQueries(eventsobj);
			currentMQ = _idQuery();
			
			//stores active media query to compare against when resizing
			var tmpMQ = currentMQ;
			//for initial size flag
			if(init === true){
				_fireCallback(eventsobj,currentMQ);
			}
			
			window.onresize = function() {
				var newMQ = _idQuery();
			
				if(newMQ != tmpMQ){
					_fireCallback(eventsobj,newMQ);
					
					if(eventsobj['(any)']){
						_fireCallback(eventsobj,'(any)');
					}
					
					tmpMQ = newMQ;
				};
			};

		} //monitorMQ;
		
		function _defineQueries(events) {
			// create an array containing queries present in the events object; remove 'any' key if present
			function removeAny(str) {
				return str != '(any)';
			}
			
			var queries = Object.keys(events).filter(removeAny) || [];
			
			return queries;
		}

		function _idQuery() {
			// return active media query; if found
			
			var active = currentMQ || '';
			
			for (var i=0 ;i < mQueries.length; i++) {
				
				if(Modernizr.mq(mQueries[i]) === true){
					active = mQueries[i];
					break;
				}
				
			}
			
			return active;
		}
		
		function _fireCallback(events,index) {

			return typeof(events[index]) === 'function' && events[index]();
				
		}
		
		return monitorMQ; 
	
}();
(function profileEffects() {
	
	let contact = false;
	
	$('#profile a.me').on('click', function(){
		
		$('#profile .photo').toggleClass('hide');
		
		$(this).toggleClass('active');
		
		if( $('#profile .photo').hasClass('hide') ){
			//inactive
			$('#profile').css('z-index', 'auto');
		} else {
			//active
			$('#profile').css('z-index', 100);
		}
		
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
				 		let captchaContainer;
						let loadCaptcha = (function() {
						  captchaContainer = grecaptcha.render('recaptcha2', {'sitekey' : '6LeOvAsUAAAAAAZdqwnqALUgWk_FyAlsPiirxyNy'});
						  var kf = keyFocus('#contact .close');
						})();
			 	},
			 	afterclose : function(){
				 	contact = false;
				 	$('#profile .photo').removeClass('flip');
				 			var kf = undefined;
			 	}
		 	}
		});
		 	
		function _markup(){
			return {
				primary : `<h1>Hunter Williams</h1><h2>designer • developer</h2>
				<p>With the ability to create both artistically and technically, I am seeking to apply my sixteen years of freelance experience to a permanent web/front-end developer position. Contract work will be considered.</p>
				<a class="linkedin" href="https://www.linkedin.com/in/bhunterwilliams" target="_blank"><img width="125px" src="assets/img/linkedin/logo@1x.png" alt="linked in profile hunter williams" /></a>`,
				secondary : `<form action="index.php?contact=true" method="post"><div>
				<p><label for="name">Name</label> 
				<input type="text" name="name" id="name" placeholder="Name" maxlength="100">
				</p>
				<p><label for="email">Email</label> 
				<input type="email" name="email" id="email" placeholder="Email address" maxlength="100">
				</p>
				<p><label for="comment">Comment</label> 
				<textarea id="comment" name="comment" rows="8" columns="5" placeholder="Comment" maxlength="300"></textarea>
				<div id="recaptcha2" class="g-recaptcha"></div>
				</div>
				<input id="submit" type="submit" value="Send" /></form>`
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
	
	
})()// profileEffects
function showProject(tile_class, tag, data){
	
	let viewport = getViewport();
	
	let parent = $(tile_class, '#tiles ').parent();
	
	let panel = growPanel({
			source : parent,
		 	target : '#container',
		 	id : 'project',
		 	markup : {
			 	primary : `<h1>${data.name}</h1><p>${data.description}</p>
			 				${__formatTabTags(data,tag)}`,
			 	secondary : `<div id="slider" class="content ${viewport}">${__formatImages(data,tag)}</div>`
		 	},
		 	events : {
			 	afterload : function(){
				 	_projectEvents(tile_class, tag, viewport);
			 	},
			 	afterclose : function(){
				 	$(tile_class, '#tiles ').removeClass('active').removeClass('flip-y');
			 	}
		 	}
		});
	
	function __formatTabTags(){
		
		let foci = data.foci;
		let content = '';
		let markup = '<div class="tabs"><ul tabindex="0">';
		let counter = 0;
		
		for(focus in foci){	
			let activate = ( focus == tag) ? true : false;
			let a_classes = '';
			if(activate)
				a_classes += 'active ';
			if(foci[focus].favorite)
				a_classes += 'fav';
			markup += `<li data-index="${counter}" class="${focus}"><a href="#" tabindex="-1" class="tab${(activate) ? ' active' : ''}">${foci[focus].tag}</a></li>`;
			content += `<div class="copy ${focus} ${a_classes}">${foci[focus].copy}</div>`;
			counter++;
		}
		
		markup += '</ul>';
		markup += '<div class="content">';
		markup += content
		markup += '</div></div>';
		
		return markup;
}

	function __formatImages(){
		
		let markup = '';
		
		let foci = data.foci;
		
		for(focus in foci){	
			
			markup += `<div class="item ${foci[focus].highlight.type} ${focus}">`
			switch(foci[focus].highlight.type){
				case 'image' :
					markup += `<img src="assets/img/${focus}/${foci[focus].highlight.content}" alt=""/>`;
				break;
				case 'html' :
					markup += `<div class="wrapper">${foci[focus].highlight.content}</div>`;
				break;
			};
			
			markup += `</div>`
		}
		return markup;
	}
	
	

} // showProject

function _projectEvents(tile_class, active_tag, mode) {	
	
	/* initialize slider */
	let slider = sliderModule({
		element : '#slider',
		slide : '.item',
		index : $('.tabs .' + active_tag).attr('data-index'),
		nav : '.tabs ul',		
		mode : mode
	});
	
	/* a11y */
	let ally = {
		'tags' : keyFocus('#project .tabs'),
		'close' : keyFocus('#project .close')
	};
	
	/* tabs nav */
	
	$('#project .tabs a.tab').on('click', function() {
		// menu 
		$('#project .tabs a.active').removeClass('active');
		$(this).addClass('active');
		// content
		$('#project .copy.active').removeClass('active');
		let content = '.' + $(this).parents('li').attr('class');
		$(content, '#project .tabs .content').addClass('active');
		
	});
	
	
	/* iframe */
	let src = $('#project iframe').attr('data-src');
	$('#project iframe').attr('src', src);

		
}// _projectEvents
	


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
var tileModule = (function() {
	
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
			'(max-width: 768px) and (orientation: landscape)' : function() { 
					viewport = 'screen-medium-landscape';
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
			'(any)' : function() {
				layoutTiles();
			}
		}
		 
	var rq = resizeQuery(events, true);	
	
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
				all : {
					slug : ['fav','logo-design','web-design','html-js'],
					name : ['fav','logo design','web design','html/js']
					},
				count : 0 //counter for filtered rows
			},
			get cap() {
				let val;  //number of tiles per row
				switch(viewport){
					case 'screen-small' :
						val = 2;
					break;
					case 'screen-medium' : 
					case 'screen-large' : 
						val = 3;
					break;
					case 'screen-medium-landscape' :
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
			},
			preload : {
				files : [],
				flip_x : function(id, src){
					
					let tile = '#tiles .tile-' + id;
					/* add background */
					$(tile).find('.front').css('background-image', 'url(assets/img/' +  src + ')');
					/* remove preloading class from parent li */
					$(tile).parent('li').removeClass('preloading');
					/* flip the tile */
					$(tile).addClass('flip-x');
				}
			}
		}
		
		$('#container').append( _tileMarkup() );
		
		/* if resized while project overlay displayed */
		if( $('#container').hasClass('project') || $('#container').hasClass('contact') )
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
				_addEvents();
			},vars.timerCalc(timer.time, timer.lengthen));
	
			/* animate active tiles */
			for(let i = 1; i <= vars.cap; i++){
				setTimeout(function() {
					/* preload */
					if(vars.preload.files[i].loaded === true){
						vars.preload.flip_x(vars.preload.files[i].id, vars.preload.files[i].src);
					} else {
						/* created setter to fire when value is true */
						Object.defineProperty(vars.preload.files[i], "loaded", { 
							set: function () { 
								 vars.preload.flip_x(this.id, this.src)
								} 
						});
						
						
					}
					
				},timer.time);
				timer.time += timer.lengthen;
			};
			
			
			function __manipulateTile(tileid,tilesrc){
				let tile = '#tiles .tile-' + tileid;
				/* add background */
				$(tile).find('.front').css('background-image', 'url(assets/img/' +  tilesrc + ')');
				/* remove preloading class from parent li */
				$(tile).parent('li').removeClass('preloading');
				/* flip the tile */
				$(tile).addClass('flip-x');
			}
			

		}
		
		function _addEvents() {
	
			/* Tiles */
			
			/* place events on bounding element to prevent repeated */
			/* class toggling during animation of hovered element */
			
			let tile_events = {
				flip : function(el) {
					if( $(el).hasClass('preloading') ) return;
					
					$('.tile', el).removeClass('transform0').addClass('flip-y');
				},
				unflip : function(el) {
					let active = $('.tile', el).hasClass('active');
					
					if(active === false){
			    		$('.tile', el).removeClass('flip-y');
					}
				}
			};
			
			function tileEvents(){
				
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
			}
			
			tileEvents();
			
			/* Tags */
			
			$('#tiles .tags button').off().on('click', function() {
				let focus_clicked = $(this).attr('class');
				let tile = $(this).parents('.tile');
				tile.addClass('active');
				let tile_id = tile.attr('data-project');
				let tile_classes = tile.attr('class');
				let tile_class = __findTileClass(tile_classes, true)
						
				showProject(tile_class, focus_clicked, vars.tiles[tile_id] );
			});
			
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
				
				// disable hover effect until cycle complete 	
				$('#tiles li').off();
				
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
						//tmp
						//continue;
						
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
							/* set image */
							//console.log(vars.preload.files[nexts[i]].src);
							let img_src = 'url(assets/img/' + vars.preload.files[nexts[i]].src + ')';
							$(tile_next).find('.front').css('background-image', img_src);
							/* show */
							$(tile_next).addClass('flip-x').parent('li').attr('tabindex', '-1').addClass('show');
						}
						
						/* adjust last class */
							if(currents[i] == currents[(vars.cap-1)])
								$(tile_current).parent('li').removeClass('last');
								
							if(nexts[i] == nexts[(vars.cap-1)])
								$(tile_next).parent('li').addClass('last');
						
						/* remove temporary content */
						$('.back', tile_current).removeClass('flipping center').css('background-image', 'none');
					}
					
					/* re-enable button controls */
					disabled = false;
					/* reset key focus for tiles */
					a11y.tiles.resetListeners();
					/* re-enable hover effects */
					tileEvents();
				
					
				},vars.timerCalc(timer.time, timer.lengthen));
				
				/* manipulate the CURRENT tiles to show flip effect */
				for(let i=0; i < vars.cap; i++){
					
					/* buttons */
					let button = $('#button-' + next_start);
					$(button).addClass('active');
					
					/* tile faces */
					let current_tile = $('#tiles .tile-' + current_start);
					let upcoming_tile = $('#tiles .tile-' + next_start);
					
					//let img_src = $('.front', upcoming_tile).css('background-image');
					let img_src = 'url(assets/img/' + vars.preload.files[next_start].src + ')';
					
					let img_class = ( $('.front', upcoming_tile).hasClass('center') ) ? 'center': ''; 
					
					$('.back', current_tile).css('background-image', img_src).addClass(img_class);
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
			markup += `<ul id="tiles" tabindex="0" class="${vars.filter.active} cols-${vars.cap}">`;
			
			tilesloop: 
			for(let i = 0; i < vars.tiles.length; i++){
				let image_path;
				let image_class;
				let tile_foci = vars.tiles[i].foci;
				let idelta = i - vars.filter.count; //track index when rows are filtered
				
				if(vars.filter.active == 'fav'){
					
					var favorites = {};
					
					filter1:
					for(tile_focus in tile_foci){
						
						/* determine image path for tile using first suitable instance(having static image) */
						if(image_path == undefined && tile_foci[tile_focus].highlight.type == 'image'){
							image_path = `${tile_focus}/${tile_foci[tile_focus].highlight.content}`;
							image_class = (tile_focus == 'logo-design') ? 'center' : 'fill';
						}
						
						if (tile_foci[tile_focus].favorite === true) {
							favorites[tile_focus] = tile_foci[tile_focus];
						} else {
							continue filter1;
						}					
						
					}
						// if no favorites for project then skip
						if(Object.keys(favorites).length != 0) {
							tile_foci = favorites;
						} else {
							vars.filter.count++;
							continue tilesloop; 
						}
					
				} else {
				
					let found = false;
						
					/* filter out non-matching tiles */
					filter2:
					for(tile_focus in tile_foci){
						
						if (tile_focus == vars.filter.active) {
							found = true;
							break filter2;
						}
					}
						
					if(found === false) {
						vars.filter.count++;
						continue tilesloop; 
					}
				
					/* determine image path for tile */
					
					if(tile_foci[vars.filter.active].highlight.type == 'html'){
						//for html content; use the static image of the alternate focus indicated
						let alternate = tile_foci[vars.filter.active].highlight.static;
						image_path = `${alternate}/${tile_foci[alternate].highlight.content}`;
						image_class = (alternate == 'logo-design') ? 'center' : 'fill';
						} else {
						image_path = `${vars.filter.active}/${tile_foci[vars.filter.active].highlight.content}`;
						image_class = (vars.filter.active == 'logo-design') ? 'center' : 'fill';
						}
				};	
			/* preload tile content */
			__preloadTile(idelta + 1, image_path);
			/* markup for matching tiles */
			markup += `<li ${(idelta < vars.cap) ? 'tabindex="-1"' : ''} class="${(idelta < vars.cap) ? ((idelta+1) == vars.cap) ? 'show preloading last' : 'show preloading' : ''} ">
				 <div data-project="${i}" class="tile tile-${(idelta + 1)}">  
						<div class="side front ${image_class}"></div>
						<div class="side back">
							<div class="content">
									<h1>${vars.tiles[i].name}</h1>
									<p>${__formatDescription(vars.tiles[i].description)}</p>
									${__formatTileTags(tile_foci)} 
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
							
				for(let i=0; i< vars.filter.all.slug.length; i++){
					let name = vars.filter.all.name[i];
					let slug = vars.filter.all.slug[i];
					markup += `<li><a tabindex="-1" id="${slug}" title="${ (slug == 'fav') ? 'show favorites' : 'show projects that include ' + name }" class="button ${(vars.filter.active == slug) ? 'active' : ''}">${(slug == 'fav') ? '<span>\u2605</span>' : name}</a></li>`
					if(viewmode == 'desktop' && i == 1)
						markup += `<li>${__tileControls(vars.buttons, viewmode)}</li>`;
					}
							
			markup += `</div></div></div>`;
		
		return markup;
		
		function __preloadTile(id, src){
		
			let obj = {
				"id" : id,
				"src" : src,
				"loaded" : false,
			}
			
			vars.preload.files[id] = obj;
			
			let tileImg = new Image();
			
			tileImg = new Image();
			tileImg.onload = function () { vars.preload.files[id].loaded = true};
			tileImg.src = 'assets/img/' + src;
		}
		
		function __formatDescription(desc){
		
			if(desc == '')
				return;
			
			let period = desc.indexOf('.') + 1;
			
			return desc.substring(0, period);
		}
		
		function __formatTileTags(tags){
	
			let markup = '<ul class="tags">';
			
			for(tag in tags){
				markup += `<li><button tabindex="-1" class="${tag}">${tags[tag].tag}</button></li>`;
			}
	
			markup += '</ul>';
	
			return markup;
		}
		
		
		function __tileControls(buttons, mode){
			
			
			let markup = `<div class="controls ${mode}"><h1>Portfolio</h1><ul>`;
			
			for(button in buttons){
				markup += `<li><a tabindex="-1" id="button-${buttons[button].tile}" class="button ${(buttons[button].state == 'show') ? 'active' : ''} "><span>${buttons[button].tile}</span></a></li>`;
			}
			
			markup += '</ul></div>';
			
			return markup;
		}
		
		}
		
	}// _layoutTiles()
	
	return module;
	
})();
$(function () {
	
	//var projects;
	
	$.getJSON('assets/data/projects.json', function (data) {
		
		let contact = getParameterByName('contact');
		/* if the contact form was submitted; bypass tiles while validating */
		if(  contact == null ) 
			tileModule(data);
		
	});
	
	/* Modernizer checks for preserve 3D (required for flip effect); fails flexbox for non supporting */
	
	if(Modernizr.preserve3d && Modernizr.flexbox){
		$('html').removeClass('no-js').addClass('js').addClass('flexbox');
	} else {
		$('html').removeClass('no-js').addClass('js').addClass('no-flexbox');
	}
	
	//$('html').removeClass('no-js').addClass('js').addClass('no-flexbox')

});


