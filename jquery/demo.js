var program = (function () {
    var linkOne = " https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    var linkTwo = "https://d1yn1kh78jj1rr.cloudfront.net/image/thumbnail/rGMF3jSims9o98x/storyblocks-sunset-over-rocky-sea-coast_H8ogAvuyf_thumb.jpg";
    var linkThree = "https://www.w3schools.com/w3css/img_lights.jpg";
    var linkFour = "https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg";
    var linkFive = "http://webmeup.com/upload/blog/lead-image-105.png";
    var linkSix = "https://www.birthdaywishes.expert/wp-content/uploads/2015/10/cover-photo-good-morning-images.jpg";

    var linkArray = [linkOne, linkTwo, linkThree, linkFour, linkFive, linkSix];

    var $div = $("<div>");

    for (var i = 0; i < linkArray.length; i++) {
        var randomWidth = Math.floor(Math.random() * 400) + 100;

        var $image = $("<img>")
            .attr("src", linkArray[i])
            .width(randomWidth);

        $div.append($image);
    }

    $("body").append($div);

    $('img').each(function (i, image) {
        var $img = $(image)
        if ($img.width() > 300) {
            return false;
        }
        $img.addClass('imgBorder');
    })
})()
