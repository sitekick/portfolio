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