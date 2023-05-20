/*!
  * lux.js v0.0.3 (https://yuta.kmusiclife.com/)
  * Copyright 2023 Yuta Konishi
  * Licensed under Apache2.0
  */
const lux_body_bg = document.querySelector('.lux-body-bg');
let luxs = [];
let lux_fades = [];

document.querySelectorAll('.lux-fade').forEach((lux_fade)=>{
    lux_fades.push(lux_fade);
});
if(lux_body_bg){
    lux_body_bg.style.top = 0;
    lux_body_bg.style.left = '-25vw';
    lux_body_bg.style.zIndex = '-5';
    lux_body_bg.style.width = '150vw';
    lux_body_bg.style.height = '150vh';
    lux_body_bg.style.backgroundSize = 'cover';
    lux_body_bg.style.backgroundPosition = 'center';
    lux_body_bg.style.position = 'fixed';
}
document.querySelectorAll('.lux').forEach((lux) => {
    
    var lux_bg = lux.querySelector('.lux-bg');
    var height = lux.getAttribute('data-height');
    var direction = lux.getAttribute('data-direction');

    lux.style.position = 'relative';
    lux.style.overflowX = 'hidden';
    lux.style.overflowY = 'hidden';
    lux.style.height = height || '100vh';
    lux.style.width = '100vw';

    lux_bg.style.position = 'absolute';
    lux_bg.style.width = '150vw';
    lux_bg.style.height = '150vh';
    lux_bg.style.backgroundSize = 'cover';
    lux_bg.style.zIndex = '-5';
    lux_bg.style.backgroundPosition = 'center';

    if(direction == 'right'){
        lux_bg.style.right = '-25vw';
    }
    if(direction == 'left'){
        lux_bg.style.left = '-25vw';
    }
    if(direction == 'top'){
        lux_bg.style.top = '-25vh';
    }
    if(direction == 'bottom'){
        lux_bg.style.bottom = '-25vh';
    }
    luxs.push(lux);

});
window.addEventListener('scroll', function(_e){

    let _y = window.pageYOffset;
    const visible_rate = 0.20;

    lux_fades.forEach((lux_object) => {
        let rect = lux_object.getBoundingClientRect();
        if( (window.innerHeight-rect.top > 0) && (((window.innerHeight* (1.00-visible_rate) )-rect.bottom) < 0) ){ 
            let all_height = (window.innerHeight-rect.top) - (window.innerHeight-rect.bottom) + window.innerHeight*visible_rate;
            let lux_object_y = window.innerHeight-rect.top;
            let lux_object_a = lux_object_y/all_height;
            lux_object.style.opacity = lux_object_a;
        } else {
            lux_object.style.opacity = 1.00;
        }
    });

    luxs.forEach((lux)=>{
       
        var lux_bg = lux.querySelector('.lux-bg');
        var direction = lux.getAttribute('data-direction');
        
        // visible range
        if( _y+window.innerHeight >= lux.offsetTop && _y <= (lux.offsetTop+lux.clientHeight) ){
            var _diff = ((_y+window.innerHeight)-lux.offsetTop)/(lux.clientHeight+window.innerHeight)*50;
            if(direction == 'left'){
                lux_bg.style.left = '-' + _diff + 'vw';
            }
            if(direction == 'right'){
                lux_bg.style.right = '-' + _diff + 'vw';
            }
            if(direction == 'top'){
                lux_bg.style.top = '-' + _diff + 'vh';
            }
            if(direction == 'bottom'){
                lux_bg.style.bottom = '-' + _diff + 'vh';
            }
        }
    });
    if(lux_body_bg){
	    var total_lux_body_bg = lux_body_bg.clientHeight - document.documentElement.clientHeight;
	    var lux_body_bg_pos = (_y/(document.documentElement.scrollHeight - document.documentElement.clientHeight))*total_lux_body_bg;
	    lux_body_bg.style.top = '-' + lux_body_bg_pos + 'px';
	}

}, { passive: true });
