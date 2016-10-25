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