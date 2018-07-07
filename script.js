const secondsHand = document.querySelector('.seconds-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsdegree = ((seconds/60)*360)+90;
    secondsHand.style.transform = `rotate(${secondsdegree}deg)`;

    const mins = now.getMinutes();
    const minsdegree = ((mins/60)*360)+((seconds/60)*6)+90;
    minsHand.style.transform = `rotate(${minsdegree}deg)`;

    const hours = now.getHours();
    const hourdegree = ((hours/12)*360)+((mins/60)*30)+90;
    hourHand.style.transform = `rotate(${hourdegree}deg)`;
}
setInterval(setDate, 1000);
setDate();