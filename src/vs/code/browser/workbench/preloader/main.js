/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

// Dots
// ====
const dots = document.querySelector('.dots');
// Function
// ========
function animate(element, className) {
	const preloader = document.getElementById("preloader");
	if (preloader && window.getComputedStyle(preloader).display !== "none") {
		if (element) {
			element.classList.add(className);
			setTimeout(() => {
				element.classList.remove(className);
				setTimeout(() => {
					animate(element, className);
				}, 500);
			}, 2500);
		} else {
			console.error(".dots elements missing")
		}
	}
}

// Execution
// =========
animate(dots, "dots--animate");

//# sourceURL=file:///F:/vscode/src/vs/code/browser/workbench/preloader/main.js
