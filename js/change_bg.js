$(document).ready(function () {
    $('.block01').height(windowY);
    $('.block02').height(windowY);
    if ($('.block03').height()<windowY){
        $('.block03').height(windowY);
    }
    $("body").addClass('body1')
});

$(window).scroll(function() {
    var windowY = $(window).height();
    var scrolledY = $(window).scrollTop();
    if (scrolledY<=windowY*1.1){
        $("body").addClass('body1').removeClass('body2');
        // var image_url = 'images/page03/banner-10.jpg';
    } else if (scrolledY > windowY*1.1 && scrolledY  < windowY*3.25) {
        $("body").addClass('body2').removeClass('body1');
        // image_url = 'images/page03/bg03.jpg';
    }else if (scrolledY > windowY*3){
        $("body").addClass('body2').removeClass('body3');
        // image_url = 'images/page03/willa.jpg';
    }
    // $("body").css({'background':"url(" + image_url + ")","background-size": "cover","background-repeat": "no-repeat","background-attachment": "fixed"});

});