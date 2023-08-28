import './../styles/floor.scss';
import {$} from './dom';


$('.js-speed')!.addEventListener('input', (e: Event) => {
    const target = e.target as HTMLInputElement;
    const speed = target.valueAsNumber;
    document.body.style.setProperty('--speed', `${speed}s`);
});

$('.js-turn')!.addEventListener('input', (e: Event) => {
    const target = e.target as HTMLInputElement;
    const turn = -1 * target.valueAsNumber;
    document.body.style.setProperty('--turn', `${turn}deg`);
});
console.log('Everything is ok in Floor');
//<a href="https://www.freepik.com/free-vector/seamless-green-grass-pattern_13187581.htm#query=grass%20texture&position=0&from_view=keyword&track=ais">Image by macrovector</a> on Freepik
