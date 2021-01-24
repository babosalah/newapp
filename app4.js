$(function(){
'use strict'
//trigger nice scrool

$('html').niceScroll({

    cursorcolor:'#f7600e',
    cursorwidth:'10px',
    cursorborderradius:'10px',
    cursorborder:'#f7600e'

})
//changeheader height
 $('.header').height($(window).height());


  ///scroll to features
   $('.header .arow ').click(function(){

    $('html , body').animate({

        scrollTop: $('.features').offset().top
    },1000);
   });

   //sho hidden item from our work
   $('.show-more').click(function(){

    $('.ourwork .hidden').fadeIn(1000);
   })
});