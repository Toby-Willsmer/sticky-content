(function(){

  $(window).scroll(function(){
    var stickyClass = ['.sticky-cell', '.sticky-wrapper'],
        stuckClass  = ['stuck-top', 'stuck-lower'],
        scroll      = getCurrentScroll(),
        $hedHght    = $('header').height(), // or integer
        $stkHght    = $(stickyClass[0]).outerHeight(),
        $stkWrp     = $(stickyClass[1]).height();

    if(scroll >= $hedHght) {
      $(stickyClass[0]).addClass(stuckClass[0]);
      if(scroll >= $stkWrp - $stkHght + $hedHght) { //$hedHeight is the header offset
        $(stickyClass[0]).removeClass(stuckClass[0]).addClass(stuckClass[1]);
      } else {
        $(stickyClass[0]).removeClass(stuckClass[1]).addClass(stuckClass[0]);
      }
    } else {
      $(stickyClass[0]).removeClass(stuckClass[0]);
    }
  });

  function getCurrentScroll() {
    return window.pageYOffset;
  }

})();