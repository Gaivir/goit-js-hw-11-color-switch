import './styles.css';


const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyEl = document.querySelector('body');
const buttonStartEl = document.querySelector('[data-action="start"]');
const buttonStopEl = document.querySelector('[data-action="stop"]');

let timeoutId = null;

buttonStartEl.addEventListener('click', onButtonStartClick);
buttonStopEl.addEventListener('click', onButtonStopClick);

function onButtonStartClick(evt) {

   timeoutId = setInterval(() => {console.log(randomIntegerFromInterval(1, 6))
   }, 2000)
    //  bodyEl.style.backgroundColor =  ;


}

function onButtonStopClick(evt) {

    clearTimeout(timeoutId);
    console.log('Закінчив');
}


// bodyEl.style.backgroundColor =  ;

// const allColors = colors.map(color => {
//     console.log(color[0]);
// })



// DATE
class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    }
}

const newTime = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});

console.log(newTime.targetDate);

const startTime = Date.now();
console.log(startTime);




// const timer = {
//     start() {
//         const startTime = Date.now();

//         setInterval(() => {
//         const currentTarget = Date.now(newTime.targetDate);
//         const time = currentTarget-startTime;


// const {days, hours, mins, secs} = getTimeComponents(time);
//             console.log(`${days}:${hours}:${mins}:${secs}`);
//         }, 1000);
//     }
// }

// timer.start();

// function pad(value) {
//     return String(value).padStart(2, '0');
// }

// function getTimeComponents(time) {
//     const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//     return {days,hours,mins,secs};
// }


  
import refs from './refs.js'


class CountdownTimer {
    constructor({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.metod = () => {
            const currentTime = Date.now();
            const time = this.targetDate - currentTime;
            this.getTimeComponents(time);
            this.finishTime(time);
        }
    }

    startTimer() {
        this.metod();
        this.intervalId = setInterval(() => {
            this.metod();
        }, 1000);
    }

   
 pad(value) {
    return String(value).padStart(2, '0');
  }

 getTimeComponents(time) {
const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
 refs.days.textContent = `${days}`;
 refs.hours.textContent = `${hours}`;
 refs.mins.textContent = `${mins}`;
 refs.secs.textContent = `${secs}`;
}

    finishTime(time) {
        if (time < 0) {
            clearInterval(this.intervalId);
            this.time = 0;
            this.getTimeComponents(this.time);
        }
    }
}

const countdownTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('January 24, 2021'),
});
countdownTimer.startTimer();


  