


const mobileNav = () => {
    const body = document.querySelector('body');
    const menuBar = document.querySelector('[role="menubar"]');


    const toggleMobileNav = (): void => {
        body?.classList.toggle('open-mobile-nav');
    }


   
    menuBar?.addEventListener('click', toggleMobileNav)
    
}

export { mobileNav }