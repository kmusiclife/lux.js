# lux.js
lux.js is a lightweight, independent JavaScript library for easily and efficiently applying parallax effects to your web projects.

# Features
Parallax effect: Lux.js is a simple and intuitive way to implement the parallax effect. It is possible to create beautiful and dynamic parallax effects with minimal configuration.

Independence: Lux.js does not depend on other libraries or frameworks such as jQuery. Therefore, high-quality parallax effects can be implemented with minimal project dependencies.

# Usage

create lux class and .lux -> .lux-bg with background-url parameter for image.

body lux
```html
<div class="lux-body-bg" style="background-image: url('https://source.unsplash.com/random/1280x800/?beach');"></div>
```
section lux(date-direction: top,bottom,right,left)
```html
<div class="lux" data-direction="right">
    <div class="lux-bg" style="background-image: url('https://source.unsplash.com/random/1280x800/?nature');"></div>
</div>
```
