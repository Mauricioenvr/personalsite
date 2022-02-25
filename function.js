$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });

  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("menuToggle");
  if (x.className === "menuToggle") {
    x.className += " responsive";
  } else {
    x.className = "menuToggle";
  }
} 

