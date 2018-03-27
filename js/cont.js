window.onload = function() {
  document.onmousemove = function(e) {
    var x = -(e.clientX/25);
    var y = -(e.clientY/50);

    document.getElementById("divSec1").style.backgroundPosition = x + 'px ' + y + 'px';
  };
};
