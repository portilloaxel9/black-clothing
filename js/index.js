/*--------------Index--------------*/
(function(){

    // SLIDER
    var propSlider = {
        slider: document.getElementById('slider'),
        banner1: null
    }

    var metSlider = {
        inicio: function(){
            setInterval(metSlider.moveSlide, 3000);
        },

        moveSlide: function(){
            //propSlider.slider.style.transition = 'all 1s ease';
            //propSlider.slider.style.marginLeft = '-100%';
            
            setTimeout(function(){
                propSlider.banner1 = propSlider.slider.firstElementChild;
                propSlider.slider.appendChild(propSlider.banner1);
                //propSlider.slider.style.transition = 'unset';
                //propSlider.slider.style.marginLeft = '0%';
            }, 1000);
        }
    }

    metSlider.inicio();

}())