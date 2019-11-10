/*
function colorClass() {

    var newC = document.querySelector('.r1');

    return newC.classList.toggle("color1");

}


function disable() {

    var but = document.querySelector('.s1');

    return but.removeAttribute('onclick');
} */


////// ZADATAK 2

function chatroom() {
    var box = document.querySelector('.txt');
    var button = document.querySelector('.send');
    var chatroom1 = document.querySelector('.chat1');
    button.onclick = function() {
        var text1 = document.createElement('span');
        chatroom1.appendChild(text1);
        text1.textContent = box.value;



    }

}

chatroom();