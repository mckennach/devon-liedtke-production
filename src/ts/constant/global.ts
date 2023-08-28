export const body = document.querySelector('body');
export const siteWrapper = document.querySelector('.site-wrapper');
export const scrollOverlay = document.querySelector('.scroll-overlay');
export const { template }: any = window;

// export const onKeyUpEscape = (event) => {
//   if (event.code.toUpperCase() !== 'ESCAPE') return;

//   const openDetailsElement = event.target.closest('details[open]');
//   if (!openDetailsElement) return;

//   const summaryElement = openDetailsElement.querySelector('summary');
//   openDetailsElement.removeAttribute('open');
//   summaryElement.setAttribute('aria-expanded', false);
//   summaryElement.focus();
// }

// export const fetchConfig = (type = 'json') => {
//   return {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: `application/${type}`,
//     },
//   };
// }