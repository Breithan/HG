$(window).scroll(function() {
     parallax();
})

function parallax() {
  var scroll = $(window).scrollTop();
  var screenHeight = $(window).height();

  $('.parallax').each(function() {
    var offset = $(this).offset().top;
    var distanceFromBottom = offset - scroll - screenHeight

    if (offset > screenHeight && offset) {
      $(this).css('background-position', 'center ' + (( distanceFromBottom  ) * 0.5) +'px');
    } else {
      $(this).css('background-position', 'center ' + (( -scroll ) * 0.5) + 'px');
    }
  })
}

window.onload = function() {
  document.onmousemove = function(e) {
    var x = -(e.clientX/75);
    var y = -(e.clientY/100);

    document.getElementById("imgCap1").style.backgroundPosition = x + 'px ' + y + 'px';
    document.getElementById("imgCap2").style.backgroundPosition = x + 'px ' + y + 'px';
  };
};
