# lux.js
lux.js is a lightweight, independent JavaScript library for easily and efficiently applying parallax effects to your web projects.

# Features
Parallax effect: Lux.js is a simple and intuitive way to implement the parallax effect. It is possible to create beautiful and dynamic parallax effects with minimal configuration.

Independence: Lux.js does not depend on other libraries or frameworks such as jQuery. Therefore, high-quality parallax effects can be implemented with minimal project dependencies.

Demo web site is [here](https://yuta.kmusiclife.com/demos/lux.js/) 

# Usage

create lux class and .lux -> .lux-bg with background-url parameter for image.

body lux
```html
<div class="lux-body-bg" style="background-image: url('https://source.unsplash.com/random/1280x800/?beach');"></div>
```
section lux(date-direction: top,bottom,right,left) & lux.js have got fade function as lux -> .lux-fade
```html
<div class="lux" data-direction="right">
    <div class="lux-bg" style="background-image: url('https://source.unsplash.com/random/1280x800/?nature');"></div>
    <div class="lux-fade d-flex flex-row text-light h-100">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</div>
```
