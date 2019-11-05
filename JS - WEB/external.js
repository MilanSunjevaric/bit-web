(function add() {
    console.log(navigator.appVersion, navigator.platform, navigator.userAgent);

})();

function isOnline() {
    if (navigator.onLine === true) {
        console.log("Online")
    } else { console.log('Ofline') }
}

isOnline();


function info() {
    console.log(window.screen.height, window.screen.width);
    console.log(window.screen.availHeight, window.screen.availWidth);
}
info();






/* window.location
Write a function that prints out website’s url information in the console:
full url address
domain name
used protocol
parameters which are part of URL.

Create a function for reloading the page.
Create a function that redirects you to a website address passed to it.
Test all three functions
 */

function information() {
    console.log(location.href, location.hostname);
    console.log(location.hostname);
    console.log(location.protocol);
    console.log(location.port);
    console.log(location.search);
}
information();

/* function reloading() {
    window.location.href = 'https://www.google.rs';
}

reloading(); */

function reload() {
    window.location.reload;
}
reload();


/* window.localStorage
Create a function that stores passed data in the browser local storage.
Create a function that reads the stored data, and print it out in console.
If there is no data, print "There is no data" in the console.
Create a function that removes data from the local storage.

Use the previously created functions to store/read/remove some data.
Then add some data in storage and close the browser.
Open the browser again on the same page and use the function to read the stored value.

Modify functions to work with sessionStorage instead of localStorage.
Try same scenario as with localStorage to examine data livecycle.

 */

function data() {

    localStorage.setItem('name', 'vladica');
}
data();

function item() {
    if (window.localStorage.length !== 0) {
        console.log(localStorage.getItem('name'));
    }
    else {
        console.log('There is no data');
    }
}
item();




function clearing() {
    localStorage.clear();
}
clearing();



function item() {
    if (window.localStorage.length !== 0) {
        console.log(localStorage.getItem('name'));
    }
    else {
        console.log('There is no data');
    }
}
item();

function backing() {
    history.back();
}

backing();

function fowarding() {
    history.forward();
}

fowarding();






function boo() {
    console.log('Something')
}
setTimeout(boo, 3000);


function foo() { console.log('FOO!!!!'); }
var fooInter = setInterval(foo, 2000);

setTimeout(function () {
    clearInterval(fooInter);
}, 5000)


/* 

Window Methods
Create a function that shows the user a greeting message using alert
Then a question is presented to the user using prompt
When the user provides the answer, that answer is used in the confirm dialog
The format of the message in the dialog should be: "We will submit this answer now! " + the answer
If the user clicks OK, show alert with success message
If the user clicks Cancel, don't show anything
 */


function alrt() {
    window.alert('Zdravo!');
    window.prompt("Upisi odogovor");
    window.confirm("Da li si siguran?");
    window.alert('Uspesno ste poslali poruku');

}



alrt();


/* alrt();

function prompter() {

}


 */




