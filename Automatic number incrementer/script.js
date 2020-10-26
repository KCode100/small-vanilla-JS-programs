let number = 0;
window.onload = increment();
function increment(){
    const numberUI = document.querySelector('.number');
    number++;
    numberUI.innerHTML = number;
    console.log('hi kivi');
    requestAnimationFrame(increment);
}