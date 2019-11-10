var teren = document.querySelector(".field");
var event1 = a.addEventListener("click", movePlayer);
var igrac = document.querySelector("img");

function movePlayer(event) {
    var x = event.clientX;
    var y = event.clientY;
    igrac.style.top = (y - 0) + "px";
    igrac.style.left = (x - 0) + "px";
};

function stop() {
    teren.removeEventListener("click", movePlayer);
}