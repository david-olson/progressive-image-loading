function placeholders() {
	var placeholders = document.getElementsByClassName('pil-placeholder');
	if (placeholders !== null && placeholders !== undefined && placeholders !== false) {
		for (i = 0; i < placeholders.length; i++) {
			var small = placeholders[i].getElementsByTagName('img')[0];
			var ratio = (placeholders[i].dataset.ratioHeight / placeholders[i].dataset.ratioWidth) * 100;
			var large = placeholders[i].dataset.large;
			// Update padding on .pil-height
			if (placeholders[i].getElementsByClassName('pil-height')[0] !== null && placeholders[i].getElementsByClassName('pil-height')[0] !== false && placeholders[i].getElementsByClassName('pil-height')[0] !== undefined) {
				placeholders[i].getElementsByClassName('pil-height')[0].style.paddingBottom = ratio + '%';
			} else {
				var pilHeight = document.createElement('div');
				pilHeight.style.paddingBottom = ratio + '%';
				placeholders[i].appendChild(pilHeight);
			}

			var img = new Image();
			img.src = small.src;
			img.onload = function() {
				small.classList.add('loaded');
			}

			var imgLarge = new Image();
			imgLarge.src = large;
			imgLarge.onload = function() {
				this.classList.add('loaded');
			}
			placeholders[i].appendChild(imgLarge);
		};
	};
	var placeholdersBg = document.getElementsByClassName('pil-background');
	if (placeholdersBg !== null && placeholdersBg !== undefined && placeholdersBg !== false) {
		for (x = 0; x < placeholdersBg.length; x++) {
			var smallbg = placeholdersBg[x].dataset.small;
			var largebg = placeholdersBg[x].dataset.large;
			var newClass = 'pil-placeholder-' + x;
			placeholdersBg[x].classList.add(newClass);
			placeholdersBg[x].classList.add('preloaded');

			var phbg = placeholdersBg[x];

			var memImage = new Image();
			memImage.src = largebg;
			memImage.onload = function() {
				phbg.classList.add('loaded');
			}

			var css = '.'+newClass+':before {background-image: url("'+ smallbg +'")}'+' .'+newClass+'.loaded:before {background-image: url("'+largebg+'");';
			var head = document.head || document.getElementsByTagName('head')[0];
			var style = document.createElement('style');

			style.type = 'text/css';
			if(style.styleShet) {
				style.styleSheet.cssText = css;
			} else {
				style.appendChild(document.createTextNode(css));
			}
			head.appendChild(style);
			var styleLarge = document.createElement('style');
			styleLarge.type = 'text/css';

		}
	}
};
// End