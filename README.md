# progressive-image-loading

This is the repo for the Progressive Image loading project.

## How to Use:

### Installing

Install using `bower install progressive-image-loading`. You will need to include two files. `dist/progressive-image-loading.js` and `dist/progressive-image-loading.css`. It is up to you if you want to use the minified version.

### Using it

To use, wrap your image with a `div` tag with the class `pil-placeholder`. Add a `data-large` with the src of the full size image you would like to appear. 
Add both `data-ratio-width` and `data-ratio-height`. This will make sure your image loads in the correct ratio. 
Set the `src` of the `img` tag inside the `pil-placeholder` div to the small version of the image. this only has to be a few pixels wide by a few pixels high.
Add a div below your image called `pil-height`.
Run the function `placeholders()` when the document has finished loading.

