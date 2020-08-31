// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require activestorage
//= require bootstrap-sprockets
//= require_tree .



$(function(){
    $(".add-comment").click(function () {
        $comment_area = $(this).parent().siblings(".comment-area")
        if ( $comment_area.css("display") == "none" ) {
            $comment_area.slideDown();
        } else {
            $comment_area.slideUp();
        }
    });

    $('.search-input').focus(function(){
        $(this).parent().addClass('focus');
      }).blur(function(){
        $(this).parent().removeClass('focus');
      })

      $('.search-form')
        .css({
            opacity: 0
        })
        .each(function(i){
            $(this).show();
            $(this).delay(300 * i)
                .animate({
                    left : '50%',
                    opacity: 1
                }, 700);
        });

        setTimeout(function(){
            $('ul.order-list li')
        .css({
            right: '40px',
            opacity: 0
        })
        .each(function(i){
            $(this).show();
            $(this).delay(300 * i)
                .animate({
                    right : '0',
                    opacity: 1
                }, 700);
        });
        },1000);  

        setTimeout(function(){
            $('#pagenate')
        .css({
            right: '40px',
            opacity: 0
        })
        .each(function(i){
            $(this).show();
            $(this).delay(300 * i)
                .animate({
                    left : '0',
                    opacity: 1
                }, 1000);
        });
        },1400);  
});