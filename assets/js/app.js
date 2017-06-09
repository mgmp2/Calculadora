
    $(_ => {
        var screenVal = $('input:text');
        $('input:button').on('click', function (e) {
            $(e.target).addClass('shadow-pulse');
            $(e.target).animate({
                opacity:0.2
            }, 100, function(){
                $(this).animate({
                    opacity:1
                });
                $(e.target).removeClass('shadow-pulse');
            })
            var eachNumber      = $(this).val();
            var currentScreen   = screenVal.val();
            currentScreen      += eachNumber;
            screenVal.val(currentScreen);
            if ( $(this).val() == 'C') {
                screenVal.val('');
            }
        });
        $('button').click( (e) => {
            e.preventDefault();
            screenVal.val(eval(screenVal.val()));
        })
    })
