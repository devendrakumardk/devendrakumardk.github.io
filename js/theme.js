;(function($) {
    "use strict";
    
    /*----------------------------------------------------*/
    /*  Menu scroll js
    /*----------------------------------------------------*/
    var nav_offset_top = $('.main_menu_area').offset().top;
    function stickyHeader() {
		if ($('.main_menu_area').length) {
			var strickyScrollPos = nav_offset_top;
			if($(window).scrollTop() > strickyScrollPos) {
				$('.main_menu_area').removeClass('fadeIn animated');
				$('.main_menu_area').addClass('stricky-fixed fadeInDown animated')
			}
			else if($(window).scrollTop() <= strickyScrollPos) {
				$('.main_menu_area').removeClass('stricky-fixed fadeInDown animated');
				$('.main_menu_area').addClass('slideIn animated')
			}
		}
	}
    
    // instance of fuction while Window Scroll event
	$(window).on('scroll', function () {	
		stickyHeader()
	})
    
    /*======== scroll to js ========*/
    $(".scroll_top").on("click", function(){
        $("body,html").animate({"scrollTop" : "0"}, 700);
    })
    /*----------------------------------------------------*/
    /*  Home Slider js
    /*----------------------------------------------------*/
    function home_slider(){
        if ( $('.home_slider_wrapper').length ){
            $("#home-slider").revolution({
                sliderType:"fullscreen",
                sliderLayout:"auto",
                delay:9000,
                navigation: {
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style: "Gyges",
                        enable: true,
                        hide_onmobile: false,
                        hide_onleave: false,
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: -50,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: -50,
                            v_offset: 0
                        }
                    },
                },			
                responsiveLevels:[4096,1200,992,768,639,480],
                gridwidth:[1140,940,767,450,450,290],
                gridheight:[753,600,550,550,550,480]
            })
        }
    }
    home_slider();
    
    /*----------------------------------------------------*/
    /*  Home Slider js
    /*----------------------------------------------------*/
    function home_slider2(){
        if ( $('#home-slider2').length ){
            $("#home-slider2").revolution({
                sliderType:"fullscreen",
                sliderLayout:"auto",
                delay:9000,
                navigation: {
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style: "Gyges",
                        enable: true,
                        hide_onmobile: false,
                        hide_onleave: false,
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: -50,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: -50,
                            v_offset: 0
                        }
                    },
                },			
                responsiveLevels:[4096,1200,992,768,639,480],
                gridwidth:[1140,940,720,450,450,290],
                gridheight:[960,960,480,480,480,480],
                lazyType:"none",
                parallax: {
                    type:"mouse",
                    origo:"slidercenter",
                    speed:2000,
                    levels:[2,3,4,5,6,7,12,16,10,50],
                },
            })
        }
    }
    home_slider2();

    /*----------------------------------------------------*/
    /*  Home Slider js
    /*----------------------------------------------------*/
    function home_slider3(){
        if ( $('#home-slider3').length ){
            $("#home-slider3").revolution({
                sliderType:"fullscreen",
                sliderLayout:"auto",
                delay:9000,
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style: "Gyges",
                        enable: false,
                        hide_onmobile: false,
                        hide_onleave: false,
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: -50,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: -50,
                            v_offset: 0
                        }
                    },
                },			
                responsiveLevels:[4096,1200,992,768,639,480],
                gridwidth:[1140,940,720,450,450,290],
                gridheight:[835,835,480,480,480,480],
                lazyType:"none",
                parallax: {
                    type:"mouse",
                    origo:"slidercenter",
                    speed:2000,
                    levels:[2,3,4,5,6,7,12,16,10,50],
                },
            })
        }
    }
    home_slider3();

    
    /*----------------------------------------------------*/
    /*  Chart js
    /*----------------------------------------------------*/
    $("#demo-pie-1").each(function() {
          $(this).waypoint(function() {
            $('#demo-pie-1').pieChart({
                barColor: '#ff7d01',
                trackColor: '#243a4f',
                lineCap: 'round',
                lineWidth: 20,
                size: 210,
                onStep: function (from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                }
            });
      }, {
          triggerOnce: true,
          offset: 'bottom-in-view'
        });
   });
    
    /*----------------------------------------------------*/
    /*  Chart js
    /*----------------------------------------------------*/
    $(".causes_circle").each(function() {
          $(this).waypoint(function() {
            $('.causes_circle').pieChart({
                barColor: '#ff7d01',
                trackColor: '#f2f2f2',
                lineCap: 'round',
                lineWidth: 15,
                size: 140,
                onStep: function (from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                }
            });
      }, {
          triggerOnce: true,
          offset: 'bottom-in-view'
        });
   });
    
    /*----------------------------------------------------*/
    /*  portfolio_isotope
    /*----------------------------------------------------*/
    function our_gallery(){
        if ( $('.our_gallery_area').length ){
            // Activate isotope in container
            $(".gallery_image").imagesLoaded( function() {
                $(".gallery_image").isotope({
                    itemSelector: ".gallery_item",
                    layoutMode: 'fitRows',
                }); 
            }); 
            // Add isotope click function
            $(".gallery_menu ul li").on('click',function(){
                $(".gallery_menu ul li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $(".gallery_image, .child_gallery_grid").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });
        }
    }
    our_gallery();
    
    /*----------------------------------------------------*/
    /*  Add isotope click function
    /*----------------------------------------------------*/
    $(".gallery_menu ul li").on('click',function(){
        $(".gallery_menu ul li").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr("data-filter");
        $(".child_gallery_grid, .gallery_image").isotope({
            filter: selector,
            animationOptions: {
                duration: 450,
                easing: "linear",
                queue: false,
            }
        });
        return false;
    });
    
    /*----------------------------------------------------*/
    /*  Msaonry grid column-2
    /*----------------------------------------------------*/
    $(".gallery_image").imagesLoaded( function() {
        $(".gallery_image").isotope({
            itemSelector: ".gallery_item",
            layoutMode: 'fitRows',
        }); 
    }); 
    
    /*----------------------------------------------------*/
    /*  Msaonry
    /*----------------------------------------------------*/
    $(".gallery_image2").imagesLoaded( function() {
        $(".gallery_image2").isotope({
            layoutMode: 'masonry',
            percentPosition:true,
            masonry: {
                columnWidth: '.grid-sizer, .grid-sizer-ms',
            }            
        }); 
    }); 
    
    /*----------------------------------------------------*/
    /*  Msaonry
    /*----------------------------------------------------*/
    $(".blog_grid_inners").imagesLoaded( function() {
        $(".blog_grid_inners").isotope({
            layoutMode: 'masonry',
            percentPosition:true,
            masonry: {
                columnWidth: '.grid-sizer-ms',
            }            
        }); 
    }); 
    /*----------------------------------------------------*/
    /*  Msaonry
    /*----------------------------------------------------*/
    $(".gallery_inners").imagesLoaded( function() {
        $(".gallery_inners").isotope({
            layoutMode: 'fitRows',
            percentPosition:true,            
        }); 
    }); 
    
    
    
    /*----------------------------------------------------*/
    /*  Msaonry grid column-3
    /*----------------------------------------------------*/
    $(".child_gallery_grid").imagesLoaded( function() {
        $(".child_gallery_grid").isotope({
            itemSelector: '.col-sm-4',
            layoutMode: 'masonry',
            percentPosition:true,
            masonry: {
                columnWidth: 1,
            }      
        }); 
    }); 
    
    /*----------------------------------------------------*/
    /*  Become Slider
    /*----------------------------------------------------*/
    function become_slider(){
        if ( $('.become_slider').length ){
            $('.become_slider').owlCarousel({
                loop:true,
                margin:0,
                items: 1,
                nav:false,
                autoplay: false,
                smartSpeed: 1500,
            })
        }
    }
    become_slider();
    
    /*----------------------------------------------------*/
    /*  Team Slider
    /*----------------------------------------------------*/
    function team_slider(){
        if ( $('.team_details_slider').length ){
            $('.team_details_slider').owlCarousel({
                loop:true,
                margin:0,
                items: 1,
                nav: true,
                autoplay: true,
                smartSpeed: 1500,
                navContainer: '.team_details_slider',
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
            })
        }
    }
    team_slider();
    
    /*----------------------------------------------------*/
    /*  Donation Slider
    /*----------------------------------------------------*/
    function team_slider(){
        if ( $('.donators_active').length ){
            $('.donators_active').owlCarousel({
                loop:true,
                margin:16,
                items: 5,
                nav: true,
                autoplay: true,
                smartSpeed: 1500,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
            })
        }
    }
    team_slider();
    
    /*----------------------------------------------------*/
    /*  Payment Slider
    /*----------------------------------------------------*/
    function payment_slider(){
        if ( $('.payment_slider_active').length ){
            $('.payment_slider_active').owlCarousel({
                loop:true,
                margin:0,
                items: 5,
                nav: false,
                autoplay: true,
                smartSpeed: 1500,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1
                    },
                    481:{
                        items:2
                    },
                    768:{
                        items:3
                    },
                    992:{
                        items:5,
                    }
                }
            })
        }
    }
    payment_slider();
    
    /*----------------------------------------------------*/
    /*  Team Details Slider
    /*----------------------------------------------------*/
    function team_details_slider(){
        if ( $('.team_details_slider').length ){
            $('.team_details_slider').owlCarousel({
                loop:true,
                margin:0,
                items: 1,
                nav: false,
                autoplay: false,
                smartSpeed: 1500,
            })
        }
    }
    team_details_slider();
    
    
    $(".food_rating").each(function() {
        $(this).waypoint(function() {
            var progressBar = $(".progress-bar");
            progressBar.each(function(indx){
                $(this).css("width", $(this).attr("aria-valuenow") + "%")
            })
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'

        });
    });
    
    /*----------------------------------------------------*/
    /*     			     Coming Soon
    /*----------------------------------------------------*/
    
    var i=0,soons = document.querySelectorAll('.soon'),l=soons.length;
    for (;i<l;i++) {
        soons[i].setAttribute('data-due','2018-01-30');
    }
    
    
    /*----------------------------------------------------*/
    /*     			     Coming Soon
    /*----------------------------------------------------*/
    
    function carousel_client(){
        if ( $('#carousel_client').length ){
            $("#carousel_client").revolution({
                sliderType:"carousel",
                dottedOverlay:"none",
                delay:9000,
                direction: "vertical",
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                    onHoverStop:"off",
                    direction: "vertical",
                    touch:{
                        touchenabled:"on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false,
                        direction: "vertical",
                    }
                    ,
                    arrows: {
                        style:"gyges",
                        enable:true,
                        hide_onmobile:false,
                        hide_onleave:false,
                        direction: "vertical",
                        tmp:'',
                        left: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:-35,
                            v_offset:-25
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:-35,
                            v_offset:25
                        }
                    }
                    ,
                    tabs: {
                        style:"gyges",
                        enable:true,
                        width:68,
                        height:68,
                        min_width:68,
                        wrapper_padding:0,
                        wrapper_color:"transparent",
                        wrapper_opacity:"1",
                        visibleAmount: 3,
                        hide_onmobile: false,
                        hide_onleave:false,
                        hide_delay:200,
                        direction: "vertical",
                        span:true,
                        position:"left",
                        space:10,
                        h_align:"left",
                        v_align:"top",
                        h_offset:0,
                        v_offset:20
                    }
                },
                carousel: {
                    horizontal_align: "center",
                    vertical_align: "center",
                    fadeout: "on",
                    vary_fade: "on",
                    maxVisibleItems: 3,
                    infinity: "on",
                    space: 0,
                    stretch: "off"
                },
//                gridwidth:720,
//                gridheight:410,
                lazyType:"none",
                shadow:0,
                spinner:"off",
                stopLoop:"on",
                stopAfterLoops:0,
                stopAtSlide:1,
                shuffle:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                },		
                responsiveLevels:[1920,1199,991,767,560,480,360],
                gridwidth:[700,500,800,600,400,290,200],
                gridheight:[410,410,300,280,300,400,350]
            })
        }
    }
    carousel_client();
    
    /*----------------------------------------------------*/
    /*     		Add isotope click function
    /*----------------------------------------------------*/
    jQuery(".causes_filter li").click(function(){
        jQuery(".causes_filter li").removeClass("active");
        jQuery(this).addClass("active");
        
        var selector = jQuery(this).attr("data-filter");
        jQuery(".causes_main, .causes_active_list").isotope({
            filter: selector,
            animationOptions: {
                duration: 758,
                easing: "linear",
                queue: false,
            }
        });
        return false;
    });
    
    /*----------------------------------------------------*/
    /*     	    Activate isotope in container
    /*----------------------------------------------------*/
    $('.causes_main, .causes_active_list').imagesLoaded(function(){
        $('.causes_main, .causes_active_list').isotope({
            itemSelector: '.col-md-4, .causes_main_list',
            layoutMode: 'fitRows',
            percentPosition:true,
            columnWidth: 1,
        })
    });
    
    /*----------------------------------------------------*/
    /*     		   Progress Bar Active js
    /*----------------------------------------------------*/
    $(".progress_inner").each(function() {
        $(this).waypoint(function() {
            var progressBar = $(".progress-bar");
            progressBar.each(function(indx){
                $(this).css("width", $(this).attr("aria-valuenow") + "%")
            })
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'

        });
    });
    
    /*----------------------------------------------------*/
    /*  Counter up js
    /*----------------------------------------------------*/
    function counterup(){
        if ( $('.counter').length ){
            $('.counter').counterUp({
                delay: 20,
                time: 1000
            });
        }
    }
    counterup();
    
    $( '#ri-grid' ).gridrotator( {
        w320 : {
            rows : 2,
            columns : 3,
            
        },
        w240 : {
            rows : 2,
            columns : 3,
        }
    } );

})(jQuery)