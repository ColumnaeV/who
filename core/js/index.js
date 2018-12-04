//Loading//
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('body-container').style.opacity="0";
  } else if (state == 'complete') {
      setTimeout(function(){
          document.getElementById('interactive');
          document.getElementById('load').style.cssText="opacity:0;z-index:-2;";
          document.getElementById('body-container').style.opacity="1";
      },500);
  }
}

$(document).ready(function (){
    if ($(window).width() < $(window).height()) {
        $('.ds-split').removeClass('desktop-mode');
        $('.page').removeClass('desktop-mode');
    }
    else {
        $('.ds-split').addClass('desktop-mode');
        $('.page').addClass('desktop-mode');
    }
    //Other//
    var viewportHeight = $(window).outerHeight();
    var viewportWidth = $(window).outerWidth();
    var ratioFix = (viewportHeight/viewportWidth)
    var heightCorrection = (ratioFix*100 + "vw");
    console.log(viewportHeight);
    console.log(viewportWidth);
    console.log(ratioFix);
    console.log(heightCorrection);
    $('.cover-page').css({ minHeight: heightCorrection });
    $('.desktop-mode').css({ minHeight: heightCorrection });
    //Smooth Scrolling//
    $("html").easeScroll({
        frameRate: 120,
        animationTime: 1500,
        stepSize: 60,
        pulseAlgorithm: 1,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 1,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 50,
        touchpadSupport: true,
        fixedBackground: true
    });
    
});