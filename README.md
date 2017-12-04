# progressive-image-loading

This is the repo for the Progressive Image loading project.

## How to Use:

### Installing

Install using `bower install progressive-image-loading`. You will need to include two files. `dist/progressive-image-loading.js` and `dist/progressive-image-loading.css`. It is up to you if you want to use the minified version.

### Use With img Tags

To use, wrap your image with a `div` tag with the class `pil-placeholder`. Add a `data-large` with the src of the full size image you would like to appear. 

Add both `data-ratio-width` and `data-ratio-height`. This will make sure your image loads in the correct ratio. 

Set the `src` of the `img` tag inside the `pil-placeholder` div to the small version of the image. This only has to be a few pixels wide by a few pixels high. The idea here is that the small file loads very quickly and gives a faster Time to Interaction.

Add a div below your image called `pil-height`.

### Use With Background Images

To use with a background image, add the class `pil-background` to an element that supports background images. Works best with `div` and `section`. 

Add a `data-large` for the full size image that will be loaded last. Add a `data-small` for the image that will be loaded first as a blurred image. This only has to be a few pixels wide by a few pixels tall. 

What happens here is a pseudo element is created in the `:before` slot of the css. The background is loaded with a size of cover, but you can override this in your own styles. Keep these things in mind if you are attempting to declare additional `:before` pseudo styles. 
