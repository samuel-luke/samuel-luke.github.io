// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop >  80 || document.documentElement.scrollTop > 80) {
//         $("nav").css("height", "10vh");
//     } else {
//         $("nav").css("height", "25vh");
//     }
// }

// Calculate Age
$(document).ready(function() {
    dob = new Date("1999-02-16");
    var today = new Date();
    var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
    $('#age').html(age);
})