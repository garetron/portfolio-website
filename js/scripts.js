console.log("Thanks for checking out my code! - Gareth Hobbs");

// Toggle the hamburger menu as visible or not

var viewportWidth = $(window).width();

function menuToggle() {
  var x = document.getElementById("myNavtoggle");
  if (x.className === "navtoggle" && viewportWidth < 640) {
    x.className += " responsive"; //add class name with space "_" to seperate addition
    $(".header-logo").css("float", "none");
  } else {
    x.className = "navtoggle";
    $(".header-logo").css("float", "left");
  }
}

function closeMenuToggle() {
  var x = document.getElementById("myNavtoggle");
  x.className = "navtoggle";
  $(".header-logo").css("float", "left");
}

// Hide or show header on scrolling - animation duration set in header CSS

var prev = 0;
var $window = $(window);
var nav = $("header");

$window.on("scroll", function () {
  var scrollTop = $window.scrollTop();
  if (scrollTop === 0) {
  } else if (scrollTop > 11) {
    nav.toggleClass("hidden", scrollTop > prev);
    prev = scrollTop;
  }
});

//HEADER TRANSPARANT

$window.on("scroll", function () {
  var scrollTop = $window.scrollTop();
  if (viewportWidth >= 1234) {
    $(".index-nav").toggleClass("scrolled", scrollTop > 201);
  }
});

$(".header-logo").hover(
  function () {
    console.log("yeah its working");
    $(".header-logo img").attr("src", "img/global/gh-logo-color-brighter.png");
  },
  function () {
    $(".header-logo img").attr("src", "img/global/gh-logo-color.png");
  }
);
