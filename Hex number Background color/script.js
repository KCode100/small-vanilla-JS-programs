const buttonUI = document.querySelector('.container');
const body = document.querySelector('body');
const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
const html = document.querySelector('html');
// buttonUI.addEventListener('click', changeBG);

html.addEventListener('click', check);

function check(e){
   if (e.target.classList.contains('container') || e.target.parentElement.classList.contains('container')){
    changeBG();
    } else if (e.target.classList.contains('copy')){
        copy(e);
    }
}

function changeBG(){
        let hexNum = '#';
        const output = document.querySelector('.hex');
        const css = document.querySelector('.css');
        for (let i = 0; i < 6; i++){
            const random = Math.floor(Math.random()*colors.length);
            hexNum += colors[random];
        }
        output.innerHTML = `
        <hr>
        <div>
            ${hexNum}
        <span> <i class=" copy copy-hex far fa-copy fa-xs"></i> </span>
        </div>
        `
        css.innerHTML = `
        <div>
        {background-color: ${hexNum};}
        <span> <i class=" copy copy-css far fa-copy fa-xs"></i> </span>
        </div>
        `;
        body.style.backgroundColor = hexNum;
}


function copy(e){
    const text = e.target.parentElement.parentElement.textContent;
    console.log(text);
    text.select();
    // text.select();
    // document.execCommand('copy');
    // alert("copied");
    // console.log(e.target.parentElement.parentElement.textContent);
}