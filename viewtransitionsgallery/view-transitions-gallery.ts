import './view-transitions-gallery.scss';

console.log('Everything is ok in View Transitions Gallery');
const cdnURL = 'https://cdn.glitch.global/de7f29c8-57eb-4eb1-81b5-4e0d8565ade5';

const imageData = [
  {
    name: 'Jungle coast',
    file: 'jungle-coast',
  },
  {
    name: 'Bird in the tree',
    file: 'tree-bird',
  },
  {
    name: 'A view from the sky',
    file: 'view-from-the-sky',
  },
  {
    name: 'The view across the water',
    file: 'watery-view',
  },
];

const thumbs: HTMLImageElement | null = document.querySelector('.thumbs');
const galleryImg: HTMLImageElement | null = document.querySelector('.gallery-view img');
const galleryCaption: HTMLElement | null = document.querySelector('.gallery-view figcaption');

function init() {
  imageData.forEach((data) => {
    const img = document.createElement('img');
    const a = document.createElement('a');
    a.href = '#';
    a.title = `Click to load ${data.name} in main gallery view`;
    img.alt = data.name;
    img.src = `${cdnURL}/${data.file}_th.jpg`;
    a.appendChild(img);
    thumbs!.appendChild(a);

    a.addEventListener('click', updateView);
    a.addEventListener('keypress', updateView);
  });

  galleryImg!.src = `${cdnURL}/${imageData[0].file}.jpg`;
  galleryCaption!.textContent = imageData[0].name;
}

function updateView(event: Event) {
  // Handle the difference in whether the event is fired on the <a> or the <img>
  let targetIdentifier;
  // @ts-ignore
  if (event.target.firstChild === null) {
    targetIdentifier = event.target;
  } else {
    // @ts-ignore
    targetIdentifier = event.target.firstChild;
  }

  const displayNewImage = () => {
    // @ts-ignore
    galleryImg.src = `${targetIdentifier.src.split('_th.jpg')[0]}.jpg`;
    // @ts-ignore
    galleryCaption.textContent = targetIdentifier.alt;
  };

  // Fallback for browsers that don't support View Transitions:
  // @ts-ignore
  if (!document.startViewTransition) {
    displayNewImage();
    return;
  }

  // With View Transitions:
  // @ts-ignore
  const transition = document.startViewTransition(() => displayNewImage());
}

init();
