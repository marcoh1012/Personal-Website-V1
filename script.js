const anim = anime.timeline({
    loop: true,
    direction: 'forward',
});

anim
    .add({
        targets: '#hexagon path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuart',
        duration: 2000,
        delay: function(el, i) { return i * 250 },
    })
    .add({
        targets: '#hexagon #M',
        duration: 1000,
        opacity: 1,
        easing: 'easeInOutQuart',
    });


$(document)
    .ready(() => {
        setTimeout(function() {
            $('header')
                .show()
            $('.loading-page')
                .fadeOut(2000)
            $('nav')
                .show()
            $('#mainInfo')
                .show();
        }, 3300);
    });


//fade in sections

$(document)
    .ready(function() {

        $(window)
            .scroll(function() {

                $('.fade-div')
                    .each(function(i) {

                        var bottom_of_object = $(this)
                            .position()
                            .top + $(this)
                            .outerHeight();
                        var bottom_of_window = $(window)
                            .scrollTop() + $(window)
                            .height();

                        if (bottom_of_window > bottom_of_object - 1500) {

                            $(this)
                                .animate({ 'opacity': '1' }, 2000);

                        }

                    });

            });

    });



// collapse nav bar when clicked on mobile
$('.navbar-nav>li>a')
    .on('click', function() {
        $('.navbar-collapse')
            .collapse('hide');
    });


// show hobbie pictures
$('.view-hobbies').on('click', function() {
    if ($('.hobbies-row').css('display') == 'none') {
        $('.hobbies-row').fadeIn(1000)
    } else {
        $('.hobbies-row').fadeOut('slow')
    }
})