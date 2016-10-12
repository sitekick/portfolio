/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-flexbox-mq-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),g.push((o?"":"no-")+a.join("-"))}}function s(e){var n=S.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?S.className.baseVal=n:S.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=i(x?"svg":"body"),e.fake=!0),e}function l(e,t,r,o){var s,l,f,u,d="modernizr",c=i("div"),p=a();if(parseInt(r,10))for(;r--;)f=i("div"),f.id=o?o[r]:d+(r+1),c.appendChild(f);return s=i("style"),s.type="text/css",s.id="s"+d,(p.fake?p:c).appendChild(s),p.appendChild(c),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),c.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",u=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),l=t(c,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=u,S.offsetHeight):c.parentNode.removeChild(c),!!l}function f(e,n){return!!~(""+e).indexOf(n)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function d(e,n){return function(){return e.apply(n,arguments)}}function c(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?d(o,t||n):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+p(n[o])+":"+r+")");return s=s.join(" or "),l("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,o,s){function a(){d&&(delete N.style,delete N.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var l=m(e,o);if(!r(l,"undefined"))return l}for(var d,c,p,h,v,y=["modernizr","tspan","samp"];!N.style&&y.length;)d=!0,N.modElem=i(y.shift()),N.style=N.modElem.style;for(p=e.length,c=0;p>c;c++)if(h=e[c],v=N.style[h],f(h,"-")&&(h=u(h)),N.style[h]!==t){if(s||r(o,"undefined"))return a(),"pfx"==n?h:!0;try{N.style[h]=o}catch(g){}if(N.style[h]!=v)return a(),"pfx"==n?h:!0}return a(),!1}function v(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+z.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?h(a,n,o,s):(a=(e+" "+E.join(i+" ")+i).split(" "),c(a,n,t))}function y(e,n,r){return v(e,t,t,n,r)}var g=[],C=[],w={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var S=n.documentElement,x="svg"===S.nodeName.toLowerCase(),_=function(){var n=e.matchMedia||e.msMatchMedia;return n?function(e){var t=n(e);return t&&t.matches||!1}:function(n){var t=!1;return l("@media "+n+" { #modernizr { position: absolute; } }",function(n){t="absolute"==(e.getComputedStyle?e.getComputedStyle(n,null):n.currentStyle).position}),t}}();w.mq=_;var b="Moz O ms Webkit",z=w._config.usePrefixes?b.split(" "):[];w._cssomPrefixes=z;var E=w._config.usePrefixes?b.toLowerCase().split(" "):[];w._domPrefixes=E;var P={elem:i("modernizr")};Modernizr._q.push(function(){delete P.elem});var N={style:P.elem.style};Modernizr._q.unshift(function(){delete N.style}),w.testAllProps=v,w.testAllProps=y,Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),o(),s(g),delete w.addTest,delete w.addAsyncTest;for(var T=0;T<Modernizr._q.length;T++)Modernizr._q[T]();e.Modernizr=Modernizr}(window,document);
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
			desktop : ['(max-width: 1024px)','(min-width: 1024px)']
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
function showProject(tile_class, tag, data){
	
	let viewport = getViewport();
	
	let parent = $(tile_class, '#tiles ').parent();
	
	/* the selected tile */
	let parent_specs = {
		offset : parent.offset(),
		width : parent.width(),
		height : parent.height()
	}
	/* the project pane */
	let container_specs = {
		offset : $('#container').offset(),
		width : $('#container').width(),
		get height(){
			return Math.round( $(window).height() - (this.offset.top * 2) );
		}
				
	}
	
	var markup = `
	<div id="project">
		<div class="imagery">
	 		<div class="close"><img src="assets/img/button.close.png" alt="close button"/></div>
	 		<div id="slider" class="content ${viewport}">${_formatImages(data,tag)}</div>
	 	</div>
	 	<div class="info">
	 		<h1>${data.name}</h1><p>${data.description}</p>
	 		${_formatTabTags(data,tag)}
		</div>
	</div>`;
	
	$(markup).prependTo('#container')
		.offset({
			top: parent_specs.offset.top, 
			left: parent_specs.offset.left
			})
			.width(parent_specs.width)
			.height(parent_specs.height);
	
	$('#project').animate({
			top : Math.round(container_specs.offset.top),
			left : Math.round(container_specs.offset.left),
			width : container_specs.width,
			height :container_specs.height,
			opacity : 1
		}, 
		150,
		function () {
			$(this).find('.imagery').addClass('loaded');
			$('#tiles').hide();
			_projectEvents(tile_class, tag, parent_specs, viewport);
		});
}

