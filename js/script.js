;(function($) {
    "use strict";
  
    jQuery(function($){
        var FEED = window.FEED||{};

        FEED.TWEET= function(){
            $('.tw_username').twittie({
                count: 1,
                template: '{{user_name}}'
            });
            $('.tweets_feed').twittie({
                dateFormat: '%d %b, %Y',
                count: 2,
                template: 
                    '<div class="media">'
                        +'<div class="media-left"><a href="{{url}}"><i class="fa fa-twitter"></i></a></div>'
                        +'<div class="media-body">'+'<a href="{{url}}">{{user_name}}</a>, {{tweet}}'+'</div>'
                    +'</div>'
            },
            function(){
                
            })
        }

        $(document).ready(function(){FEED.TWEET();})
    })
    
        /*----------------------------------------------------*/
        /*  Instafeed
        /*----------------------------------------------------*/
//          var userFeed = new Instafeed({
//              get: 'user',
//              userId: 4006500989,
//              accessToken: '4006500989.1677ed0.62090ee58ba54bf29173c09647f11b18',
//              template: '<li><a href="{{link}}"><img src="{{image}}" /></a></li>',
//              limit : 9
//          });
//          userFeed.run(); 
    
})(jQuery)