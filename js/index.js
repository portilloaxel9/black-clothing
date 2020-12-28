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

(function(){
    // SCROLL
    
    var propScroll = {
        position: window.pageYOffset,
        scroll: document.getElementsByClassName('scroll'),
        destination: null,
        distance: null,
        interval: null
    }

    var metScroll = {
        inicio: function(){
            for(var i = 0; i < propScroll.scroll.length; i++){
                propScroll.scroll[i].addEventListener('click', metScroll.moveSlow)
            }
        },

        moveSlow: function(e){
            e.preventDefault();
            propScroll.destination = this.getAttribute('href');
            propScroll.distance = document.querySelector(propScroll.destination).offsetTop;
            
            propScroll.position = window.pageYOffset;
            propScroll.interval = setInterval(function(){
                
                if(propScroll.position < propScroll.distance){
                    propScroll.position += 30;

                    if(propScroll.position >= propScroll.distance){
                        clearInterval(propScroll.interval);
                    }
                }

                window.scrollTo(0, propScroll.position)
            
            }, 15);
        }
    }

    metScroll.inicio();

}())