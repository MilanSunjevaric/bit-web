// var welcomeMsg = 'Hello Javascript';
// var trigger = 'Learn More!'
// function element() {
//     console.log(welcomeMsg + " " + trigger);
// }
// element();

// function browsercheck() {
//     console.log(window.navigator.platform);
//     console.log(navigator.appVersion);
//     console.log(navigator.userAgent);
// }
// browsercheck();


// function isOnline() {
//     if (window.navigator.onLine == true) {
//         console.log("online");
//     }
//     else {
//         console.log('Offline');
//     }
// }
// isOnline();

// function browserInfo() {
//     console.log("current width =" + screen.availHeight + ", " + "current height" + "=" + screen.availWidth);
//     console.log("max height =" + screen.height);
// }
// browserInfo();


// function siteInfo() {
//     console.log(location.href);
//     console.log(location.hostname);
//     console.log(location.protocol);
//     console.log(location.search);
// }
// siteInfo();

// // function pageReload() {
// //     window.location.reload()

// // }
// // pageReload(;



// // function pageRedirect() {
// //     window.location.href = 'https://www.orimono.eu/';
// // }
// // pageRedirect()

// function passedData() {
//     localStorage.setItem('name', 'Pera');
//     localStorage.setItem('id1', 'Tom');
//     localStorage.setItem('id2', "John");
// }

// passedData();

// function getData(a) {


//     if (localStorage.length == 0) {
//         console.log("there is no data");

//     }
//     else {
//         console.log(localStorage.getItem(a));
//     }

// }

// getData('id2');

// function removeData() {
//     console.log(localStorage.clear());
// }
// removeData();



// function historyTab() {
//     console.log(history.length);
// }
// historyTab();





// var a = window.open("https://www.kls.rs/");
// console.log(a);

// function warningUser() {
//     alert('Hello chosen one!');
// }
// warningUser();

// function question() {
//     var a;
//     a = prompt('How old are you?');

//     var b = confirm("We will submit this answer " + a);

//     if (b == true) {
//         alert("Success")
//     } else {
//         alert("Stvarno si debil")
//     }
// }
// question();

// var a = window.open("https://www.google.com/");


// function foo() {
//     alert("caooooooo");
// }
// s);
// clearInterval();

// function colorSet() {
//     var cl2 = document.getElementById('list2');
//     cl2.className = 'novalista2';



// } colorSet();

// function listItems() {
//     var lis1 = document.getElementsByTagName('li');
//     for (i = 0; i < lis1.length; i++) {
//         lis1[i].className = 'list3';
//     }
// }
// listItems();


// function reOrder() {
//     var cl3 = document.querySelectorAll('ul');
//     var c = cl3[cl3.length - 1].querySelectorAll('li');
//     for (i = 0; i < c.length; i++) {
//         c[i].className = 'newlist';
//     }

// }
// reOrder();

function newClass() {
    var liel = document.getElementsByClassName("active")[0];
    liel.className = "";

    var g = document.documentElement.lastElementChild.firstElementChild.firstElementChild;
    g.className = 'active';

    // }
    // newClass();



    function screenAlert() {
        var msg = document.getElementById('nav').firstElementChild.textContent;

        alert(msg);

    } screenAlert();

    function textReplace() {

        var newMsg = document.getElementById('nav').childNodes[3].textContent;
        document.getElementById('nav').lastElementChild.textContent = newMsg;


    } textReplace();


    //DOM METODI

    // function buildItem() {



    var point1 = document.createElement("select");
    var finder = document.getElementById('nav');
    finder.appendChild(point1);


    var arr1 = ['cat', 'dog', 'mouse'];
    for (var i = 0; i < arr1.length; i++) {

        var option1 = document.createElement('option');
        var innerOptions = document.createTextNode(arr1[i]);
        option1.appendChild(innerOptions);
        point1.appendChild(option1);

    }
} buildItem();

// INNER METOD

// function buildingItem(array) {

//     var bond = document.querySelector("body");
//     bond.innerHTML = '<select></select>';
//     var sekcija = bond.querySelector('select');
//     var options = "";



//     for (var i = 0; i < arr1.length; i++) {

//         options = options + "<option>" + array[i] + "</option>";


//     }
//     sekcija.innerHTML = options;


// }
// buildingItem(['cat', 'dog', 'mouse']);


// function buildItem(arr1) {


//     var firstDiv = document.getElementById("engine1");
//     var secondDiv = document.getElementById("engine2");
//     var point1 = document.createElement("select");
//     var finder = document.getElementById('nav');

//     finder.appendChild(point1);
//     firstDiv.appendChild(point1);

//     for (var i = 0; i < arr1.length; i++) {

//         var option1 = document.createElement('option');
//         var innerOptions = document.createTextNode(arr1[i]);
//         option1.appendChild(innerOptions);
//         point1.appendChild(option1);

//     }


// } buildItem(['cat', 'dog', 'mouse']);
// buildItem(['cat', 'dog', 'mouse']);




// function formCheck() {

//     var firstEl = document.getElementsByClassName('name');

//     var altValue = firstEl.setAttribute('alt');




// } formCheck();



function change() {
    var input = document.getElementsByTagName('input');
    input[0].setAttribute('required', '');
    input[2].setAttribute('required', '');

    for (i = 0; i < input.length; i++) {
        if (input[i].hasAttribute('required')) {
            input[i].setAttribute('class', 'red');
        }
    }

} change();