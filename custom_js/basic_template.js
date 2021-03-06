/* Personal additions to standard bootstrap javascript
   Damien Robertson 2014 */

"use strict";

/* Function to decide the time of day which sets the
   default solarized theme */

function myTime() {
  var currentDate = new Date();
  var currentHour = currentDate.getHours();
  if ((currentHour >= 6) && (currentHour < 18)) {
    $('.btn-light').trigger('click');
  };
};

$(document).ready(function() {
  
  /* Script for alt text on certain words  */
  
  $('.masterQuote').hover(function(event){
    var quoteID = $(this).attr('quoteID');
    var boxWidth = $('.container');
    var quoteWidth = $('.quote#'+quoteID)
    if (boxWidth.width() < quoteWidth.width()) {
      $('.quote#'+quoteID).css('width', boxWidth.width());
    } else {
      $('.quote#'+quoteID).css('left', event.pageX);
      $('.quote#'+quoteID).css('max-width', '400px');
    };
    $('.quote#'+quoteID).css('display', 'block');
  }, function() {
    $('.quote').css('display', 'none');
    $('.quote').css('width', 'auto');
    $('.quote').css('left', '');
    $('.quote').css('max-width', '');
  });
  
  /* Colour rules for Solarized Light */
  
  $('.btn-light').click(function() {
    $('body').css('background-color', '#fdf6e3');
    $('body').css('border-color', '#586e75');
    $('body').css('color', '#657b83');
    $('h2').css('color', '#586e75');
    $('h3').css('color', '#586e75');
    $('h4').css('color', '#586e75');
    $('hr').css('border-color', '#93a1a1');
    $('code').css('background-color', '#eee8d5');
    $('pre').css('background-color', '#eee8d5');
    $('.quote').css('background-color', '#eee8d5');
    $('.quote').css('color', '#586e75');
    $('.btn-default').hover(function() {
      $(this).css('background-color', '#eee8d5');
    }, function() {
      $(this).css('background-color', 'inherit');
    });
    $('.navbar-collapse').css('background-color', '#eee8d5');
    $('.navbar-collapse').css('border-color', '#eee8d5');
    $('.navbar-form').css('border-color', '#eee8d5');
    $('.navbar-inverse').css('background-color', '#eee8d5');
    $('.navbar-toggle').css('border-color', '#93a1a1');
    $('.dropdown-menu').css('background-color', '#eee8d5');
    $('.dropdown-menu').css('border-color', '#eee8d5');
    $('.divider').css('border-color', '#93a1a1');
    
    /* Change the header image from Dark to Light 
    
    var imgSrc = $('.banner-image').attr('src').replace("perseus_solarized_dark2light.png", "perseus_solarized_light2dark.png");
    $('.banner-image').attr('src', imgSrc); */
  });
  
  /* Colour rules for Solarized Dark */
  
  $('.btn-dark').click(function() {
    $('body').css('background-color', '#002b36');
    $('body').css('border-color', '#93a1a1');
    $('body').css('color', '#839496');
    $('h2').css('color', '#93a1a1');
    $('h3').css('color', '#93a1a1');
    $('h4').css('color', '#93a1a1');
    $('hr').css('border-color', '#586e75');
    $('code').css('background-color', '#073642');
    $('pre').css('background-color', '#073642');
    $('.quote').css('background-color', '#073642');
    $('.quote').css('color', '#93a1a1');
    $('.btn-default').hover(function() {
      $(this).css('background-color', '#073642');
    }, function() {
      $(this).css('background-color', 'inherit');
    });
    $('.navbar-collapse').css('background-color', '#073642');
    $('.navbar-collapse').css('border-color', '#073642');
    $('.navbar-form').css('border-color', '#073642');
    $('.navbar-inverse').css('background-color', '#073642');
    $('.navbar-toggle').css('border-color', '#586e75');
    $('.dropdown-menu').css('background-color', '#073642');
    $('.dropdown-menu').css('border-color', '#073642');
    $('.divider').css('border-color', '#586e75');
    
    /* Change the header image from Light to Dark
    
    var imgSrc = $('.banner-image').attr('src').replace("perseus_solarized_light2dark.png", "perseus_solarized_dark2light.png");
    $('.banner-image').attr('src', imgSrc); */
  });
});

/* Function to load most current version of CV built from markdown file */

$(document).ready(function() {
  $('#cv_content').load('../docs/cv_content.html');
});

/* Function to load current blog links */

$(document).ready(function() {
  $('#note_content').load('../note/note_content.html');
});
