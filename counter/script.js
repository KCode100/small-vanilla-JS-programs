const numberUI = document.querySelector('.number');
const incrementUI = document.querySelector('.increment');
const decrementUI = document.querySelector('.decrement');

incrementUI.addEventListener('click', increment);
decrementUI.addEventListener('click', decrement);
let count = 0;

function increment(){
    count ++;
    numberUI.innerHTML = count;
    if (count > 0) {
        numberUI.style.color = 'green';
        } else if (count === 0) {
            numberUI.style.color = 'white';
        }
    animate();
}

function decrement(){
    count --;
    numberUI.innerHTML = count;
    if (count === 0) {
        numberUI.style.color = 'white';
    } else if (count < 0) {
        numberUI.style.color = 'red';
    }
    animate();
}

function animate(){
    numberUI.animate([{opacity: '0.2'},{opacity: '1.0'},],
    {duration: 500, fill: "forwards"});
}