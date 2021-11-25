document.addEventListener("DOMContentLoaded", function () {
  //TOGGLE NAV
  var mymenubutton = document.querySelector('.menu-button')
  var mytogglemenu = document.querySelector('.toggle-nav')

  mymenubutton.addEventListener('click', function () {
    mytogglemenu.classList.toggle('expanded');
  });

  // reveal point from bottom and top of the window
  var revealerpoint = 150;
  window.addEventListener('scroll', reveal);
  reveal();

  function reveal() {
    console.log("scrolling");
    var revealers = document.querySelectorAll('.revealer');
    var activesectionname = "";
    for (var i = 0; i < revealers.length; i++) {
      var windowheight = window.innerHeight;
      var revealertop = revealers[i].getBoundingClientRect().top;
      var revealerbottom = revealers[i].getBoundingClientRect().bottom;
      //console.log("revealertop: " + revealertop);
      //console.log("revealerbottom: " + revealerbottom);
      if (revealertop < windowheight - revealerpoint) {
        revealers[i].classList.add('active')
        activesectionname = revealers[i].id;
      } else {
        revealers[i].classList.remove('active');
        var activesectionname = "";
      };
      if (revealerbottom < 0 + revealerpoint) {
        revealers[i].classList.remove('active');
        var activesectionname = "";
      }

      // SETS ACTIVE STATE ON PAGE NAV
      var pagenavitems = document.querySelectorAll('.page-nav a');
      for (var j = 0; j < pagenavitems.length; j++) {
        if (pagenavitems[i].href.split("#")[1] === activesectionname) {
          pagenavitems[i].classList.add('active');
        } else {
          pagenavitems[i].classList.remove('active');
        }
      }
      console.log(activesectionname);

    }
  };
});