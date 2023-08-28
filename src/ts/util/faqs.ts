


const accordion = () => {

    const accordions = Array.from(document.querySelectorAll('.enable-accordion'));


    const toggleAccordion = (el: Element): void => {
        if(el) {
            el.classList.toggle('active');
        }
    }


    if(accordions.length > 0) {
        accordions.forEach(accordion => {
            document.addEventListener('click', () => toggleAccordion(accordion))
        }); 
    }
    
}

export { accordion }