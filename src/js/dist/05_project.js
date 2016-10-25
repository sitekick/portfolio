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