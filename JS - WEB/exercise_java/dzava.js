/* function setColor() {
    var boja = document.querySelectorAll('ul')[1];
    boja.className = 'red';
}
setColor();

function setClr() {
    var set = document.getElementsByTagName('li');
    for (var i = 0; i < set.length; i++) {
        set[i].className = "green";
    }

}
setClr();

function setLast() {
    var last = document.querySelectorAll('ul')[2];
    var lista = last.querySelectorAll('li');


    for (var i = 0; i < lista.length; i++) {
        if (i % 2 === 0) {
            lista[i].className = "blue";
        } else {
            lista[i].className = "grey";
        }
    }
}
setLast(); */


/* function setOne() {
    var one = document.querySelector('.active');

    one.className = '';

    var two = document.querySelectorAll('div')[1];
    var smt = two.firstElementChild.firstElementChild;
    smt.className = 'grey';

}

setOne(); */





/* Access/Update Text Node
Create an unordered list containing <li> items that represent navigation.

Create a function that takes text from one of the <li> elements and presents it on screen using alert.

Create one more function.
The function should take some text as an argument.
The function should select the last <li> element in the list and replace its text with text passed as the function argument.





function takeASomeTxt(poruka) {

    var elmnt = document.querySelector('ul');

    var ende = elmnt.lastElementChild;
    ende.textContent = poruka;

}
takeASomeTxt('Prosledjena poruka');
 */






/* var options = ["Volvo", "Saab", "Opel"];

function builder(options) {

    var bodibond = document.querySelector("body");
    var sekcija = document.createElement("select");


    for (var i = 0; i < options.length; i++) {
        var text = document.createTextNode(options[i]);
        var opcija = document.createElement("option");

        opcija.appendChild(text);
        sekcija.appendChild(opcija);

    }
    bodibond.appendChild(sekcija);

}
builder(options);
 */
/*
 function builder(array) {
    var bodibond = document.querySelector("body");
    bodibond.innerHTML = '<select></select>';
    var sekcija = bodibond.querySelector("select");
    var options = "";

    for (var i = 0; i < option.length; i++) {
        options = options + "<option>" + array[i] + "</option>"
    }

    sekcija.innerHTML = options;
}
builder(["Volvo", "Saab", "Opel"]);   */


/*
function builder(arrayFirst, arraySecond) {
    var bodibond = document.querySelector('body');
    bodibond.innerHTML = '<div></div><div></div>'
    var divFirst = bodibond.firstElementChild;
    divFirst.innerHTML = '<select></select>';
    var divSecond = bodibond.lastElementChild;
    divSecond.innerHTML = '<select></select>';
    var selectOne = divFirst.querySelector("select");
    var selectTwo = divSecond.querySelector("select");
    var optionOne = "";
    var optionTwo = "";

    for (var i = 0; i < arrayFirst.length; i++) {
        optionOne = optionOne + "<option>" + arrayFirst[i] + "</option>";
        optionTwo = optionTwo + "<option>" + arraySecond[i] + "</option>";
    }
    selectOne.innerHTML = optionOne;
    selectTwo.innerHTML = optionTwo;
}
builder(["Volvo", "Saab", "Opel"], ["motorcycle", "car", "bicycle"]);*/


/* var bodibond = document.querySelector("body");
var arrayOne = ["Volvo", "Saab", "Opel"];
var arrayTwo = ["motorcycle", "car", "bicycle"];


function builder(array) {

    bodibond.innerHTML = '<select></select>';
    var sekcija = bodibond.querySelector("select");
    var options = "";

    for (var i = 0; i < array.length; i++) {
        options = options + "<option>" + array[i] + "</option>"
    }

    sekcija.innerHTML = options;
}
builder(arrayTwo); */


function validation() {

    var forma = document.querySelector('form');
    var inputi = forma.getElementsByTagName('input');


    for (var i = 0; i < inputi.length; i++) {
        if (inputi[i].hasAttribute('required') && !inputi[i].hasAttribute('value')) {
            inputi[i].classList.add('borderClr');

        }
    }
}
validation();















