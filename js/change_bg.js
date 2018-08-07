$(window).scroll(function() {
    var windowY = $(window).height();
    console.log(windowY);
    var scrolledY = $(window).scrollTop();
    var image_url = 'images/page03/banner-10.jpg';

    if (scrolledY > windowY+50 && scrolledY  < windowY*3+150) {
        image_url = 'images/page03/bg03.jpg';
    }else if (scrolledY > windowY*3+100){
        image_url = 'images/page03/willa.jpg';
    }
    $("body").css({'background':"url(" + image_url + ")","background-size": "cover","background-repeat": "no-repeat","background-attachment": "fixed"});

});