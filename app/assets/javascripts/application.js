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
    // コメント開閉
    $(".add-comment").click(function () {
        $comment_area = $(this).parent().siblings(".comment-area")
        if ( $comment_area.css("display") == "none" ) {
            $comment_area.slideDown();
        } else {
            $comment_area.slideUp();
        }
    });

    // 検索、並び替えアニメーション
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

        // コメント非活性
        $(document).on('input', '#comment_body', function(e) {
            if ($(this).val() == 0 ) {
                $(this).siblings('#comment_submit').prop("disabled", true);
            } else{
                $(this).siblings('#comment_submit').prop("disabled", false);
            }
        });


        // コメント「さらに表示」
        $('.comment-body-area').each(function(i,e){
            moreNum = 5;
            $(e).children('.comment-body:nth-child(n + ' + (moreNum + 1) + ')').addClass('is-hidden');
            $(e).children('.more').on('click', function() {
                $(e).children('.comment-body.is-hidden').slice(0, moreNum).removeClass('is-hidden');   
                if ($(e).children('.comment-body.is-hidden').length == 0) {
                    $(e).children('.more').fadeOut();
                }
            });
        });
});