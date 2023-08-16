import { gsap  } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const body = document.querySelector('body');
const schemeElements = gsap.utils.toArray<HTMLElement>('[data-scheme]');

schemeElements.forEach(trigger => {
    if(trigger) {
        ScrollTrigger.create({
            trigger,
            start: 'top 50%',
            end: 'bottom 50%',
            // markers: { startColor: 'green', endColor: 'red', fontSize: '12px' },
            onEnter() {
                const scheme  = trigger.dataset.scheme ?  `color-${trigger.dataset.scheme}` : 'color-background-1';
                body?.setAttribute('data-theme', scheme);
                // anchorTrigger.classList.add('active');
            },
            onLeave() {
                const scheme  = trigger.dataset.scheme ?  `color-${trigger.dataset.scheme}` : 'color-background-1';
                body?.setAttribute('data-theme', scheme);
            },
            onEnterBack() {
                const scheme  = trigger.dataset.scheme ?  `color-${trigger.dataset.scheme}` : 'color-background-1';
                body?.setAttribute('data-theme', scheme);
            },
            onLeaveBack() {
                const scheme  = trigger.dataset.scheme ?  `color-${trigger.dataset.scheme}` : 'color-background-1';
                body?.setAttribute('data-theme', scheme);
            }
        });
    }
    
});