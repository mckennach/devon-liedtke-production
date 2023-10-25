import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { checkDevice, debounce } from '../util/responsiveActions';



// let isMobile = checkDevice();




const filterSwiper = new Swiper('.heading__filter-swiper', {
    modules: [Navigation, Pagination],
    // Navigation arrows
    slidesPerView: 'auto',
    spaceBetween: 50,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 400,
    a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
    },
    breakpoints: {
        768: {
            spaceBetween: 0,
            slidesPerView: 'auto'
        }
    }
});

// window.addEventListener("resize", debounce(() => {
//     isMobile = checkDevice();
//     if(isMobile) {
//         filterSwiper.init();
//     } else {
//         filterSwiper.destroy();
//     }
// }, 300));

const productSwiper = new Swiper('.product__swiper', {
    modules: [Navigation, Pagination, Autoplay],
    // Navigation arrows
    spaceBetween: 8,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: true,
    },
  
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

export { productSwiper, filterSwiper };