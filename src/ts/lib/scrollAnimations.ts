import { gsap  } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
// import { checkDevice } from "../util/responsiveActions";
import { body, siteWrapper, scrollOverlay } from "../constant/global";
import { checkDevice } from "../util/responsiveActions";
// import { scrollTo } from "./smoothScroll";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);



export const schemeAnimations = () => {

    ScrollTrigger.update();
    const schemeElements = gsap.utils.toArray<HTMLElement>('[data-scheme]');
    schemeElements.forEach(trigger => {
        if(trigger) {
            ScrollTrigger.create({
                trigger,
                start: 'top 50%',
                end: 'bottom 50%',
                // markers: { startColor: 'green', endColor: 'red', fontSize: '12px' },
                onEnter: () => {
                    const scheme  = trigger.dataset.scheme ?  `color-${trigger.dataset.scheme}` : 'color-background-1';
                    body?.setAttribute('data-theme', scheme);
                    // anchorTrigger.classList.add('active');
                },
                onLeave: () => {
                    const scheme  = trigger.dataset.scheme ?  `color-${trigger.dataset.scheme}` : 'color-background-1';
                    body?.setAttribute('data-theme', scheme);
                },
                onEnterBack: () => {
                    const scheme  = trigger.dataset.scheme ?  `color-${trigger.dataset.scheme}` : 'color-background-1';
                    body?.setAttribute('data-theme', scheme);
                },
                onLeaveBack: () => {
                    const scheme  = trigger.dataset.scheme ?  `color-${trigger.dataset.scheme}` : 'color-background-1';
                    body?.setAttribute('data-theme', scheme);
                }
            });
        } 
    });
}

export const landingAnimation = () => {


   

    if(siteWrapper != null ) {
        const landingEl: any = document.querySelector('landing');
        if(landingEl) {
            const landingContainer = landingEl.querySelector('.landing');
            const landingTitle = landingEl.querySelector('#Landing-Title');
            // const landingLogo = checkDevice() ? landingEl.querySelector('#Landing-Logo-Mobile') : landingEl.querySelector('#Landing-Logo-Desktop'); 
            const landingLogo = gsap.utils.toArray<HTMLElement>(`.landing__logo`);; 
            const logoPaths = gsap.utils.toArray<HTMLElement>(`.landing__logo path, .landing__logo rect`);
            const shopifySections = gsap.utils.toArray<HTMLElement>('main .shopify-section');
            body?.classList.add('disable-scroll');
            
            gsap.set(landingEl, {
                opacity: 1
            });

            gsap.set(landingLogo, {
                opacity: 0,
                bottom: '-15%'
            });

            gsap.set(landingTitle, {
                opacity: 0,
                color: 'rgb(243, 243, 239)',
                top: '-15%'
            })

            gsap.set(logoPaths, {
                fill: 'rgb(243, 243, 239)',
            })

            gsap.set(shopifySections, {
                y: '-100%',
                opacity: 0
            })


            const scrollAnimation = () => {
                
                const endLogoPosition = checkDevice() ? '60%' : '80%';

                const end = () => {
                   const tl = gsap.timeline({
                       
                   }).to(landingEl, {
                        zIndex: 0
                    }).to(scrollOverlay, {
                        opacity: 0
                    } ).to(shopifySections, {
                        opacity: 1,
                        y: 0
                    })


                    tl.eventCallback('onComplete', () => {
                        console.log('complete');
                        landingEl.remove();
                        scrollOverlay?.remove();
                        body?.classList.remove('disable-scroll', 'landing-active');
                        sessionStorage.setItem('disable', 'true');
                        setTimeout(() => {
                            tl.clear();
                            schemeAnimations();
                        }, 200);
                    })
                }

                gsap.timeline({
                    scrollTrigger: {
                        scroller: landingEl,
                        trigger: landingContainer,
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: -2,
                        onLeave: () => {
                            end();
                        }
                    }
                }).to(landingTitle, {
                    top: '-25%',
                    opacity: 0,
                }).to(landingLogo, {
                    bottom: endLogoPosition,
                    ease: "power1.inOut",
                }, '<10%').to(landingEl, {
                    // opacity: 0
                }).to(landingLogo, {
                    opacity: 0
                }, '<')

    
            }

    

            
            const loadAnimation = () => {
                gsap.timeline({
                    onComplete: () => {
                        scrollAnimation();
                    }
                }).to(landingLogo, {
                    opacity: 1,
                    bottom: '0%',
                    duration: .5,
                    delay: 1
                }).to(landingTitle, {
                    opacity: 1,
                    top: '0%',
                    duration: .5
                })
            }

            loadAnimation();

      
        } else {
            schemeAnimations();
        }
    }
}



