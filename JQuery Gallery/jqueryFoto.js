$(function () {
    var foto1 = 'https://www.w3schools.com/howto/img_snow.jpg';
    var foto2 = 'https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg';
    var foto3 = 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
    var foto4 = 'https://images.immediate.co.uk/production/volatile/sites/23/2019/10/39r_CMYK-46a0fd4.jpg?quality=45&resize=620,413';
    var foto5 = 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';
    var foto6 = 'https://assets.newatlas.com/dims4/default/5e3dacd/2147483647/strip/true/crop/7360x4911+0+1/resize/1160x774!/quality/90/?url=https%3A%2F%2Fassets.newatlas.com%2Farchive%2Faperture-guide-2.jpg'
    var array = [foto1, foto2, foto3, foto4, foto5, foto6];

    var $div = $('<div>');
    for (var i = 0; i < array.length; i++) {
        var $img = $('<img>');

        $img.attr('src', array[i]);

        var widthValue = Math.floor(Math.random() * 400) + 50

        $img.css('width', widthValue);

        $div.append($img);

        if (widthValue < 200) {
            $img.css('border', 'green dotted 10px');
        }
    }
    $('body').append($div)
})()