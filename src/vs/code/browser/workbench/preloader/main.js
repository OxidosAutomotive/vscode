/*---------------------------------------------------------------------------------------------
 *  PRELOADER
 *--------------------------------------------------------------------------------------------*/
'use strict';

// Dots
// ====
const dots = document.querySelecto('.dots');

// Function
// ========
function animate(element, className) {
	if (element) {
		element.classList.add(className);
		setTimeout(() => {
			element.classList.remove(className);
			setTimeout(() => {
				animate(element, className);
			}, 500);
		}, 2500);
	} else {
		console.error('.dots elements missing');
	}
}

// Execution
// =========
animate(dots, 'dots--animate');
