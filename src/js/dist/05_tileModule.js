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
		'(max-width: 768px) and (orientation: landscape)': function maxWidth768pxAndOrientationLandscape() {
			viewport = 'screen-medium-landscape';
			viewmode = 'mobile';
		},
		'(max-width: 1024px)': function maxWidth1024px() {
			viewport = 'screen-large';
			viewmode = 'desktop';
		},
		'(max-width: 1324px)': function maxWidth1324px() {
			viewport = 'screen-xlarge';
			viewmode = 'desktop';
		},
		'(min-width: 1324px)': function minWidth1324px() {
			viewport = 'screen-full';
			viewmode = 'desktop';
		},
		'(any)': function any() {
			layoutTiles();
		}
	};

	var rq = resizeQuery(events, true);

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
				all: {
					slug: ['fav', 'logo-design', 'web-design', 'html-js'],
					name: ['fav', 'logo design', 'web design', 'html/js']
				},
				count: 0 //counter for filtered rows
			},
			get cap() {
				var val = void 0; //number of tiles per row
				switch (viewport) {
					case 'screen-small':
						val = 2;
						break;
					case 'screen-medium':
					case 'screen-large':
						val = 3;
						break;
					case 'screen-medium-landscape':
					case 'screen-xlarge':
						val = 4;
						break;
					case 'screen-full':
						val = 5;
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
			},
			preload: {
				files: [],
				flip_x: function flip_x(id, src) {

					var tile = '#tiles .tile-' + id;
					/* add background */
					$(tile).find('.front').css('background-image', 'url(assets/img/' + src + ')');
					/* remove preloading class from parent li */
					$(tile).parent('li').removeClass('preloading');
					/* flip the tile */
					$(tile).addClass('flip-x');
				}
			}
		};

		$('#container').append(_tileMarkup());

		/* if resized while project overlay displayed */
		if ($('#container').hasClass('project') || $('#container').hasClass('contact')) $('#interface').hide();

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

			setTimeout(function () {
				_addEvents();
			}, vars.timerCalc(timer.time, timer.lengthen));

			/* animate active tiles */

			var _loop = function _loop(_i) {
				setTimeout(function () {
					/* preload */
					if (vars.preload.files[_i].loaded === true) {
						vars.preload.flip_x(vars.preload.files[_i].id, vars.preload.files[_i].src);
					} else {
						/* created setter to fire when value is true */
						Object.defineProperty(vars.preload.files[_i], "loaded", {
							set: function set() {
								vars.preload.flip_x(this.id, this.src);
							}
						});
					}
				}, timer.time);
				timer.time += timer.lengthen;
			};

			for (var _i = 1; _i <= vars.cap; _i++) {
				_loop(_i);
			};

			function __manipulateTile(tileid, tilesrc) {
				var tile = '#tiles .tile-' + tileid;
				/* add background */
				$(tile).find('.front').css('background-image', 'url(assets/img/' + tilesrc + ')');
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

			var tile_events = {
				flip: function flip(el) {
					if ($(el).hasClass('preloading')) return;

					$('.tile', el).removeClass('transform0').addClass('flip-y');
				},
				unflip: function unflip(el) {
					var active = $('.tile', el).hasClass('active');

					if (active === false) {
						$('.tile', el).removeClass('flip-y');
					}
				}
			};

			function tileEvents() {

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
			}

			tileEvents();

			/* Tags */

			$('#tiles .tags button').off().on('click', function () {
				var focus_clicked = $(this).attr('class');
				var tile = $(this).parents('.tile');
				tile.addClass('active');
				var tile_id = tile.attr('data-project');
				var tile_classes = tile.attr('class');
				var tile_class = __findTileClass(tile_classes, true);

				showProject(tile_class, focus_clicked, vars.tiles[tile_id]);
			});

			/* Main Nav */
			$('#nav > li > a').on('click', function () {
				var clicked = $(this).attr('id');
				active = clicked;
				layoutTiles();
			});

			/* Main Subnav */
			$('.controls a').on('click', function () {

				if ($(this).hasClass('active')) return;

				var id = $(this).attr('id');

				if (disabled === false) __cycleTiles(id);
			});

			function __cycleTiles(id) {

				disabled = true;

				// disable hover effect until cycle complete 	
				$('#tiles li').off();

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

					for (var _i2 = 0; _i2 < vars.cap; _i2++) {
						//tmp
						//continue;

						var tile_current = '#tiles .tile-' + currents[_i2];
						var tile_next = '#tiles .tile-' + nexts[_i2];

						if (nexts.indexOf(currents[_i2]) < 0) {
							/* previous tiles not shown on next set */
							var tile = '#tiles .tile-' + currents[_i2];
							$(tile_current).removeClass('flip-x flip-x2').parent('li').removeAttr('tabindex').removeClass('show');
						} else {
							/* previous tiles shown on next set in new position */
							$(tile_current).addClass('transform0').removeClass('flip-x2');
						}

						if (currents.indexOf(nexts[_i2]) < 0) {
							/* new tiles shown on next set */
							/* set image */
							//console.log(vars.preload.files[nexts[i]].src);
							var img_src = 'url(assets/img/' + vars.preload.files[nexts[_i2]].src + ')';
							$(tile_next).find('.front').css('background-image', img_src);
							/* show */
							$(tile_next).addClass('flip-x').parent('li').attr('tabindex', '-1').addClass('show');
						}

						/* adjust last class */
						if (currents[_i2] == currents[vars.cap - 1]) $(tile_current).parent('li').removeClass('last');

						if (nexts[_i2] == nexts[vars.cap - 1]) $(tile_next).parent('li').addClass('last');

						/* remove temporary content */
						$('.back', tile_current).removeClass('flipping center').css('background-image', 'none');
					}

					/* re-enable button controls */
					disabled = false;
					/* reset key focus for tiles */
					a11y.tiles.resetListeners();
					/* re-enable hover effects */
					tileEvents();
				}, vars.timerCalc(timer.time, timer.lengthen));

				/* manipulate the CURRENT tiles to show flip effect */

				var _loop2 = function _loop2(_i3) {

					/* buttons */
					var button = $('#button-' + next_start);
					$(button).addClass('active');

					/* tile faces */
					var current_tile = $('#tiles .tile-' + current_start);
					var upcoming_tile = $('#tiles .tile-' + next_start);

					//let img_src = $('.front', upcoming_tile).css('background-image');
					var img_src = 'url(assets/img/' + vars.preload.files[next_start].src + ')';

					var img_class = $('.front', upcoming_tile).hasClass('center') ? 'center' : '';

					$('.back', current_tile).css('background-image', img_src).addClass(img_class);
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

				for (var _i3 = 0; _i3 < vars.cap; _i3++) {
					_loop2(_i3);
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
			markup += '<ul id="tiles" tabindex="0" class="' + vars.filter.active + ' cols-' + vars.cap + '">';

			tilesloop: for (var _i4 = 0; _i4 < vars.tiles.length; _i4++) {
				var image_path = void 0;
				var image_class = void 0;
				var tile_foci = vars.tiles[_i4].foci;
				var idelta = _i4 - vars.filter.count; //track index when rows are filtered

				if (vars.filter.active == 'fav') {

					var favorites = {};

					filter1: for (tile_focus in tile_foci) {

						/* determine image path for tile using first suitable instance(having static image) */
						if (image_path == undefined && tile_foci[tile_focus].highlight.type == 'image') {
							image_path = tile_focus + '/' + tile_foci[tile_focus].highlight.content;
							image_class = tile_focus == 'logo-design' ? 'center' : 'fill';
						}

						if (tile_foci[tile_focus].favorite === true) {
							favorites[tile_focus] = tile_foci[tile_focus];
						} else {
							continue filter1;
						}
					}
					// if no favorites for project then skip
					if (Object.keys(favorites).length != 0) {
						tile_foci = favorites;
					} else {
						vars.filter.count++;
						continue tilesloop;
					}
				} else {

					var found = false;

					/* filter out non-matching tiles */
					filter2: for (tile_focus in tile_foci) {

						if (tile_focus == vars.filter.active) {
							found = true;
							break filter2;
						}
					}

					if (found === false) {
						vars.filter.count++;
						continue tilesloop;
					}

					/* determine image path for tile */

					if (tile_foci[vars.filter.active].highlight.type == 'html') {
						//for html content; use the static image of the alternate focus indicated
						var alternate = tile_foci[vars.filter.active].highlight.static;
						image_path = alternate + '/' + tile_foci[alternate].highlight.content;
						image_class = alternate == 'logo-design' ? 'center' : 'fill';
					} else {
						image_path = vars.filter.active + '/' + tile_foci[vars.filter.active].highlight.content;
						image_class = vars.filter.active == 'logo-design' ? 'center' : 'fill';
					}
				};
				/* preload tile content */
				__preloadTile(idelta + 1, image_path);
				/* markup for matching tiles */
				markup += '<li ' + (idelta < vars.cap ? 'tabindex="-1"' : '') + ' class="' + (idelta < vars.cap ? idelta + 1 == vars.cap ? 'show preloading last' : 'show preloading' : '') + ' ">\n\t\t\t\t <div data-project="' + _i4 + '" class="tile tile-' + (idelta + 1) + '">  \n\t\t\t\t\t\t<div class="side front ' + image_class + '"></div>\n\t\t\t\t\t\t<div class="side back">\n\t\t\t\t\t\t\t<div class="content">\n\t\t\t\t\t\t\t\t\t<h1>' + vars.tiles[_i4].name + '</h1>\n\t\t\t\t\t\t\t\t\t<p>' + __formatDescription(vars.tiles[_i4].description) + '</p>\n\t\t\t\t\t\t\t\t\t' + __formatTileTags(tile_foci) + ' \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>';

				vars.buttons.push({
					tile: idelta + 1,
					state: idelta < vars.cap ? 'show' : 'hide'
				});
			} // tiles:

			if (viewmode == 'mobile') {
				markup += '</ul>' + __tileControls(vars.buttons, viewmode) + '</div>';
			} else {
				markup += '</ul></div>';
			}

			markup += '<div class="wrapper"><ul id="nav" tabindex="0">';

			for (var _i5 = 0; _i5 < vars.filter.all.slug.length; _i5++) {
				var name = vars.filter.all.name[_i5];
				var slug = vars.filter.all.slug[_i5];
				markup += '<li><a tabindex="-1" id="' + slug + '" title="' + (slug == 'fav' ? 'show favorites' : 'show projects that include ' + name) + '" class="button ' + (vars.filter.active == slug ? 'active' : '') + '">' + (slug == 'fav' ? '<span>★</span>' : name) + '</a></li>';
				if (viewmode == 'desktop' && _i5 == 1) markup += '<li>' + __tileControls(vars.buttons, viewmode) + '</li>';
			}

			markup += '</div></div></div>';

			return markup;

			function __preloadTile(id, src) {

				var obj = {
					"id": id,
					"src": src,
					"loaded": false
				};

				vars.preload.files[id] = obj;

				var tileImg = new Image();

				tileImg = new Image();
				tileImg.onload = function () {
					vars.preload.files[id].loaded = true;
				};
				tileImg.src = 'assets/img/' + src;
			}

			function __formatDescription(desc) {

				if (desc == '') return;

				var period = desc.indexOf('.') + 1;

				return desc.substring(0, period);
			}

			function __formatTileTags(tags) {

				var markup = '<ul class="tags">';

				for (tag in tags) {
					markup += '<li><button tabindex="-1" class="' + tag + '">' + tags[tag].tag + '</button></li>';
				}

				markup += '</ul>';

				return markup;
			}

			function __tileControls(buttons, mode) {

				var markup = '<div class="controls ' + mode + '"><h1>Portfolio</h1><ul>';

				for (button in buttons) {
					markup += '<li><a tabindex="-1" id="button-' + buttons[button].tile + '" class="button ' + (buttons[button].state == 'show' ? 'active' : '') + ' "><span>' + buttons[button].tile + '</span></a></li>';
				}

				markup += '</ul></div>';

				return markup;
			}
		}
	} // _layoutTiles()

	return module;
}();