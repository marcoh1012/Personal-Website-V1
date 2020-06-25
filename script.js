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


$(document).ready(() => {
    setTimeout(function() {
        $('.loading-page').hide();
        $('header').removeAttr('hidden');
        $('.mainInfo').removeAttr('hidden');
    }, 3300);
});


// collapse nav bar when clicked on mobile
$('.navbar-nav>li>a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
});