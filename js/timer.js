
var countSeconds=55;
var countMinutes=32;
var countHours=24;

$(document).ready(function () {
    var secondDez=(countSeconds/10);
    var secondUnit=(countSeconds%10)+1;
    console.log(secondDez);
    secondPlayDozens(4);

    // if (secondDez!==5){
    // }

    var minutesDez=(countMinutes/10).toFixed();
    var minutesUnit=(countMinutes%10);


});

setInterval(function () {
    secondPlayUnits();
    countSeconds--;
    if (countSeconds % 10===0) {
        secondPlayDozens();
    }
    if (countSeconds===0){
        countSeconds=60;
        countMinutes--;
        minutePlayUnits();
    }
    if (countMinutes%10===0&&countSeconds%60===0){
        minutePlayDozens();
    }
    if (countMinutes===0){
        countMinutes=60;
        countHours--;
        hourPlayUnits();
    }
    if (countHours%10===0&&countMinutes%60===0&&countSeconds%60===0){
        hourPlayDozens();
    }
    if (countHours===0){
        countHours=24;
    }
}, 1000);

function secondPlayUnits() {
    $("body").removeClass("play");
    var aa = $("ul.secondPlayUnits li.active");

    if (aa.html() == undefined) {
        aa = $("ul.secondPlayUnits li").eq(0);
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");

    }
    else if (aa.is(":last-child")) {
        $("ul.secondPlayUnits li").removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $("ul.secondPlayUnits li").eq(0);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
    }
    else {
        $("ul.secondPlayUnits li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }

}

function secondPlayDozens(secondDez) {
    $("body").removeClass("play");
    var aa = $("ul.secondPlayDozens li.active");

    if (aa.html() == undefined) {
        aa = $("ul.secondPlayDozens li").eq(secondDez);
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");

    }
    else if (aa.is(":last-child")) {
        $("ul.secondPlayDozens li").removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $("ul.secondPlayDozens li").eq(0);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
    }
    else {
        $("ul.secondPlayDozens li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }

}

function minutePlayUnits() {
    $("body").removeClass("play");
    var aa = $("ul.minutePlayUnits li.active");

    if (aa.html() == undefined) {
        aa = $("ul.minutePlayUnits li").eq(0);
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");

    }
    else if (aa.is(":last-child")) {
        $("ul.minutePlayUnits li").removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $("ul.minutePlayUnits li").eq(0);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
    }
    else {
        $("ul.minutePlayUnits li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }

}

function minutePlayDozens() {
    $("body").removeClass("play");
    var aa = $("ul.minutePlayDozens li.active");

    if (aa.html() == undefined) {
        aa = $("ul.minutePlayDozens li").eq(0);
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");

    }
    else if (aa.is(":last-child")) {
        $("ul.minutePlayDozens li").removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $("ul.minutePlayDozens li").eq(0);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
    }
    else {
        $("ul.minutePlayDozens li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }

}

function hourPlayUnits() {
    $("body").removeClass("play");
    var aa = $("ul.hourPlayUnits li.active");

    if (aa.html() == undefined) {
        aa = $("ul.hourPlayUnits li").eq(0);
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");

    }
    else if (aa.is(":last-child")) {
        $("ul.hourPlayUnits li").removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $("ul.hourPlayUnits li").eq(0);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
    }
    else {
        $("ul.hourPlayUnits li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }

}

function hourPlayDozens() {
    $("body").removeClass("play");
    var aa = $("ul.hourPlayDozens li.active");

    if (aa.html() == undefined) {
        aa = $("ul.hourPlayDozens li").eq(0);
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");

    }
    else if (aa.is(":last-child")) {
        $("ul.hourPlayDozens li").removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $("ul.hourPlayDozens li").eq(0);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
    }
    else {
        $("ul.hourPlayDozens li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }

}

function setSecondUntit(secondUnit) {
    $("body").removeClass("play");
    var aa = $("ul.secondPlayUnits li.active");

    if (aa.html() == undefined) {
        aa = $("ul.secondPlayUnits li").eq(0);
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");

    }
    else if (aa.is(":last-child")) {
        $("ul.secondPlayUnits li").removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $("ul.secondPlayUnits li").eq(Math.abs(10-secondUnit));
        aa.addClass("active")
            .closest("body")
            .addClass("play");
    }
    else {
        $("ul.secondPlayUnits li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }
}

function setSecondDez(secondDez) {
    $("body").removeClass("play");
    var aa = $("ul.secondPlayDozens li.active");

    if (aa.html() == undefined) {
        aa = $("ul.secondPlayDozens li").eq(0);
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");

    }
    else if (aa.is(":last-child")) {
        $("ul.secondPlayDozens li").removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $("ul.secondPlayDozens li").eq(Math.abs(10-secondDez));
        aa.addClass("active")
            .closest("body")
            .addClass("play");
    }
}

