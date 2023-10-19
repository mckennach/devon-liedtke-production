const pressActions = () => {
    const pressEntries = Array.from(document.querySelectorAll('.press__entry'));

    const handleHover = (event: Event) => {
        // const { type } = event;
        const activeItems = Array.from(document.querySelectorAll('.press__images-container.active'));
        const target = event.currentTarget as HTMLElement;
        if(target.nodeName == 'P' || 'A') {
            activeItems.forEach((item) => {
                item.classList.remove('active');
            });
            const { id } = target.dataset;
            const pressImages = document.querySelector(`[data-images="${id}"]`);
            // if(type == 'mouseout') {
            //     // pressImages?.classList.remove('active');
            // } else {
            // }

            pressImages?.classList.add('active');

        }
        
    }

    if(pressEntries){
        pressEntries.forEach((entry) => {
            entry.addEventListener('mouseover', handleHover)
            // entry.addEventListener('mouseout', handleHover)
        });
    }
    // const body = document.querySelector('body');
    // const menuBar = document.querySelector('[role="menubar"]');


    // const togglepressActions = (): void => {
    //     body?.classList.toggle('open-mobile-nav');
    // }


   
    // menuBar?.addEventListener('click', togglepressActions)
    
}

export { pressActions }