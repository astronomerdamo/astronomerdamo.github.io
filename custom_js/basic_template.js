"use strict";

$(document).ready(function() {
  $('.drop-menu').hover(function(){
    $(this).children('ul').fadeIn();
  }, function(){
    $(this).children('ul').fadeOut();
  });
});