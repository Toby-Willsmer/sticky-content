(function(){

  $(window).scroll(function(){
    var stickyClass = ['.sticky-cell', '.sticky-wrapper'],
        stuckClass  = ['stuck-top', 'stuck-lower'],
        scroll      = getCurrentScroll(),
        $hedHght    = $('header').height(), // add more here if needed e.g ' + $('element').height()'
        $heights    = $(stickyClass[1]).height() - $(stickyClass[0]).outerHeight() + $hedHght;

    if(scroll >= $hedHght) {
      $(stickyClass[0]).addClass(stuckClass[0]);
      if(scroll >= $heights) {
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