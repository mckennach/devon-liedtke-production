// import { fetchConfig } from "../constant/global";
// import axios from "axios";


// export const productForm = () => {
//     const productForm = Array.from(document.querySelectorAll('product-form'));
//     const forms: any = []
//     const { cart_add_url } = window?.routes;
//     const onSubmitHandler = (evt, formConfig) => {
//         evt.preventDefault();
//         const { submitButton, form, element, cart } = formConfig
//         submitButton.setAttribute('aria-disabled', true);
//         submitButton.classList.add('loading');
//         element.querySelector('.loading-overlay__spinner').classList.remove(
//           'hidden',
//         );
//         const config = fetchConfig('javascript');
//         config.headers['X-Requested-With'] = 'XMLHttpRequest';
//         delete config.headers['Content-Type'];
//         console.log(form);
//         const formData = new FormData(form);
//         if(cart) {
//             formData.append('sections_url', window.location.pathname);
//         }

//         config.body = formData;
//         console.log(`${routes.cart_add_url}`);


        
//         fetch(`${routes.cart_add_url}`, config)
//             .then((response) => {
//                 console.log(response);
//                 response.json()
//             })
//             .then((response) => {
//                 console.log('STATUS', response.status);
//             })
//             .catch((e) => {
//                 console.error(e);
//             })
//     }


//     // const handleErrorMessage = (config, errorMessage = false) => {
//     //     config.errorMessageWrapper =
//     //     config.errorMessageWrapper ||
//     //     config.querySelector('.product-form__error-message-wrapper');
//     //     if (!config.errorMessageWrapper) return;
//     //     config.errorMessage =
//     //     config.errorMessage ||
//     //     config.errorMessageWrapper.querySelector(
//     //         '.product-form__error-message',
//     //     );

//     //     config.errorMessageWrapper.toggleAttribute('hidden', !errorMessage);

//     //     if (errorMessage) {
//     //         config.errorMessage.textContent = errorMessage;
//     //     }
//     // }

    

//     const init = () => {
//         if(productForm.length > 0) {
//             productForm.forEach((form: any) => {
//                 const formConfig = {
//                     element: form,
//                     form: form.querySelector('form'),
//                     cart: document.querySelector('cart-notification') || document.querySelector('cart-drawer'),
//                     submitButton: form.querySelector('[type="submit"]'),
//                     hideErrors: form.dataset.hideErrors === 'true'
//                 }
//                 form.addEventListener('submit', (evt) => onSubmitHandler(evt, formConfig));
//                 form.querySelector('[name=id]')?.setAttribute('disabled', false);
//                 if (document.querySelector('cart-drawer')) 
//                     formConfig.submitButton.setAttribute('aria-haspopup', 'dialog');
                
//                 console.log(forms);
                
//             });
//         }
//     }


//     init();
// }