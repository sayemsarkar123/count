$(function () {
  "use strict";
  
  // jQuery Countdown
  
  $('#getting-started').countdown('2020/06/04', function(event) {
    $(this).html(event.strftime('<div><span>%D</span>Days</div><div><span>%H</span>Hours</div><div><span>%M</span>Minutes</div><div><span>%S</span>Seconds</div>'));
  });
  
  $(".main").ripples({
  resolution: 512,
  dropRadius: 10,
  perturbance: 0.5
  });
  

})(jQuery);