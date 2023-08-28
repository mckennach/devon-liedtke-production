





export const body = document.querySelector('body');

export const debounce = (func: Function, timeout = 300) => {
        let timer: any;
        return (...args: any) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
}

export const checkDevice = () => {
    if(window.innerWidth > 768) {
        return false;
    }
    return true;
}




export const responsiveActions = () => {
    
 


    

    // const updateImages = () => {
    //     const isMobile = checkDevice();
    //     const elementsToUpdate = Array.from(document.querySelectorAll('[update-images]'));
        

    //     const updateImage = async (element: HTMLElement, image: String) => {
    //         element.style.backgroundImage = `url(${image})`;
    //         element.classList.add('loading');
    //         return true;
            
    //     }

    //     if(elementsToUpdate.length > 0) {
    //         elementsToUpdate.forEach(async(element: any) => {
    //             const { desktopImage, mobileImage }: any = element?.dataset;
    //             if(isMobile && element && mobileImage) {
    //                 const doIt = await updateImage(element, mobileImage);
    //                 if(doIt && element.classList.contains('loading')) {
    //                     element.classList.remove('loading');
    //                     element.classList.add('loaded');
    //                 }
    //             } else if (element && desktopImage) {
    //                 const doIt = await updateImage(element, desktopImage);
    //                 if(doIt && element.classList.contains('loading')) {
    //                     element.classList.remove('loading');
    //                     element.classList.add('loaded');
    //                 }
                
    //             }
    //         });
    //     }
    // }

    const makeClones = () => {
        const isMobile = checkDevice();
        const cloneElements = Array.from(document.querySelectorAll('[clone]'));
        if( cloneElements.length > 0 ) {
            cloneElements.forEach((element: any) => {
                const { appendToMobile, appendToDesktop }: any = element?.dataset;
                if(isMobile && element && appendToMobile) {
                    const toAppend = document.querySelector(appendToMobile);
                    const newElement = element?.cloneNode(true);
                    if(newElement) {
                        element?.remove();
                        toAppend?.after(newElement);
                        newElement.classList.remove('hidden');
                    }
                } else if( element && appendToDesktop ) {
                    const toAppend = document.querySelector(appendToDesktop);
                    const newElement = element?.cloneNode(true);
                    if(newElement) {
                        element?.remove();
                        toAppend?.after(newElement);
                        newElement.classList.remove('hidden');
                    }
                }
            });
        }
    }

    const init = () => {
        makeClones();
        // updateImages();
        window.addEventListener("resize", debounce(() => makeClones(), 300));
        // window.addEventListener("resize", debounce(() => updateImages(), 300));
   
    }
    init();
}

