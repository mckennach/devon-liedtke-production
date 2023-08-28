import SmoothScroll from 'smooth-scroll';

const smoothScroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
});

const scrollTo = (offset: number, callback: any, behavior: ScrollBehavior = 'smooth') => {
    const fixedOffset = offset.toFixed();
    const onScroll = function () {
            if (window.scrollY.toFixed() === fixedOffset) {
                window.removeEventListener('scroll', onScroll)
                callback()
            }
        }

    window.addEventListener('scroll', onScroll)
    onScroll()
    window.scrollTo({
        top: offset,
        behavior: behavior
    })
}

export { smoothScroll, scrollTo };
