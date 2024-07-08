import './../styles/popover.scss';
import { $ } from './dom';

const popover = $('#first-popover') as HTMLDivElement;
const popoverToggle = $('#popover-toggle') as HTMLButtonElement;
const popoverHide = $('#popover-hide') as HTMLButtonElement;
const popoverShow = $('#popover-show') as HTMLButtonElement;

popoverToggle.addEventListener('click', () => {
  console.log('popoverToggle');
  popover.togglePopover();
});

popoverHide.addEventListener('click', () => {
  popover.hidePopover();
});

popoverShow.addEventListener('click', () => {
  popover.showPopover();
});
