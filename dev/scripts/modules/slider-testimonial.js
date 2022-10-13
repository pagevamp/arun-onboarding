import 'slick-carousel';
class slider {
    constructor() {
        this.events();
        this.sliderInit();
    }

    sliderInit() {
        $('.slider-testimonial').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            variableWidth: false,
            speed: 500,
            autoplaySpeed: 5500,
            infinite: true,
            autoplay: true,
            touchMove: true,
            touchThreshold: 3000,
            easing: 'linear',
        });
    }

    resizeEvents() {
        $(window).on('resize', () => {
            this.sliderInit();
        });
    }

    clickEvents() {}

    events() {
        this.clickEvents();
        this.resizeEvents();
    }
}

export default slider;
new slider();
