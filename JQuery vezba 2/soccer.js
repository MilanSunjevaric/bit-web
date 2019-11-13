$(function () {
    var $igrac = $("img");

    function movePlayer(event) {
        $igrac.animate({
            top: (event.clientY - 50) + "px",
            left: (event.clientX - 50) + "px"
        })
    };

    $(".field").on("click", movePlayer);


    function stop() {
        $(".field").off();
    }


})