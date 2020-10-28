const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.container');
const images = [
    'https://images.pexels.com/photos/1383752/pexels-photo-1383752.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 

    'https://images.pexels.com/photos/302083/pexels-photo-302083.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',

    'https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',

    'https://images.pexels.com/photos/4611701/pexels-photo-4611701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',

    'https://images.pexels.com/photos/4014919/pexels-photo-4014919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',

    'https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
];

let count = 0;

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);


function nextSlide(){
    count++;
    container.animate([{opacity: '0.1'},{opacity: '1.0'}],
    {duration: 1000, fill: 'forwards'});
    if (count >= images.length){
        count = 0;
    } 
    container.style.background = `url('${images[count]}')center/cover no-repeat`;
}

function prevSlide(){
    count--;
    container.animate([{opacity: '0.1'},{opacity: '1.0'}],
    {duration: 1000, fill: 'forwards'});
    if (count < 0){
        count = images.length -1;
    } 
    container.style.background = `url('${images[count]}')center/cover no-repeat`;
}