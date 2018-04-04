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


