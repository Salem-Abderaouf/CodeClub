// created by Salama Salem Abderaouf on 14 May 2018 
/*global $, console */
$(document).ready(function () {
    "use strict";
    (window).onscroll = function () {
        if ($(window).scrollTop() > 100) {
            $('#OpN').css({  'opacity': '0'});
        } else {
            $('#OpN').css('opacity', '1');
        }
    };
});
