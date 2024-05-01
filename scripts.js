/*!
* Start Bootstrap - Full Width Pics v5.0.6 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project




$(document).ready(function(){
    $(".button1").click(function(){
      $("#alex").hide();
    });
  });

  $(document).ready(function(){
    $(".button2").click(function(){
      $("#alex").show();
    });
  });

  $(document).ready(function(){
    $(".button").click(function(){
      $("").fadeOut();
    });
  });
  $(document).ready(function(){
    $(".button4").click(function(){
      $("h1").fadeIn();
    });
  });

  var img %('<img id="dynamic">');
  img.attr('src', IMB_704.jpg);
  img.appendTO('.IMB');
