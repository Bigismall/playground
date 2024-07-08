import './view-transitions.scss';

console.log('Everything is ok in View Transitions');

const article = document.getElementsByTagName('article');
const switchArticle = (e?: MouseEvent) => {
  // @ts-ignore
  const hash = e?.target?.hash?.slice(1) || location?.hash?.slice(1);

  Array.from(article).forEach((a, i) => {
    if (a.id === hash || (!hash && !i)) {
      a.removeAttribute('hidden');
    } else {
      a.setAttribute('hidden', '');
    }
  });
};

document.body.addEventListener('click', (e) => {
  // @ts-ignore
  if (!e?.target?.hash) return;

  // @ts-ignore
  if (!document.startViewTransition) {
    switchArticle(e);
    return;
  }
  // @ts-ignore
  document.startViewTransition(() => switchArticle(e));
});

switchArticle();
