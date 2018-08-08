$(window).scroll(function() {
    var windowY = $(window).height();
    var scrolledY = $(window).scrollTop();

    var image_url = 'images/page03/banner-10.jpg';
    $('.block01').height(windowY);
    $('.block02').height(windowY);
    if ($('.block03').height()<windowY){
        console.log("$('.block03').height()<windowY===true");
        $('.block03').height(windowY);
    }
    if (scrolledY > windowY*1.1 && scrolledY  < windowY*3.25) {
        image_url = 'images/page03/bg03.jpg';
    }else if (scrolledY > windowY*3){
        image_url = 'images/page03/willa.jpg';
    }
    $("body").css({'background':"url(" + image_url + ")","background-size": "cover","background-repeat": "no-repeat","background-attachment": "fixed"});

});