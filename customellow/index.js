function Fullpage__init() {
    var myFullpage = new fullpage('#fullpage', {
        verticalCentered: false,
        anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4'],
        navigation: false,
        navigationPosition: 'right',
        menu: '#navi',
        afterResponsive: function (isResponsive) {
            console.log(isResponsive);
        }
    });
}

Fullpage__init();

$(document).ready(function () {
    $("header .header_box a.ham_btn .mham_wrap").click(function () {
        $(this).toggleClass("active");
        $(".m_tmenu").toggleClass("active");
    });
    $("img.sad_icon").hover(function () {
        $(this).removeClass('jiggle');
    }, function () {
        $(this).addClass('jiggle');
    });
});