window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("nav").css("padding-top", "10px");
        $("nav").css("padding-bottom", "10px");
    } else {
        $("nav").css("padding-top", "50px");
        $("nav").css("padding-bottom", "50px");
    }
}