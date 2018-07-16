$(document).ready(function() {

        // Transition effect for navbar and back-to-top icon
        $(window).scrollTo(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 550) {
              $('.navbar').addClass('solid');
              $('.back-to-top').addClass('hidden');
          } else {
              $('.navbar').removeClass('solid');
              $('.back-to-top').removeClass('hidden');
          }

        });