function _projectEvents(tile_class, active_tag, parent_specs, mode) {
	
	var resizeid;
	/* initialize slider */
	
	sliderModule({
		element : '#slider',
		slide : '.item',
		index : Number($('.tabs .' + active_tag).attr('data-index')),
		nav : '.tabs ul',		
		mode : mode
		});

	let control = document.querySelector('.close');
	
	control.addEventListener('click', function(e){
		
		$('#tiles').show();
		
		$('#project').animate({
			left : parent_specs.offset.left,
			top : parent_specs.offset.top,
			width : parent_specs.width,
			height : parent_specs.height,
			opacity : .3
		}, 
		200,
		function () {
			$(this).remove();
			$(tile_class, '#tiles ').removeClass('active').toggleClass('flip-x');
		});
		
	}, false);
	
	/* tabs nav */
	
	let tags = document.querySelectorAll('.tabs li');
	
	for(let i=0; i < tags.length; i++){
		tags[i].addEventListener('click', function(e){
			/* menu */
			$(tags).find('a').removeClass('active');
			$(this).find('a').addClass('active');
			/* content */
			$('.copy.active').removeClass('active');
			let content = '.' + $(this).attr('class');
			$(content, '.tabs .content').addClass('active');
		})
	}
	
	/* resize */
	
	window.addEventListener('resize', resizeThrottle, false);
	
	function resizeThrottle() {
		if ( !resizeid ) {
		 	resizeid = setTimeout(function() {
		 		resizeid = null;
		 		_resizeProject(active_tag);
       		}, 100);
    	}
	}
	
	
}// _projectEvents
	
function _resizeProject(active_tag){
	
	let container_specs = {
		offset : $('#container').offset(),
		width : $('#container').width(),
		get height(){
			return  $(window).height() - (this.offset.top * 2) ;
		} 
	}
	
	$('#project').css({
			top : Math.round(container_specs.offset.top),
			left : Math.round(container_specs.offset.left),
			width : container_specs.width,
			height : Math.round(container_specs.height)
		}); 
}	


function _formatTabTags(data, active){
	
	let foci = data.foci;
	let content = '';
	let markup = '<div class="tabs"><ul>';

	for(let i = 0; i < foci.length; i++){
		let activate = ( foci[i].slug == active) ? true : false;
		let a_classes = '';
		if(activate)
			a_classes += 'active ';
		if(foci[i].favorite)
			a_classes += 'fav';
		markup += `<li data-index="${i}" class="${foci[i].slug}"><a href="#" class="${a_classes}">${foci[i].tag}</a></li>`;
		content += `<div class="copy ${foci[i].slug} ${(activate) ? 'active' : ''}">${foci[i].copy}</div>`;
	}
	
	markup += '</ul>';
	markup += '<div class="content">';
	markup += content
	markup += '</div></div>';
	
	return markup;
}


