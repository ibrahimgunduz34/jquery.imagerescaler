#jQuery.ImageRescaler

jQuery ImageRescaler is developed for rescaling images by the specified box size.
It's useful library for scaling thumbnail images which is various size to the 
standard box size as easly.

For example:

##### HTML:
```html
<div class="imagePreview">
    <img src="http://3.bp.blogspot.com/-FEw8WEPmoHc/UIgfIeFSbKI/AAAAAAAAAE8/gtVvg5a6B0E/s1600/1.jpg" />
</div>
<br/>
<div class="imagePreview">
    <img src="http://www.sibelilaclama.com/wp-content/uploads/yesil_doga_manzara.jpg" />
</div>
<br/>
<div class="imagePreview">
    <img src="http://www.mimdap.org/images/icmekan/Light-Folded/11.JPG" />
</div>
```

##### CSS:
```css
.imagePreview {
    width:320px;
    height:250px;
    background-color:#EFEFEF;
    border:1px solid #CCC;
    position:relative;
}

.imagePreview img {
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
```

And... This is your image rescaler code:
##### Javascript:
```js
$(document).ready(function(){
    $('.imagePreview img').imageRescaler({canvas:{
                                            width:320,
                                            height:240
                                          }, 
                                          scale:80})
});
```

Click the link for live demo:
[a http://jsfiddle.net/6mB8Z/1//](http://jsfiddle.net/6mB8Z/1//)
