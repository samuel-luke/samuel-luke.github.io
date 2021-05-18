// Calculate Age
$(document).ready(function() {
    dob = new Date("1999-02-16");
    var today = new Date();
    var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
    $('#age').html(age);
});