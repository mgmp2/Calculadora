
$(_ => {
    var screenVal = $('input:text');
    $('input:button').on('click',function(){
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
