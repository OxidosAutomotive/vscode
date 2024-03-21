/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

// Dots
// ====
const dots = document.querySelector('.dots');
const maxCount = 2509;
// Function
// ========
function animate(element, className) {
	const preloader = document.getElementById('preloader');
	if (preloader && window.getComputedStyle(preloader).display !== 'none') {
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
}

function displayPerformanceEntries() {
	const preloader = document.getElementById('preloader');
	if (preloader && window.getComputedStyle(preloader).display !== 'none') {
		const preloaderText = document.getElementById('preloader-text');
		if (preloaderText) {
			let total = performance.getEntriesByType('resource').length;
			if (total <= maxCount) {
				preloaderText.innerHTML = `[${Math.round((total / maxCount) * 100)} %]`;
			} else {
				preloaderText.innerHTML = '[Applying finishing touches. Please be patient]';
			}
		}

		setTimeout(() => {
			displayPerformanceEntries();
		}, 250);
	}
}

// Execution
// =========
performance.setResourceTimingBufferSize(2510);
displayPerformanceEntries();
animate(dots, 'dots--animate');

//# sourceURL=file:///F:/vscode/src/vs/code/browser/workbench/preloader/main.js
