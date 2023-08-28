// import axios from "axios";

// const { routes } = window;

// export const cart = () => {
//     const cartItems = Array.from(document.querySelectorAll('cart-items'));
   
//     const getSectionsToRender = () => {
//         return [
//             {
//                 id: 'main-cart-items',
//                 section: document?.getElementById('main-cart-items')?.dataset.id,
//                 selector: '.js-contents',
//             },
//             {
//                 id: 'cart-icon-bubble',
//                 section: 'cart-icon-bubble',
//                 selector: '.shopify-section',
//             },
//             {
//                 id: 'cart-live-region-text',
//                 section: 'cart-live-region-text',
//                 selector: '.shopify-section',
//             },
//             {
//                 id: 'main-cart-footer',
//                 section: document?.getElementById('main-cart-footer')?.dataset.id,
//                 selector: '.js-contents',
//             }
//         ];
//     }
//     const cartRemove = () => {
//         const removeButtons = Array.from(document.querySelectorAll('cart-remove-button'));
//         if(removeButtons.length > 0) {
//             removeButtons.forEach((button) => {
//                 button.addEventListener('click', (event) => {
//                     event.preventDefault();
//                     const cartItems = button.closest('cart-items') || button.closest('cart-drawer-items');
//                     updateQuantity(cartItems, button.dataset.index, 0);
                
//                 });
//             });
        
//         }
//     }

//     const updateQuantity = (items, line, quantity, name) => {
  
//         const body = JSON.stringify({
//             line,
//             quantity,
//             sections: getSectionsToRender().map((section) => section.section),
//             sections_url: window.location.pathname,
//         });

//         axios.post(`${routes.cart_change_url}`, body, {
//              headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             }
//         })
//         .then((response) => {
//             console.log(response);
//         })
//         .then((state) => {

//         })
//         .catch(function (error) {
//             console.log(error);
//         });
      

//     }

//     const enableLoading = (line) => {
//         // const mainCartItems = document.getElementById('main-cart-items') || document.getElementById('CartDrawer-CartItems');
//         // mainCartItems?.classList.add('cart__items--disabled');

//         // const cartItemElements = cartItems.querySelectorAll(
//         // `#CartItem-${line} .loading-overlay`,
//         // );
//         // const cartDrawerItemElements = cartItems.querySelectorAll(
//         // `#CartDrawer-Item-${line} .loading-overlay`,
//         // );

//         // [...cartItemElements, ...cartDrawerItemElements].forEach((overlay) =>
//         // overlay.classList.remove('hidden'),
//         // );

//         // document.activeElement.blur();
//         // cartItems.lineItemStatusElement.setAttribute('aria-hidden', false);
//     }


//     const init = () => {
//         cartRemove();
//     }

//     init();
// }