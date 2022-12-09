console.log("Thanks for checking out my code! - Gareth Hobbs");

// Toggle the hamburger menu as visible or not

var viewportWidth = $(window).width();

var mouseX = 0,
  mouseY = 0,
  xp = 0,
  yp = 0;

$("#hero").mousemove(function (e) {
  mouseX = e.pageX - 30;
  mouseY = e.pageY - 30;

  xp += (mouseX - xp) / 12;
  yp += (mouseY - yp) / 12;

  $(".circle").css({
    display: "block",
    left: xp + "px",
    top: yp + "px",
  });
});

$("#work").mouseenter(function () {
  $(".circle").css({
    display: "none",
  });
});

function menuToggle() {
  var x = document.getElementById("myNavtoggle");
  if (x.className === "navtoggle" && viewportWidth < 640) {
    x.className += " responsive"; //add class name with space "_" to seperate addition
  } else {
    x.className = "navtoggle";
  }
}

// Hide or show header on scrolling - animation duration set in header CSS

var prev = 0;
var $window = $(window);
var nav = $("header");

// ADD COLORS ON HOVER ABOVE PAGE
$(".fun-heading").hover(
  function () {
    // $(".logo").addClass("fun-heading-always");
    $(".fun-heading").addClass("fun-heading-always");
    // $(".going-to-raise").addClass("raise-up");
    var allfun = document.getElementsByClassName("fun-heading");
    $("#hero").addClass("fun-bg-always");
    $(".b-or-w").addClass("b-or-w-always");
  },
  // REMOVE COLORS AFTER HOVER HAS ENDED
  function () {
    // $(".logo").removeClass("fun-heading-always");
    // $(".fun-heading").removeClass("fun-heading-always");
    // $(".going-to-raise").removeClass("raise-up");
    // $("#hero").removeClass("fun-bg-always");
    // $(".b-or-w").removeClass("b-or-w-always");
  }
);
// REMOVE COLORS WHEN HERO IS CLICKED
$(".circle").click(function () {
  // $(".logo").removeClass("fun-heading-always");
  $(".fun-heading").removeClass("fun-heading-always");
  // $(".going-to-raise").removeClass("raise-up");
  $("#hero").removeClass("fun-bg-always");
  $(".b-or-w").removeClass("b-or-w-always");
});

$window.on("scroll", function () {
  var scrollTop = $window.scrollTop();
  if (scrollTop === 0) {
  } else if (scrollTop > 11) {
    nav.toggleClass("hidden", scrollTop > prev);
    prev = scrollTop;
  }
});
