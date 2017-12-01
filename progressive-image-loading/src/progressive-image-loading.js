var placeholders = document.getElementsByClassName('pil-placeholder');
window.onload = function() {
	console.log(placeholders);
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
	}
}