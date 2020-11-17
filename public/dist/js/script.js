$(document).ready(
    function () {
        //sticky nav    
        $('.mainPart').waypoint(
            function (dicrection) {
                if (dicrection == "down") {
                    $('nav').addClass('sticky');
                } else {
                    $('nav').removeClass('sticky');
                }
            }, {
            offset: '600px'
        }
        );

        //Scroll
        $('a').click(function (event) {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 700);
            event.preventDefault();
        });

    }
)