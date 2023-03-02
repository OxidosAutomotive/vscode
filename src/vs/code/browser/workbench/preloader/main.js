/*---------------------------------------------------------------------------------------------
 *  PRELOADER
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

function displayPerformanceEntries() {
	const preloader = document.getElementById("preloader");
	if (preloader && window.getComputedStyle(preloader).display !== "none") {
		const preloaderText = document.getElementById("preloader-text");
		if (preloaderText) {
			const entries = performance.getEntries()
			if (entries.length) {
				preloaderText.innerHTML = `[${entries[entries.length - 1].name}]`;
			} else {
				preloaderText.innerHTML = '[]';
			}
		}

		setTimeout(() => {
			displayPerformanceEntries();
		}, 50);
	}
}

// Execution
// =========
animate(dots, "dots--animate");
displayPerformanceEntries();

//# sourceURL=file:///F:/vscode/src/vs/code/browser/workbench/preloader/main.js
