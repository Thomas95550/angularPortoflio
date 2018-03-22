/**
 * Created by PC on 19/01/2018.
 */
$(function(){
    var $target = $('.wrapper');
    inView('.container').on('enter', function(el){
        var color = $(el).attr('data-color');
        $target.css('color', color );
    });
});