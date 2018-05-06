$( document ).ready(function () {
    $('.color-box').click(function() {
        var pickColor = $( this ).css( "background-color" );
        // console.log(pickColor);
        $('.box').click(function() {
            $( this ).css( "background-color", pickColor );
        });
    });
});