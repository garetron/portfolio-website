console.log("Thanks for checking out my code! - Gareth Hobbs");

// Toggle the hamburger menu as visible or not

var viewportWidth = $(window).width();

function menuToggle() {
  var x = document.getElementById("myNavtoggle");
  if (x.className === "navtoggle" && viewportWidth < 640) {
    x.className += " responsive"; //add class name with space "_" to seperate addition
  } else {{
    x.className = "navtoggle";
  }
}

// Hide or show header on scrolling - animation duration set in header CSS

var prev = 0;
var $window = $(window);
var nav = $("header");

$window.on("scroll", function () {
  var scrollTop = $window.scrollTop();
  nav.toggleClass("hidden", scrollTop > prev);
  prev = scrollTop;
});
