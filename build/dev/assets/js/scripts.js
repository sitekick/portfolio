/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-flexbox-preserve3d-mq !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,s,a;for(var l in y)if(y.hasOwnProperty(l)){if(e=[],t=y[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),C.push((o?"":"no-")+a.join("-"))}}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):x?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(){var e=t.body;return e||(e=i(x?"svg":"body"),e.fake=!0),e}function a(e,n,r,o){var a,l,u,f,d="modernizr",p=i("div"),c=s();if(parseInt(r,10))for(;r--;)u=i("div"),u.id=o?o[r]:d+(r+1),p.appendChild(u);return a=i("style"),a.type="text/css",a.id="s"+d,(c.fake?c:p).appendChild(a),c.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),p.id=d,c.fake&&(c.style.background="",c.style.overflow="hidden",f=w.style.overflow,w.style.overflow="hidden",w.appendChild(c)),l=n(p,e),c.fake?(c.parentNode.removeChild(c),w.style.overflow=f,w.offsetHeight):p.parentNode.removeChild(p),!!l}function l(e,t){return!!~(""+e).indexOf(t)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function f(e,t){return function(){return e.apply(t,arguments)}}function d(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?f(o,n||t):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+p(t[o])+":"+r+")");return i=i.join(" or "),a("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function m(e,t,o,s){function a(){d&&(delete k.style,delete k.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var f=c(e,o);if(!r(f,"undefined"))return f}for(var d,p,m,h,v,y=["modernizr","tspan","samp"];!k.style&&y.length;)d=!0,k.modElem=i(y.shift()),k.style=k.modElem.style;for(m=e.length,p=0;m>p;p++)if(h=e[p],v=k.style[h],l(h,"-")&&(h=u(h)),k.style[h]!==n){if(s||r(o,"undefined"))return a(),"pfx"==t?h:!0;try{k.style[h]=o}catch(g){}if(k.style[h]!=v)return a(),"pfx"==t?h:!0}return a(),!1}function h(e,t,n,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+b.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?m(a,t,o,i):(a=(e+" "+T.join(s+" ")+s).split(" "),d(a,t,n))}function v(e,t,r){return h(e,n,n,t,r)}var y=[],g={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){y.push({name:e,fn:t,options:n})},addAsyncTest:function(e){y.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=g,Modernizr=new Modernizr;var C=[],w=t.documentElement,x="svg"===w.nodeName.toLowerCase();Modernizr.addTest("preserve3d",function(){var e=i("a"),t=i("a");e.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",t.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",e.appendChild(t),w.appendChild(e);var n=t.getBoundingClientRect();return w.removeChild(e),n.width&&n.width<4});var S=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return a("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();g.mq=S;var _="Moz O ms Webkit",b=g._config.usePrefixes?_.split(" "):[];g._cssomPrefixes=b;var T=g._config.usePrefixes?_.toLowerCase().split(" "):[];g._domPrefixes=T;var z={elem:i("modernizr")};Modernizr._q.push(function(){delete z.elem});var k={style:z.elem.style};Modernizr._q.unshift(function(){delete k.style}),g.testAllProps=h,g.testAllProps=v,Modernizr.addTest("flexbox",v("flexBasis","1px",!0)),o(),delete g.addTest,delete g.addAsyncTest;for(var E=0;E<Modernizr._q.length;E++)Modernizr._q[E]();e.Modernizr=Modernizr}(window,document);
"use strict";

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

var getViewport = function () {

	var viewports = {
		queries: {
			mobile: ['(max-width: 500px)', '(max-width: 768px)'],
			desktop: ['(max-width: 1024px)', '(min-width: 1024px)']
		}
	};

	Object.defineProperty(viewports, 'viewport', {
		get: function get() {
			mode: for (query in this.queries) {
				for (var i = 0; i < this.queries[query].length; i++) {
					var mq = this.queries[query][i];
					if (Modernizr.mq(mq)) {
						return query;
						break mode;
					}
				}
			}
		},
		enumerable: false
	});

	return function () {
		return viewports.viewport;
	};
}();

function sigmaCalculation(start, end, whatToSum) {
	var sum = 0;

	for (var i = start; i <= end; i++) {
		sum += whatToSum(i);
	};

	return sum;
}
'use strict';

var keyFocus = function keyFocus(id, child, clickEvent) {

	/* Handles event listeners on tab focused groups for WAI tabbing/keyboard compliance
 * A) Parent element containing requires tabindex="0" attribute
 * B) Focusable children require tabindex="-1" attribute
 * Option: clickEvent false to prevent keydown event listeners
 */

	var el = document.querySelector(id);
	var kf_group = new FocusGroup(el, child, clickEvent);

	function FocusGroup(el, child, clickEvent) {

		var thisObj = this;

		this.el = el;
		this.child = child || '*';
		this.focusable = el.querySelectorAll(this.child + '[tabindex="-1"]');
		this.focus_pos = 0;
		this.focus_end = this.focusable.length - 1;
		this.clickEvent = clickEvent === false ? false : true;
		this.tabbed = false;

		this.addListeners = function () {

			/* parent element */
			this.el.addEventListener('focus', elementHover = function elementHover(e) {

				return thisObj.elementFocus(e, this);
			}, true);

			/* children */
			for (var i = 0; i <= this.focus_end; i++) {

				this.focusable[i].addEventListener('keydown', childrenHover = function childrenHover(e) {

					return thisObj.childFocus(e, this);
				}, false);
			};
		};

		this.addListeners();
	};

	FocusGroup.prototype.elementFocus = function (e, el) {
		//when parent element focused via tab (only); switch to first focusable child

		var focusable = this.focusable;
		var focus_pos = this.focus_pos;

		el.addEventListener('keyup', test = function test(e) {

			var keystroke = e.key ? e.key : e.keyCode.toString();

			if (keystroke == 'Tab' || keystroke == '9') {
				var first = focusable[focus_pos];
				//console.log(first);
				first.focus();
			}
		}, false);
	};

	FocusGroup.prototype.childFocus = function (e, el) {

		if (e.defaultPrevented) {
			return; // Should do nothing if the default action has been cancelled
		}

		var handled = false;
		if (e.key !== undefined) {
			// Handle the event with KeyboardEvent.key and set handled true.
			switch (e.key) {
				case 'ArrowRight':
				case 'Right':
				case 'ArrowDown':
				case 'Down':
					this.focus_pos < this.focus_end ? this.focus_pos++ : this.focus_pos = 0;
					handled = true;
					break;
				case 'ArrowLeft':
				case 'Left':
				case 'ArrowUp':
				case 'Up':
					this.focus_pos > 0 ? this.focus_pos-- : this.focus_pos = this.focus_end;
					handled = true;
					break;
				case ' ':
				case 'Spacebar':
					//space will scroll element; prevent:
					e.preventDefault();
				case 'Enter':
					if (this.clickEvent === true) {
						el.click();
						handled = true;
					}
					break;
			}
		} else if (e.keyCode !== undefined) {
			// Handle the event with KeyboardEvent.keyCode and set handled true.
			switch (e.keyCode) {
				case '39':
				case '40':
					this.focus_pos < this.focus_end ? this.focus_pos++ : this.focus_pos = 0;
					handled = true;
					break;
				case '37':
				case '38':
					this.focus_pos > 0 ? this.focus_pos-- : this.focus_pos = this.focus_end;
					handled = true;
					break;
				case '32':
					//space will scroll element; prevent:
					e.preventDefault();
				case '13':
					if (this.clickEvent === true) {
						el.click();
						handled = true;
					}
					break;
			}
		}

		if (handled) {
			var next = this.focusable[this.focus_pos];
			next.focus();
			// Suppress "double action" if event handled
			e.preventDefault();
		}
	};

	FocusGroup.prototype.resetListeners = function () {

		this.el.removeEventListener('focus', elementHover, true);

		for (var i = 0; i < this.focusable.length; i++) {
			this.focusable[i].removeEventListener('keydown', childrenHover, true);
		}

		this.focus_pos = 0;
		this.focusable = el.querySelectorAll(this.child + '[tabindex="-1"]');

		this.addListeners();
	};

	return kf_group;
};
'use strict';

var resizeQuery = function () {

	var mQueries = ['(max-width: 500px)', '(max-width: 768px)', '(max-width: 1024px)', '(min-width: 1024px)'];
	var currentMQ = idQuery();

	var monitorMQ = function monitorMQ(eventsobj, init) {

		var tmpMQ = currentMQ;

		if (init) {
			fireCallback(eventsobj, currentMQ);
		}

		window.onresize = function () {
			var newMQ = idQuery();

			if (newMQ != tmpMQ) {
				fireCallback(eventsobj, newMQ);

				if (eventsobj['(all)']) {
					fireCallback(eventsobj, '(all)');
				}

				tmpMQ = newMQ;
			};
		};
	};

	function idQuery() {
		for (var i = 0; i < mQueries.length; i++) {
			if (Modernizr.mq(mQueries[i]) == true) {

				return mQueries[i];

				break;
			}
		}
	}

	function fireCallback(events, index) {

		if (typeof events[index] === 'function') {
			return events[index]();
		}
	}

	return monitorMQ;
}();
'use strict';

function showProject(tile_class, tag, data) {

	var viewport = getViewport();

	var parent = $(tile_class, '#tiles ').parent();

	$('#container').addClass('project');

	/* the selected tile */
	var parent_specs = {
		offset: parent.offset(),
		width: parent.width(),
		height: parent.height()
	};
	/* the project pane */
	var container_specs = {
		offset: $('#container').offset(),
		width: $('#container').width(),
		get height() {
			return Math.round($(window).height() - this.offset.top * 2);
		}

	};

	var markup = '\n\t<div id="project">\n\t\t<div class="imagery">\n\t \t\t<div class="close" tabindex="0"><img tabindex="-1" src="assets/img/button.close.png" alt="close button"/></div>\n\t \t\t<div id="slider" class="content ' + viewport + '">' + _formatImages(data, tag) + '</div>\n\t \t</div>\n\t \t<div class="info">\n\t \t\t<h1>' + data.name + '</h1><p>' + data.description + '</p>\n\t \t\t' + _formatTabTags(data, tag) + '\n\t\t</div>\n\t</div>';

	$(markup).prependTo('#container').offset({
		top: parent_specs.offset.top,
		left: parent_specs.offset.left
	}).width(parent_specs.width).height(parent_specs.height);

	$('#project').animate({
		top: Math.round(container_specs.offset.top),
		left: Math.round(container_specs.offset.left),
		width: container_specs.width,
		height: container_specs.height,
		opacity: 1
	}, 150, function () {
		$(this).find('.imagery').addClass('loaded');
		$('#interface').hide();
		_projectEvents(tile_class, tag, parent_specs, viewport);
	});
}

function _projectEvents(tile_class, active_tag, parent_specs, mode) {

	var resizeid;
	/* initialize slider */

	/* a11y */

	var ally = {
		'tags': keyFocus('#project .tabs'),
		'close': keyFocus('#project .close')
	};

	sliderModule({
		element: '#slider',
		slide: '.item',
		index: Number($('.tabs .' + active_tag).attr('data-index')),
		nav: '.tabs ul',
		mode: mode
	});

	var control = document.querySelector('.close');

	control.addEventListener('click', function (e) {

		$('#interface').show();

		$('#project').animate({
			left: parent_specs.offset.left,
			top: parent_specs.offset.top,
			width: parent_specs.width,
			height: parent_specs.height,
			opacity: .3
		}, 200, function () {
			$(this).remove();
			$(tile_class, '#tiles ').removeClass('active').removeClass('flip-y');
			$('#container').removeClass('project');
		});
	}, false);

	/* tabs nav */

	var tags = document.querySelectorAll('.tabs li');

	for (var i = 0; i < tags.length; i++) {
		tags[i].addEventListener('click', function (e) {
			/* menu */
			$(tags).find('a').removeClass('active');
			$(this).find('a').addClass('active');
			/* content */
			$('.copy.active').removeClass('active');
			var content = '.' + $(this).attr('class');
			$(content, '.tabs .content').addClass('active');
		});
	}

	/* resize */

	window.addEventListener('resize', resizeThrottle, false);

	function resizeThrottle() {
		if (!resizeid) {
			resizeid = setTimeout(function () {
				resizeid = null;
				_resizeProject(active_tag);
			}, 100);
		}
	}
} // _projectEvents

function _resizeProject(active_tag) {

	var container_specs = {
		offset: $('#container').offset(),
		width: $('#container').width(),
		get height() {
			return $(window).height() - this.offset.top * 2;
		}
	};

	$('#project').css({
		top: Math.round(container_specs.offset.top),
		left: Math.round(container_specs.offset.left),
		width: container_specs.width,
		height: Math.round(container_specs.height)
	});
}

function _formatTabTags(data, active) {

	var foci = data.foci;
	var content = '';
	var markup = '<div class="tabs"><ul tabindex="0">';

	for (var i = 0; i < foci.length; i++) {
		var activate = foci[i].slug == active ? true : false;
		var a_classes = '';
		if (activate) a_classes += 'active ';
		if (foci[i].favorite) a_classes += 'fav';
		markup += '<li data-index="' + i + '" class="' + foci[i].slug + '"><a href="#" tabindex="-1" class="' + a_classes + '">' + foci[i].tag + '</a></li>';
		content += '<div class="copy ' + foci[i].slug + ' ' + (activate ? 'active' : '') + '">' + foci[i].copy + '</div>';
	}

	markup += '</ul>';
	markup += '<div class="content">';
	markup += content;
	markup += '</div></div>';

	return markup;
}

function _formatImages(data, tag_active) {

	var markup = '';

	var highlights = data.foci;

	for (var i = 0; i < highlights.length; i++) {

		markup += '<div class="item ' + highlights[i].highlight.type + ' ' + highlights[i].slug + '">';
		switch (highlights[i].highlight.type) {
			case 'image':
				markup += '<img src="assets/img/' + highlights[i].slug + '/' + highlights[i].highlight.content + '" alt=""/>';
				break;
			case 'div':
				markup += '<div>' + highlights[i].highlight.content + '</div>';
				break;
		};

		markup += '</div>';
	}
	return markup;
}
'use strict';

var sliderModule = function () {

	var module = function module(options) {

		var clicked = false;

		var settings = {
			el: options.element,
			item: options.slide,
			get name() {
				return this.el + ' ' + this.item;
			},
			index: options.index,
			nav: options.nav,
			mode: options.mode
		};

		var slider = {
			fillImageWrapper: function fillImageWrapper() {
				var val_width = $(settings.el).parent().width();
				var val_height = $(settings.el).parent().height();

				$(settings.name).width(val_width).height(val_height);
			},
			setStartPosition: function setStartPosition() {
				//let pos = $(settings.el).parent().offset().top;
				var pos = $(settings.el).parent().offset().top || 0;
				var adjustment = $(settings.el).parent().height() * settings.index;

				$(settings.el).offset({ top: pos - adjustment });
			},
			animateSlide: function animateSlide(to_index) {
				var delta = to_index - settings.index;
				settings.index = to_index;

				if (delta === 0) return;

				var y_start = $(settings.el).position();
				var y_end = y_start.top - $(settings.el).parent().height() * delta;

				$(settings.el).animate({
					top: y_end
				}, 300, 'swing', function () {
					clicked = false;
				});
			}
		};

		function _rebuild(load) {

			if (load) {
				slider.setStartPosition();
			}

			/* Check for switch between viewport modes */
			var prev_mode = settings.mode;
			var curr_mode = getViewport();

			if (prev_mode != curr_mode) {
				settings.mode = curr_mode;
				slider.setStartPosition();
			}

			/* make item match dimensions of slider view */
			slider.fillImageWrapper();
		};

		var _events = function () {

			window.addEventListener('resize', function () {
				_rebuild();
			}, false);

			/* controls */
			var buttons = $(settings.nav).children();

			for (var i = 0; i < buttons.length; i++) {

				buttons[i].addEventListener('click', function (e) {

					var to_index = Number($(this).attr('data-index'));

					/* prevent double tap */
					if (settings.index === to_index) return;

					if (clicked === false) {
						slider.animateSlide(to_index);
						clicked = true;
					}
				}, false);
			}

			_rebuild(true);
		}();
	}; // module


	return module;
}();
'use strict';

var tileModule = function () {

	var active = void 0,
	    //slug of desired tile projects to show
	viewport = void 0,
	    //active media query
	viewmode = void 0,
	    //desktop layout or mobile
	disabled = false,
	    //flag for preventing events until transitions completed 
	projects = void 0,
	    //hold project data
	events = {
		'(max-width: 500px)': function maxWidth500px() {
			viewport = 'screen-small';
			viewmode = 'mobile';
		},
		'(max-width: 768px)': function maxWidth768px() {
			viewport = 'screen-medium';
			viewmode = 'mobile';
		},
		'(max-width: 1024px)': function maxWidth1024px() {
			viewport = 'screen-large';
			viewmode = 'desktop';
		},
		'(min-width: 1024px)': function minWidth1024px() {
			viewport = 'screen-full';
			viewmode = 'desktop';
		},
		'(all)': function all() {
			layoutTiles();
		}
	};

	resizeQuery(events, true);

	var module = function module(data) {

		projects = data.projects;

		layoutTiles();
	};

	function layoutTiles() {

		$('#interface').remove();

		var vars = {
			tiles: projects.slice(),
			filter: {
				active: active || 'fav',
				all: ['fav', 'logo-design', 'web-design', 'html-js']
			},
			continued: 0, //counter for filtered rows
			get cap() {
				var val = void 0; //number of tiles per row
				switch (viewport) {
					case 'screen-small':
						val = 1;
						break;
					case 'screen-medium':
						val = 2;
						break;
					case 'screen-large':
						val = 3;
						break;
					case 'screen-full':
						val = 4;
						break;
					default:
						val = 1;
				}
				return val;
			},
			buttons: [], //store tile data to build controls,
			timerCalc: function timerCalc(time, lengthen) {
				/* total time to compete function */
				var dur = time + (vars.cap - 1) * lengthen;
				/* dur time plus transition completion time */
				var css = $('#tiles .tile').css('transition-duration').split(',');
				var val = Number(css[0].substring(0, css[0].indexOf('s'))) * 1000 || 0;
				return dur + val;
			}

		};

		$('#container').append(_tileMarkup());

		/* if resized while project overlay displayed */
		if ($('#container').hasClass('project')) $('#interface').hide();

		/* accesibility controls*/
		var a11y = {
			tiles: keyFocus('#tiles'),
			nav: keyFocus('#nav')
		};

		/* animate tiles; fires _addEvents after completion */
		_animateTiles();

		function _animateTiles() {

			var timer = {
				time: 100,
				lengthen: 200
			};

			//console.log( vars.timerCalc(timer.time, timer.lengthen) );
			setTimeout(function () {
				$('#mask').remove();
				_addEvents();
			}, vars.timerCalc(timer.time, timer.lengthen));

			/* animate active tiles */

			var _loop = function _loop(_i) {
				setTimeout(function () {
					/* flip the first set of tiles */
					var li = $('#tiles .tile-' + _i).addClass('flip-x');
				}, timer.time);
				timer.time += timer.lengthen;
			};

			for (var _i = 1; _i <= vars.cap; _i++) {
				_loop(_i);
			};
		}

		function _addEvents() {

			/* Tiles */

			/* place events on bounding element to prevent repeated */
			/* class toggling during animation of hovered element */

			var tile_events = {
				flip: function flip(el) {
					$('.tile', el).removeClass('transform0').addClass('flip-y');
				},
				unflip: function unflip(el) {
					var active = $('.tile', el).hasClass('active');

					if (active === false) {
						$('.tile', el).removeClass('flip-y');
					}
				}
			};

			$('#tiles li').on({
				focusin: function focusin() {
					tile_events.flip(this);
				},
				focusout: function focusout() {
					tile_events.unflip(this);
				},
				mouseover: function mouseover() {
					tile_events.flip(this);
				},
				mouseout: function mouseout() {
					tile_events.unflip(this);
				}
			});

			/* Tags */
			var tags = document.querySelectorAll('.tile .tags button');

			for (var _i2 = 0; _i2 < tags.length; _i2++) {
				tags[_i2].addEventListener('click', function (e) {
					var focus_clicked = $(this).attr('class');
					var tile = $(this).parents('.tile');
					tile.addClass('active');
					var tile_id = tile.attr('data-project');
					var tile_classes = tile.attr('class');
					var tile_class = __findTileClass(tile_classes, true);

					showProject(tile_class, focus_clicked, vars.tiles[tile_id - 1]);
				}, false);
			}

			/* Main Nav */
			$('#nav > button').on('click', function () {
				var clicked = $(this).attr('id');
				active = clicked;
				layoutTiles();
			});

			/* Tile Nav */
			$('.controls .button').on('click', function () {

				if ($(this).hasClass('active')) return;

				var id = $(this).attr('id');

				if (disabled === false) __cycleTiles(id);
			});

			function __cycleTiles(id) {

				disabled = true;

				var clicked = {
					get val() {
						var val = id.substring(7, id.length + 1);
						return Number(val);
					}
				};

				var startIndex = {
					get current() {
						var start_str = $('.controls .active').first().attr('id');
						var start_num = start_str.substring(7, start_str.length + 1);
						return Number(start_num);
					},
					get next() {
						var include = vars.cap - 1;
						var start = void 0;
						/* which dir */
						if (clicked.val > this.current) {
							start = clicked.val - include > 1 ? clicked.val - include : 1;
						} else {
							start = clicked.val;
						}

						return start;
					}

				};

				/* need to put these in variables before removing .active class */
				var next_start = startIndex.next;
				var current_start = startIndex.current;
				$('.controls .button').removeClass('active');

				var timer = {
					time: 100,
					lengthen: 200
				};

				var nexts = [];
				var currents = [];

				setTimeout(function () {

					/* manipulate classes for appropriate tiles */
					/* timed to occur after transition transform completion */

					for (var _i3 = 0; _i3 < vars.cap; _i3++) {

						var tile_current = '#tiles .tile-' + currents[_i3];
						var tile_next = '#tiles .tile-' + nexts[_i3];

						if (nexts.indexOf(currents[_i3]) < 0) {
							/* previous tiles not shown on next set */
							var tile = '#tiles .tile-' + currents[_i3];
							$(tile_current).removeClass('flip-x flip-x2').parent('li').removeAttr('tabindex').removeClass('show');
						} else {
							/* previous tiles shown on next set in new position */
							$(tile_current).addClass('transform0').removeClass('flip-x2');
						}

						if (currents.indexOf(nexts[_i3]) < 0) {
							/* new tiles shown on next set */
							$(tile_next).addClass('flip-x').parent('li').attr('tabindex', '-1').addClass('show');
						}

						/* adjust last class */
						if (currents[_i3] == currents[vars.cap - 1]) $(tile_current).parent('li').removeClass('last');

						if (nexts[_i3] == nexts[vars.cap - 1]) $(tile_next).parent('li').addClass('last');

						/* remove faux content */
						$('.faux img', tile_current).remove();
						$('.back', tile_current).removeClass('flipping');
					}

					/* re-enable button controls */
					disabled = false;
					/* reset key focus for tiles */
					a11y.tiles.resetListeners();
				}, vars.timerCalc(timer.time, timer.lengthen));

				/* manipulate the CURRENT tiles to show flip effect */

				var _loop2 = function _loop2(_i4) {

					/* buttons */
					var button = $('#button-' + next_start);
					$(button).addClass('active');

					/* tile faces */
					var current_tile = $('#tiles .tile-' + current_start);
					var tmp_html = $('#tiles .tile-' + next_start + ' .front .content').html();
					$('.back .faux', current_tile).append(tmp_html);

					/* flip */
					setTimeout(function () {
						$(current_tile).removeClass('transform0').addClass('flip-x2');
						$('.back', current_tile).addClass('flipping');
					}, timer.time);
					timer.time += timer.lengthen;

					/* counters */
					currents.push(current_start);
					current_start++;
					nexts.push(next_start);
					next_start++;
				};

				for (var _i4 = 0; _i4 < vars.cap; _i4++) {
					_loop2(_i4);
				};
			}

			function __findTileClass(haystack, asSelector) {

				var classes = haystack.split(' ');
				var tileClass = void 0;

				for (i = 0; i < classes.length; i++) {

					var tile_class = classes[i];

					if (tile_class.indexOf('tile-') > -1) {
						tileClass = tile_class;
						break;
					} else {
						continue;
					};
				}

				return asSelector ? '.' + tileClass : tileClass;
			}
		}

		function _tileMarkup() {

			var markup = '<div id="interface" class="' + viewmode + '"><div class="wrapper">';

			markup += '<ul id="tiles" tabindex="0" class="' + vars.filter.active + ' cols-' + vars.cap + '"><div id="mask"></div>';

			tiles: for (var _i5 = 0; _i5 < vars.tiles.length; _i5++) {

				var tile_foci = vars.tiles[_i5].foci;
				var idelta = _i5 - vars.continued; //track index when rows are continued

				//mode: 

				var _ret3 = function () {
					switch (vars.filter.active) {
						case 'fav':
							var not_favs = [];

							for (tile_focus in tile_foci) {
								if (tile_foci[tile_focus].favorite === false) {
									not_favs.push(Number(tile_focus));
								}
							}

							if (not_favs.length == tile_foci.length) {
								vars.continued++;
								return 'continue|tiles';
							}

							tile_foci = $.grep(tile_foci, function (n, i) {
								return $.inArray(i, not_favs) == -1;
							});

							//break mode;
							break;

						default:
							var found = false;
							filter:
							/* filter out non-matching tiles */
							for (tile_focus in tile_foci) {
								if (tile_foci[tile_focus].slug == vars.filter.active) {
									found = true;
									break filter;
								}
							}
							if (found === false) {
								vars.continued++;
								return 'continue|tiles';
							}

					} //switch

					/* markup for matching tiles */
				}();

				if (_ret3 === 'continue|tiles') continue tiles;
				markup += '<li ' + (idelta < vars.cap ? 'tabindex="-1"' : '') + ' class="' + (idelta < vars.cap ? idelta + 1 == vars.cap ? 'show last' : 'show' : '') + '">\n\t\t\t\t\t\n\t\t\t\t\t<div data-project="' + (idelta + 1) + '" class="tile tile-' + (idelta + 1) + '"> \n\t\t\t\t\t\t\t<div class="side front">\n\t\t\t\t\t\t\t\t<div class="content vcenter">\n\t\t\t\t\t\t\t\t\t<img src="assets/img/' + vars.tiles[_i5].foci[0].slug + '/' + vars.tiles[_i5].foci[0].highlight.content + '" alt="" />\n\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="side back">\n\t\t\t\t\t\t\t\t<div class="content vcenter">\n\t\t\t\t\t\t\t\t\t<div class="source">\n\t\t\t\t\t\t\t\t\t\t<h1>' + vars.tiles[_i5].name + '</h1>\n\t\t\t\t\t\t\t\t\t\t<p>' + vars.tiles[_i5].description + '</p>\n\t\t\t\t\t\t\t\t\t\t ' + __formatTileTags(tile_foci) + ' \n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="faux"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t</li>';

				vars.buttons.push({
					tile: idelta + 1,
					state: idelta < vars.cap ? 'show' : 'hide'
				});
			}

			if (viewmode == 'mobile') {
				markup += '</ul>' + __tileControls(vars.buttons, viewmode) + '</div>';
			} else {
				markup += '</ul></div>';
			}

			markup += '<div class="wrapper"><div id="nav" tabindex="0">';

			for (var _i6 = 0; _i6 < vars.filter.all.length; _i6++) {
				markup += '<button tabindex="-1" id="' + vars.filter.all[_i6] + '" class="' + (vars.filter.active == vars.filter.all[_i6] ? 'active' : '') + '">' + vars.filter.all[_i6] + '</button>';
				if (viewmode == 'desktop' && _i6 == 1) markup += __tileControls(vars.buttons, viewmode);
			}

			markup += '</div></div></div>';

			return markup;

			function __formatTileTags(tags) {

				var markup = '<ul class="tags">';

				for (var _i7 = 0; _i7 < tags.length; _i7++) {
					markup += '<li><button tabindex="-1" class="' + tags[_i7].slug + '">' + tags[_i7].tag + '</button></li>';
				}

				markup += '</ul>';

				return markup;
			}

			function __tileControls(buttons, mode) {

				var markup = '<div class="controls ' + mode + '"><h1>Portfolio</h1><ul>';
				for (button in buttons) {
					markup += '<li><a tabindex="-1" id="button-' + buttons[button].tile + '" class="button ' + (buttons[button].state == 'show' ? 'active' : '') + ' " href="#"><span>' + buttons[button].tile + '</span></a></li>';
				}

				markup += '</ul></div>';

				return markup;
			}
		}
	} // _layoutTiles()

	return module;
}();
'use strict';

$(function () {

	//var projects;

	$.getJSON('assets/data/projects.json', function (data) {

		tileModule(data);
	});

	/* Modernizer checks for preserve 3D (required for flip effect); fails flexbox for non supporting */

	if (Modernizr.preserve3d && Modernizr.flexbox) {
		$('html').removeClass('no-js').addClass('js').addClass('flexbox');
	} else {
		$('html').removeClass('no-js').addClass('js').addClass('no-flexbox');
	}
	// 	$('html').removeClass('no-js').addClass('js').addClass('no-flexbox')
});
"use strict";