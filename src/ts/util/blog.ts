

export const blogActions = () => {
    const readMoreButton = document.querySelector('#read-more-articles');   
    const articles = Array.from(document.querySelectorAll('.main-blog__article-item'));

    if(readMoreButton && articles.length > 0) {
        readMoreButton.addEventListener('click', (e) => {
            e.preventDefault();
            articles.forEach((article: any) => {
                article.classList.remove('group-hide');
            });
            readMoreButton.classList.add('hidden');
        });
    }

}