$(function () {


    $('.slider__inner').slick({}

    );

    $('div[data-slide]').click(function (e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.slider__inner').slick('slickGoTo', slideno - 1);
    }

    );
}

);