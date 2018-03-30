window.onload = function() {
    document.onmousemove = function(e) {
        var x = -(e.clientX / 30);
        var y = (e.clientY / 30);

        $('.float').each(
            function() {
                $(this).css({"right": (x + y) + 'px'});
            }
        )

    };
};

$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1250, function () {
                window.location.hash = hash;
            });
        }
    });
});

function aColor() {
    $('a').css({ "border": 3 + 'px' + 'solid' + 'grey'});
    console.log('hola');
}
