$(window).scroll(function() {
    parallax();
})

function parallax() {
    var scroll = $(window).scrollTop();
    var screenHeight = $(window).height();

    $('.parallax').each(
        function() {
            var offset = $(this).offset().top;
            var distanceFromBottom = offset - scroll - screenHeight;

            if (offset > screenHeight && offset) {
                $(this).css('background-position', 'center ' + ((distanceFromBottom) * 0.5) + 'px');
            }

            else {
                $(this).css('background-position', 'center ' + ((-scroll) * 0.5) + 'px');
            }
        }
    )
}

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