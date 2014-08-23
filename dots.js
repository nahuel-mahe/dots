(function () {
  $(document).on('pageshow', '#home', function (e) {
    var time1, time2, time3, time4, time5, time6, time7, time8, time9, time10;

    $(document).on('swiperight', function () {
      _rotateRight()
    });
    $(document).on('swipeleft', function () {
      _rotateLeft()
    });

    function _rotateRight() {
      clearTimeout(time6);
      clearTimeout(time7);
      clearTimeout(time8);
      clearTimeout(time9);
      clearTimeout(time10);
      $('.dot1').addClass('dot-rotate1').removeClass('dot-rotate2');
      time1 = setTimeout(function () {
        $('.dot2').addClass('dot-rotate1').removeClass('dot-rotate2');
      }, 100);
      time2 = setTimeout(function () {
        $('.dot3').addClass('dot-rotate1').removeClass('dot-rotate2');
      }, 200);
      time3 = setTimeout(function () {
        $('.dot4').addClass('dot-rotate1').removeClass('dot-rotate2');
      }, 300);
      time4 = setTimeout(function () {
        $('.dot5').addClass('dot-rotate1').removeClass('dot-rotate2');
      }, 400);
      time5 = setTimeout(function () {
        $('.dot6').addClass('dot-rotate1').removeClass('dot-rotate2');
      }, 500);
    }

    function _rotateLeft() {
      clearTimeout(time1);
      clearTimeout(time2);
      clearTimeout(time3);
      clearTimeout(time4);
      clearTimeout(time5);
      $('.dot1').addClass('dot-rotate2').removeClass('dot-rotate1');
      time6 = setTimeout(function () {
        $('.dot2').addClass('dot-rotate2').removeClass('dot-rotate1');
      }, 100);
      time7 = setTimeout(function () {
        $('.dot3').addClass('dot-rotate2').removeClass('dot-rotate1');
      }, 200);
      time8 = setTimeout(function () {
        $('.dot4').addClass('dot-rotate2').removeClass('dot-rotate1');
      }, 300);
      time9 = setTimeout(function () {
        $('.dot5').addClass('dot-rotate2').removeClass('dot-rotate1');
      }, 400);
      time10 = setTimeout(function () {
        $('.dot6').addClass('dot-rotate2').removeClass('dot-rotate1');
      }, 500);
    }
  });
})();
