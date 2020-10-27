const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'grey', 'pink'];
const button = document.querySelector('.button');
const body = document.querySelector('body');

button.addEventListener('click', function(e){
    const random = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[random];
});