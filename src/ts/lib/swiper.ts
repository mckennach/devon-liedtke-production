import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// console.log(SwiperOptions);
// const productSwiper = 'hi';
const productSwiper = new Swiper('.product__swiper', {
    modules: [Navigation, Pagination, Autoplay],
    // Navigation arrows
    spaceBetween: 8,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
  
    speed: 400,
    a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
    },
    breakpoints: {
        768: {
            spaceBetween: 0,
            slidesPerView: 1
        }
    }
});

export { productSwiper };