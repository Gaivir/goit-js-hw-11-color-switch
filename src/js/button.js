import refs from './refs';
import colors from './colors';


refs.buttonStartEl.addEventListener('click', onButtonStartClick);
refs.buttonStopEl.addEventListener('click', onButtonStopClick);
let timeoutId = null;


function onButtonStartClick(evt) {
   

   timeoutId = setInterval(() => {refs.bodyEl.style.backgroundColor =  colors[randomIntegerFromInterval(0, colors.length - 1)]
   }, 2000);
    
     refs.buttonStartEl.setAttribute('disabled', 'disabled');
   
    

}

function onButtonStopClick(evt) {
    clearTimeout(timeoutId);
    refs.buttonStartEl.removeAttribute('disabled');

}


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
