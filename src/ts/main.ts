// Import SCSS
import '../scss/style.scss';

// Import Common Libraries
// import { template } from './constant/global';
import { schemeAnimations } from './lib/scrollAnimations';
import './lib/smoothScroll';
import './lib/swiper';

// import './util/cartDrawer';
import { mobileNav } from './util/mobileNav';
import { accordion } from './util/faqs';


import { responsiveActions } from './util/responsiveActions';
import { blogActions } from './util/blog';
// import { productForm } from './shop/productForm';
// import { cart } from './util/cart';
// import { cartDrawer } from './util/cartDrawer';

// Import SVG Sprite Images
import './sprite-image/bag.svg';

// const designMode = document.querySelector('.shopify-design-mode');

const links = Array.from(document.querySelectorAll('a'));

if(links.length > 0 ) {
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            console.log(link);
            if(link.hasAttribute('disable')){
                e.preventDefault();
            }
        });
    });
}


// if(template == 'index' && designMode == null) {
//     landingAnimation();
// } else {
//     schemeAnimations();
// }


schemeAnimations();


mobileNav();
accordion();
responsiveActions();
blogActions();