function _formatImages(data, tag_active){
	
	let markup = '';
	
	let highlights = data.foci
	
	for(let i = 0; i < highlights.length; i++){	
	
		markup += `<div class="item ${highlights[i].highlight.type} ${highlights[i].slug}">`
		switch(highlights[i].highlight.type){
			case 'image' :
			markup += `<img src="assets/img/${highlights[i].slug}/${highlights[i].highlight.content}" alt=""/>`;
			break;
			case 'div' :
			markup += `<div>${highlights[i].highlight.content}</div>`;
			break;
		};
		
		markup += `</div>`
	}
	return markup;
}
var sliderModule = (function () {
	
	var module = function (options) {
	
		var clicked = false;
	
		var settings = {
			el : options.element,
			item : options.slide,
			get name() {
				return `${this.el} ${this.item}`;
			},
			index : options.index,
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
				let pos = $(settings.el).parent().offset().top;
				let adjustment = $(settings.el).parent().height() * settings.index;
								
				$(settings.el).offset({top : (pos - adjustment)});
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
function layoutTiles(data, focus) {
	
	var tiles = data.projects;
	var mode = getViewport();
	//console.log(mode);
	let num = tiles.length;
	let continued = 0;
	var markup = `<ul id="tiles" class="${focus} bground"><div id="mask"></div>`;
	let cap = 4;
	var nav = {
		buttons : [],
	};	
		
		tiles: 
		for(let i = 0; i < num; i++){
			let tile_foci = tiles[i].foci;
			
			mode: 
				switch(focus){
					case 'fav' :
						let not_favs = [];
						
						for(tile_focus in tile_foci){
							if (tile_foci[tile_focus].favorite === false) {
								not_favs.push(Number(tile_focus));
							}
						}
						
						if(not_favs.length == tile_foci.length){
							continued++;
							continue tiles;
						}
							
						
						tile_foci = $.grep(tile_foci, function(n, i) {
							return $.inArray(i, not_favs) ==-1;
						});
						
						
					break mode;
					default : 
						let found = false;
							
						filter:
						/* filter out non-matching tiles */
						for(tile_focus in tile_foci){
							if (tile_foci[tile_focus].slug == focus) {
								found = true;
								break filter;
							}
						}
						if(found === false) {
							continued++;
							continue tiles; 
						}
							
				}//switch
				
			/* markup for matching tiles */
			markup += `<li class="${(cap > 0) ? 'show' : ''}">
					<div data-project="${i+1}" class="tile tile-${(i+1) - continued} flip-y"> 
						<div class="side front">
							<div class="content vcenter">
								<img src="assets/img/${tiles[i].foci[0].slug}/${tiles[i].foci[0].highlight.content}" alt="" />

							</div>	
						</div>
						<div class="side back">
							<div class="content vcenter">
							<h1>${tiles[i].name}</h1>
							<p>${tiles[i].description}</p>
							${_formatTileTags(tile_foci)}
							</div>
						</div>
					</div>
					</li>`;
		
		
		nav.buttons.push({
			tile : (i+1) - continued, 
			state : (cap > 0) ? 'show' : 'hide'
			});
		cap --;
		}
		
	markup += '</ul>';
	$('#container').append(markup);
	$('#tilenav').remove();
	_buildTileNav(nav.buttons);
	
	let time = 100;
	let lengthen = 75;
	let numTiles = num - continued;
	let dur = time + ((numTiles-1)*lengthen);
	let transitionMs = 1500;

	setTimeout(function() {
		$('#mask').remove();
	},(dur + transitionMs));

	for(let i = 1; i <= numTiles; i++){
		setTimeout(function() {
		
		$('#tiles .tile-' + i).removeClass('flip-y');
		},time);
		time += lengthen;
	}
	
	addEvents(tiles);
		
}

function addEvents(data) {
	
	
	setTimeout(function() {
		$('#tiles').removeClass('bground');
		
	}, 100)
	
/*
	let i = 1;
	let classInterval = setInterval( classTimer, 500);
*/
	
	function classTimer(){
		
		$('#tiles').removeClass('bground-' + (i-1));
		$('#tiles').addClass('bground-' + i);
			if(i <= 3){
			i++;
			} else {
			clearInterval(classInterval);
			}
	}
	
	
	var tiles = document.querySelectorAll('#tiles li');
	/* place events on bounding element to prevent repeated */
	/* class toggling during animation of hovered element */
	
	/* Tiles */
	for(let i = 0; i < tiles.length; i++){
		
		tiles[i].addEventListener('mouseover', function(){
    		
    		$(this).find('.tile').toggleClass('flip-x');
    	
		}, false);
		
		tiles[i].addEventListener('mouseout', function(){
    		
    		/* prevent flip of active(clicked) tile */
    		let active = $(this).find('.tile').hasClass('active');
    		
    		if(active === false){
	    		$(this).find('.tile').toggleClass('flip-x');
    		}
			
			
		}, false);
	}

	let tags = document.querySelectorAll('.tile .tags button');
		
		for(let i=0; i < tags.length; i++) {
			tags[i].addEventListener('click', function(e){
				let tag_active = $(this).attr('class');
				let tile = $(this).parents('.tile');
				tile.addClass('active');
				let tile_id = tile.attr('data-project');
				let tile_classes = tile.attr('class');
				let tile_class = _findTileClass(tile_classes, true)
				
				showProject(tile_class, tag_active, data[tile_id-1] );
			}, false);
		}
}

function _formatTileTags(tags){
	
	let markup = '<ul class="tags">';
	
	for(let i = 0; i < tags.length; i++){
		markup += `<li><button class="${tags[i].slug}">${tags[i].tag}</button></li>`;
	}
	
	markup += '</ul>';
	
	return markup;
}


function _findTileClass(haystack, asSelector){
	
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


$(function () {
	
	var projects;
	
	$.getJSON('assets/data/projects.json', function (data) {
		
		projects = data;
		_init();
		
	});
	
	
	function _init() {
		
		var cloned = Object.assign({}, projects);

		$('#main button').on('click', function(){
			$('#tiles').remove();
			$('#main button').removeClass('active');
			let clicked = $(this).attr('id');
			$(this).addClass('active');
			
			_navClick(clicked);
		});
		
		function _navClick(active) {
			layoutTiles(cloned, active);
		};
		
		$('#fav').click();
	}

});


