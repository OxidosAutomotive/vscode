/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

const maxCount = 2509;

function displayLoadPercentage() {
	const preloader = document.getElementById('preloader');
	if (preloader && window.getComputedStyle(preloader).display !== 'none') {
		const preloaderText = document.getElementById('preloader-text');
		if (preloaderText) {
			const total = performance.getEntriesByType('resource').length;
			if (total <= maxCount) {
				preloaderText.innerHTML = `${Math.round((total / maxCount) * 100)} %`;
			} else {
				preloaderText.innerHTML = 'Applying finishing touches. Please be patient';
			}
		}

		setTimeout(() => {
			displayLoadPercentage();
		}, 250);
	}
}

// Execution
// =========
performance.setResourceTimingBufferSize(maxCount);
displayLoadPercentage();
//# sourceURL=file:///F:/vscode/src/vs/code/browser/workbench/preloader/main.js
