

export const blogActions = () => {
    const readMoreButton: HTMLElement | null = document.querySelector('#read-more-articles');   
    const articles = Array.from(document.querySelectorAll('.main-blog__article-item'));
    const groups = Array.from(document.querySelectorAll('.main-blog__article-group'));
    let allShown = false;
    // const articleCount = 1;

    if(readMoreButton && articles.length > 0) {
        
        readMoreButton.addEventListener('click', (e) => {
            e.preventDefault();
            const { currentCount }: any = readMoreButton.dataset;
            const group: HTMLElement | null = document.querySelector(`[data-article-group='${currentCount}']`);
            group?.classList.remove('group-hide');
            readMoreButton.dataset.currentCount = `${parseInt(currentCount) + 1}`;
            groups.forEach((el: any) => {
                const style = window.getComputedStyle(el);
                allShown = style.display === 'none' ? false : true;
            });

            if(allShown) {
                 readMoreButton.classList.add('hidden');
            }
           
            // console.log(group);
            // articles.forEach((article: any) => {
            //     article.classList.remove('group-hide');
            // });
            //
        });
    }

}