// import { trapFocus, removeTrapFocus } from "./focus";
// import { onKeyUpEscape } from "../constant/global";
// export const cartDrawer = () => {

//     const cartDrawer = document.querySelector('cart-drawer');
    
   


//     const open = (triggeredBy: any) => {
      
//         const cartDrawerNote = cartDrawer?.querySelector('[id^="Details-"] summary');
//         if (cartDrawerNote && !cartDrawerNote.hasAttribute('role')) {
//             setSummaryAccessibility(cartDrawerNote);
//         }
//         // here the animation doesn't seem to always get triggered. A timeout seem to help
//         setTimeout(() => {
//             cartDrawer?.classList.add('animate', 'active');
//         });

//         cartDrawer?.addEventListener(
//         'transitionend',
//         () => {
//             const containerToTrapFocusOn = cartDrawer?.classList.contains('is-empty')
//             ? cartDrawer?.querySelector('.drawer__inner-empty')
//             : document.getElementById('CartDrawer');
//             const focusElement =
//             cartDrawer?.querySelector('.drawer__inner') ||
//             cartDrawer?.querySelector('.drawer__close');
//             trapFocus(containerToTrapFocusOn, focusElement);
//         },
//         { once: true },
//         );

//         document.body.classList.add('overflow-hidden');
  
//     }

//     const close = () => {
//         cartDrawer?.classList.remove('active');
//         document.body.classList.remove('overflow-hidden');
//     }

//     const setSummaryAccessibility = (cartDrawerNote: any) => {
//         cartDrawerNote.setAttribute('role', 'button');
//         cartDrawerNote.setAttribute('aria-expanded', 'false');

//         if (cartDrawerNote.nextElementSibling.getAttribute('id')) {
//         cartDrawerNote.setAttribute(
//             'aria-controls',
//             cartDrawerNote.nextElementSibling.id,
//         );
//         }

//         cartDrawerNote.addEventListener('click', (event) => {
//         event.currentTarget.setAttribute(
//             'aria-expanded',
//             !event.currentTarget.closest('details').hasAttribute('open'),
//         );
//         });

//         cartDrawerNote.parentElement.addEventListener('keyup', onKeyUpEscape);
//     }

//    const setHeaderCartIconAccessibility = () => {
//         const cartLink = Array.from(document.querySelectorAll('.header-drawer-cart'));
//         if(cartLink.length > 0) {
//             cartLink.forEach((link) => {
//                 link.setAttribute('role', 'button');
//                 link.setAttribute('aria-haspopup', 'dialog');
//                 link.addEventListener('click', (event) => {
//                 event.preventDefault();
//                 open(link);
//                 });
//                 link.addEventListener('keydown', (event) => {
//                 if (event.code.toUpperCase() === 'SPACE') {
//                     event.preventDefault();
//                     open(link);
//                 }
//                 });
//             });
//         } 
//     }

//     const renderContents = (parsedState) => {
//         console.log(parsedState);
//     }
  

//     const init = () => {
//         if(cartDrawer) {
//             cartDrawer.addEventListener(
//                 'keyup',
//                 (evt) => evt.code === 'Escape' && close(),
//             );
//             cartDrawer.querySelector('#CartDrawer-Overlay').addEventListener(
//                 'click',
//                 close.bind(cartDrawer),
//             );
//             setHeaderCartIconAccessibility();
//         }
//     }

//     init();
// }