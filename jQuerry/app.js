$(function () {
    console.log("Hello World!");

    var listItem = $('li');
    $('ul').hide().delay(500).fadeIn(500).fadeOut(5000).delay(500).fadeIn(500).fadeOut(5000).delay(500).fadeIn(500).fadeOut(5000).delay(500).fadeIn(500).fadeOut(5000).fadeIn(500);
    $('li:first').toggleClass('border');
    listItem.addClass("toUpper")
    $('li:odd').toggleClass('bckColor');
    $('li.active').addClass('font');
})


