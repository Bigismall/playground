import './../styles/view-transitions.scss';

console.log('Everything is ok in View Transitions');

const article = document.getElementsByTagName('article');
const switchArticle = (e?: MouseEvent) => {

    const hash = e?.target?.hash?.slice(1) || location?.hash?.slice(1);

    Array.from(article).forEach((a, i) => {

        if (a.id === hash || (!hash && !i)) {
            a.removeAttribute('hidden');
        } else {
            a.setAttribute('hidden', '');
        }

    });

};


document.body.addEventListener('click', e => {

    if (!e?.target?.hash) return;

    if (!document.startViewTransition) {
        switchArticle(e);
        return;
    }
    document.startViewTransition(() => switchArticle(e));

});

switchArticle();


