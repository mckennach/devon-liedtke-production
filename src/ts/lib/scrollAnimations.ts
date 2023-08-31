import { gsap  } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
// import { checkDevice } from "../util/responsiveActions";
import { body, siteWrapper} from "../constant/global";

// import { checkDevice } from "../util/responsiveActions";
// import { scrollTo } from "./smoothScroll";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);



export const schemeAnimations = () => {

    ScrollTrigger.update();
    const schemeElements = gsap.utils.toArray<HTMLElement>('[data-scheme]');
    schemeElements.forEach(trigger => {
        if(trigger) {
            const scheme  = trigger.dataset.scheme ?  `${trigger.dataset.scheme}` : 'background-1';
            const { themes }: any = window;
            const theme = themes[scheme];


           gsap.timeline({
                scrollTrigger: {
                    trigger,
                    start: 'top 50%',
                    end: 'bottom bottom',
                    scrub: true,
                    // markers: true
                }
            }).to("html, body", {
                "--color-background": theme.colorBackground,
                "--gradient-background": theme.gradientBackground,
                "--color-foreground" : theme.colorForeground,
                "--color-shadow": theme.colorBackground,
                "--color-button": theme.colorBackground,
                "--color-button-text": theme.colorBackground,
                "--color-secondary-button": theme.colorBackground,
                "--color-secondary-button-text": theme.colorBackground,
                "--color-link": theme.colorBackground,
                "--color-badge-foreground": theme.colorBackground,
                "--color-badge-background": theme.colorBackground,
                "--color-badge-border": theme.colorBackground,
                "--payment-terms-background-color": theme.colorBackground
            })

            // ScrollTrigger.create({
            //     trigger,
            //     animation: tl,
            //     start: 'top 50%',
            //     end: 'bottom 50%',
            //     scrub: true,

            //     // markers: { startColor: 'green', endColor: 'red', fontSize: '12px' },
            //     onEnter: () => {
            //         const scheme  = trigger.dataset.scheme ?  `${trigger.dataset.scheme}` : 'background-1';
                    

            //         // body?.setAttribute('data-theme', scheme);
            //         // anchorTrigger.classList.add('active');
            //     },
            //     onLeave: () => {
            //         const scheme  = trigger.dataset.scheme ?  `${trigger.dataset.scheme}` : 'background-1';
            //         // body?.setAttribute('data-theme', scheme);
            //     },
            //     onEnterBack: () => {
            //         const scheme  = trigger.dataset.scheme ?  `${trigger.dataset.scheme}` : 'background-1';
            //         // body?.setAttribute('data-theme', scheme);
            //     },
            //     onLeaveBack: () => {
            //         const scheme  = trigger.dataset.scheme ?  `${trigger.dataset.scheme}` : 'background-1';
            //         // body?.setAttribute('data-theme', scheme);
            //     }
            // });
        } 
    });
}

export const landingAnimation = () => {


   

    if(siteWrapper != null ) {
        const landingEl: any = document.querySelector('landing');
        if(landingEl) {
            // const landingContainer = landingEl.querySelector('.landing');
            const landingTitle = landingEl.querySelector('#Landing-Title');
            const headerLogo = document.querySelector('.header__heading-logo-wrapper ');
            // const landingLogo = checkDevice() ? landingEl.querySelector('#Landing-Logo-Mobile') : landingEl.querySelector('#Landing-Logo-Desktop'); 
            const landingLogo = gsap.utils.toArray<HTMLElement>(`.landing__logo`);; 
            // const logoPaths = gsap.utils.toArray<HTMLElement>(`.landing__logo path, .landing__logo rect`);
            const shopifySections = gsap.utils.toArray<HTMLElement>('main .shopify-section');
            body?.classList.add('disable-scroll');
            
            gsap.set(siteWrapper, {
                opacity: 0,
             
            });

            gsap.set(landingEl, {
                opacity: 1
            });

            gsap.set(landingLogo, {
                opacity: 0,
            });

            gsap.set(headerLogo, {
                opacity: 0,
            });

            gsap.set(landingTitle, {
                opacity: 0,
                top: '-15%'
            })

            gsap.set(shopifySections, {
                y: '-100%',
                opacity: 0
            })


            const scrollAnimation = () => {

                const tl = gsap.timeline({

                   })
                   .to(siteWrapper, {
                        opacity: 1
                    })
                   .to(headerLogo, {
                        opacity: 1,
                        y: 0
                    })
                    
                   .to(shopifySections, {
                        opacity: 1,
                        y: 0
                    }, '<');

                    ScrollTrigger.create({
                        animation: tl,
                        trigger: siteWrapper,
                        start: 'top top',
                        end: '2000px 200px',
                        scrub: true,
                        pin: true,
                        onLeave: function (self) {
                            // landingEl?.remove();
                            let start = self.start;
                            self.scroll(self.start);
                            self.disable();
                            self?.animation?.progress(1);
                            ScrollTrigger.refresh();
                            window.scrollTo(0, start);
                            body?.classList.remove('landing-active');
                            landingEl?.remove();
                            schemeAnimations();
                            sessionStorage.setItem('disable', 'true');



                        }
                    });


                    

                tl.eventCallback('onComplete', () => {
                    // landingEl?.remove()
                    // tl.clear().kill();
                    
                })
                // const endLogoPosition = checkDevice() ? '60%' : '80%';

                // const end = () => {
                    
                //    const tl = gsap.timeline({
                //    }).to(landingEl, {
                //         zIndex: 0
                //     }).to(scrollOverlay, {
                //         opacity: 0
                //     } ).to(shopifySections, {
                //         opacity: 1,
                //         y: 0
                //     })


                //     tl.eventCallback('onComplete', () => {
                //         console.log('complete');
                //         landingEl.remove();
                //         scrollOverlay?.remove();
                //         body?.classList.remove('disable-scroll', 'landing-active');
                //         // sessionStorage.setItem('disable', 'true');
                //         setTimeout(() => {
                //             tl.clear();
                //             schemeAnimations();
                //         }, 200);
                //     })
                // }

                // gsap.timeline({
                //     scrollTrigger: {
                //         trigger: landingContainer,
                //         start: 'top top',
                //         end: 'bottom bottom',
                //         scrub: -2,
                //         pin: true,
                //         markers: true,
                //         onLeave: () => {
                //             end();
                //         }
                //     }
                // }).to(landingTitle, {
                //     top: '-25%',
                //     // opacity: 0,
                // }).to(landingLogo, {
                //     y: '-300%',
                //     // bottom: endLogoPosition,
                //     // ease: "power1.inOut",
                // }, '<10%').to(landingEl, {
                // }).to(landingLogo, {
                //     // opacity: 0
                // }, '<')

    
            }

    

            
            const loadAnimation = () => {
                gsap.timeline({
                    onComplete: () => {

                        scrollAnimation();
                        body?.classList.remove('disable-scroll');

                    }
                }).to(landingLogo, {
                    opacity: 1,
                    // bottom: '50%',
                    y: '-50%',
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



