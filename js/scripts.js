console.log("Thanks for checking out my code! - Gareth Hobbs")



function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle' && viewportWidth <= 640) {
        x.className += ' responsive'; //add class name with space "_" to seperate addition
        
    } else {
        x.className = 'navtoggle';
    }
}


var viewportWidth = $( window ).width();
var navTog = document.getElementById('myNavtoggle');
var responsiveTog = document.getElementsByClassName('navtogg');

console.log("The viewport is " + String(viewportWidth) + "px")


if (viewportWidth >= 640) {
    navTog.style.width = null;
    navTog.style.marginLeft = null;
    console.log("removed the style tags from nav");
} else {
    navTog.style.width = String(viewportWidth) + "px";
    navTog.style.marginLeft = "-16px";
    console.log("set max width for nav");
}


var prev = 0;
var $window = $(window);
var nav = $('header');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;
});




