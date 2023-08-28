import { gsap  } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const siteWrapper = document.querySelector('.site-wrapper');
const { template }: any = window;
if(siteWrapper != null && template === 'index' ) {
    const landingEl: any = document.querySelector('landing');
    if(landingEl) {
        const { days } = landingEl?.dataset;
        const currentDate = new Date(); //'Mar 11 2015' current.getTime() = 1426060964567
        const toEnable = 86400000 * days;
        const followingDay = new Date(currentDate.getTime() + toEnable); // + 1 day in ms
        ScrollTrigger.create({
            trigger: siteWrapper,
            start: 'top top',
            end: 'bottom bottom',
            onEnter: () => {
                landingEl?.remove();
                localStorage.setItem('disableUntil', followingDay.toLocaleDateString());
            },
            // markers: true
        })
    }
}
