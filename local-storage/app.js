document.querySelector('.btn').addEventListener('click', function(e){
    const input = document.querySelector('.form-control');
    if (input.value === ''){
        alertMessage('Insert a message','danger');
    }else{
        addMessage();
        alertMessage("Message added", "success");
    }
});

function alertMessage(text, color = 'black'){
    setTimeout(clearAlert, 2000);
    const alertMessage = document.querySelector('.alert-message');
    alertMessage.innerHTML = text;
    alertMessage.classList.add(`text-${color}`);
}

function clearAlert(){
    document.querySelector('.alert-message').innerHTML = '';
}

function addMessage(){
    const input = document.querySelector('.form-control').value;
    // const messages = document.querySelector('.messages');
    // console.log(input);
    // const message = document.createElement('div');
    // message.innerHTML = `${input}<hr>`;
    // message.classList.add('messages');
    // messages.appendChild(message);
    document.querySelector('.form-control').value = '';
    addToStorage(input);
}

function addToStorage(input){
    let messages;
    if (localStorage.getItem('messages') === null){
        messages = [];
    } else {
        messages = JSON.parse(localStorage.getItem('messages'));
    }
    messages.push(input);
    localStorage.setItem('messages', JSON.stringify(messages));
    messages.forEach(function(item){
     console.log(item);
    });
    // messages.array.forEach(item => {
    //     console.log(item);
    // });
}


document.querySelector('.clear-all').addEventListener('click', function(e){
    localStorage.clear();
})
