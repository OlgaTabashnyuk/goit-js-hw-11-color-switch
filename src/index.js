// import './src/styles.css'

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');
const bodyRef = document.querySelector('body');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/*
*=====Вариант 1 =============
*/
const timer = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    };
    this.isActive = true;
this.intervalId = setInterval(() => {
   document.body.style.background = colors[randomIntegerFromInterval(0, 5)]
  
}, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    this.intervalId = null;
  },
}


startBtnRef.addEventListener('click', timer.start.bind(timer));

stopBtnRef.addEventListener('click', timer.stop.bind(timer));

/*
*=====Вариант 2 =============
*/
// let isBtnActive = null;
// let intervalId = null;
// // // // 1.нажате на кнопку СТАРТ запускает setInterval
// function changeColor() {
//     document.body.style.background = colors[randomIntegerFromInterval(0, 5)];
//   } 
// const startBtnHandler = function () {
//   if (isBtnActive) {
//     return;
//   }
// intervalId = setInterval(changeColor, 1000) ;
//     isBtnActive = true; 
//   }
// const stopBtnHandler = function () {
//   clearInterval(intervalId);
//   isBtnActive = false;
//   return;

// }
 

// startBtnRef.addEventListener('click', startBtnHandler);
// stopBtnRef.addEventListener('click', stopBtnHandler);