/**
*
* -----------------------------------------------------------------------------
*
* Template : Eshkool – Education WordPress Theme 
* Author : rs-theme
* Author URI : http://www.rstheme.com/
*
* -----------------------------------------------------------------------------
*
**/

(function($) {
    "use strict";
    
      if ($('.menu-sticky').length){
          // sticky menu
          var header = $('.menu-sticky');
          var win = $(window);
          win.on('scroll', function() {
             var scroll = win.scrollTop();
             if (scroll < 150) {
                 header.removeClass("sticky");
             } else {
                 header.addClass("sticky");
             }
          });        
      }

        if ($('.menu3sticky').length){
          // sticky menu
          var header = $('.menu3sticky');
          var win = $(window);
          win.on('scroll', function() {
             var scroll = win.scrollTop();
             if (scroll < 700) {
                 header.removeClass("sticky");
             } else {
                 header.addClass("sticky");
             }
          });        
      }


    //Single Menu Scroll Css
    if ($('.page-template-page-single-php .nav').length) {
        $('#single-menu li:first-child').addClass('active');
        $('#single-menu a').on('click', function(){
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              $('#single-menu li').removeClass('active');
              $(this).parent('li').addClass('active');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: (target.offset().top - 130)
                }, 1000, "easeInOutExpo");
                return false;
              }
            }
        });

        var navChildren = $("#single-menu li.menu-item").children("a");
        var aArray = [];
        for (var i = 0; i < navChildren.length; i++) {
            var aChild = navChildren[i];
            var ahref = $(aChild).attr('href');
            aArray.push(ahref);
        }

        $(window).on("scroll", function(){
            var windowPos = $(window).scrollTop();
            var windowHeight = $(window).height();
            var docHeight = $(document).height();
            for (var i = 0; i < aArray.length; i++) {
                var theID = aArray[i];
                var secPosition = $(theID).offset().top;
                secPosition = secPosition - 150;
                var divHeight = $(theID).height();
                divHeight = divHeight + 90;
                if (windowPos >= secPosition && windowPos < (secPosition + divHeight)) {
                    $("#single-menu a[href='" + theID + "']").parent().addClass("active");
                } else {
                    $("#single-menu a[href='" + theID + "']").parent().removeClass("active");
                }
            }
        });
    }


    
    // Canvas Menu Js
    $( ".nav-link-container > a" ).off("click").on("click", function(event){
        event.preventDefault();
        $(".nav-link-container").toggleClass("nav-inactive-menu-link-container");
        $(".sidenav").toggleClass("nav-active-menu-container");

    });
    
    $(".nav-close-menu-li > button").on('click', function(event){
        $(".sidenav").toggleClass("nav-active-menu-container");
        $(".content").toggleClass("inactive-body");
    });


    // image loaded portfolio init
    $('.grid').imagesLoaded(function() {
        $('.portfolio-filter').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-item',
            }
        });
    });
   
            
    // portfolio Filter
    $('.portfolio-filter button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    $(".rs-banner .cd-words-wrapper p:first-child").addClass("is-visible");

    // collapse hidden
    $(function(){ 
         var navMain = $(".navbar-collapse"); // avoid dependency on #id
         // when you have dropdown inside navbar
         navMain.on("click", "a:not([data-toggle])", null, function () {
             navMain.collapse('hide');
         });

    });

    // Latest News
    
    $('.latest-news-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        asNavFor: '.latest-news-nav'
    });
    $('.latest-news-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.latest-news-slider',
        dots: false,
        centerMode: false,
        centerPadding: '0',
        focusOnSelect: true
    });

  	// video 
  	if ($('.player').length) {
  		$(".player").YTPlayer();
  	}
    
    // Portfolio Single Carousel
    if ($('.portfolio-carousel').length) {
        $('.portfolio-carousel').owlCarousel({
            loop: true,
            nav:true,
            autoHeight:true,
            items:1
        })
    }
        
    // magnificPopup init
    $('.image-popup').magnificPopup({
        type: 'image',
        callbacks: {
            beforeOpen: function() {
               this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomInDown');
            }
        },
        gallery: {
            enabled: true
        }
    });
    
    // Get a quote popup
    $('.popup-quote').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#qname',
        removalDelay: 500, //delay removal by X to allow out-animation
        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#qname';
                }
            }
        }
    });
	

    /*-------------------------------------
    OwlCarousel
    -------------------------------------*/
    $('.rs-carousel').each(function() {
        var owlCarousel = $(this),
        loop = owlCarousel.data('loop'),
        items = owlCarousel.data('items'),
        margin = owlCarousel.data('margin'),
        stagePadding = owlCarousel.data('stage-padding'),
        autoplay = owlCarousel.data('autoplay'),
        autoplayTimeout = owlCarousel.data('autoplay-timeout'),
        smartSpeed = owlCarousel.data('smart-speed'),
        dots = owlCarousel.data('dots'),
        nav = owlCarousel.data('nav'),
        navSpeed = owlCarousel.data('nav-speed'),
        xsDevice = owlCarousel.data('mobile-device'),
        xsDeviceNav = owlCarousel.data('mobile-device-nav'),
        xsDeviceDots = owlCarousel.data('mobile-device-dots'),
        smDevice = owlCarousel.data('ipad-device'),
        smDeviceNav = owlCarousel.data('ipad-device-nav'),
        smDeviceDots = owlCarousel.data('ipad-device-dots'),
        mdDevice = owlCarousel.data('md-device'),
        mdDeviceNav = owlCarousel.data('md-device-nav'),
        mdDeviceDots = owlCarousel.data('md-device-dots');

        owlCarousel.owlCarousel({
            loop: (loop ? true : false),
            items: (items ? items : 3),
            lazyLoad: true,
            margin: (margin ? margin : 20),
            autoplay: (autoplay ? true : false),
            autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
            smartSpeed: (smartSpeed ? smartSpeed : 250),
            dots: (dots ? true : false),
            nav: (nav ? true : false),
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            navSpeed: (navSpeed ? true : false),
            responsiveClass: true,
            responsive: {
                0: {
                    items: (xsDevice ? xsDevice : 1),
                    nav: (xsDeviceNav ? true : false),
                    dots: (xsDeviceDots ? true : false)
                },
                768: {
                    items: (smDevice ? smDevice : 3),
                    nav: (smDeviceNav ? true : false),
                    dots: (smDeviceDots ? true : false)
                },
                992: {
                    items: (mdDevice ? mdDevice : 3),
                    nav: (mdDeviceNav ? true : false),
                    dots: (mdDeviceDots ? true : false)
                }
            }
        });

    });
	
	// team init
    $(".team-carousel").each(function() {
        var options = $(this).data('carousel-options');
        $(this).owlCarousel(options); 
    });
    

    // portfolio
    $(".portfolio-carousel-slider").each(function() {
        var options = $(this).data('carousel-options');
        $(this).owlCarousel(options); 
    });
	
	 
    // partner init
    $(".partner-carousel").each(function() {
        var options = $(this).data('carousel-options');
        $(this).owlCarousel(options); 
    });


    // testimonial init   
    $('.testi-carousel').slick({
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 2,
		focusOnSelect: true,
		responsive: [
		{
		  breakpoint: 768,
		  settings: {
		    arrows: false,
		    centerMode: true,
		    centerPadding: '0px',
		    slidesToShow: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
		    arrows: false,
		    centerMode: true,
		    centerPadding: '0px',
		    slidesToShow: 1
		  }
		}
		]
    });
		
    
    $(".testi-item  a.tab").on('click', function(e){
          e.preventDefault();
          slideIndex = $(this).index();
          $( '.testi-carousel' ).slickGoTo( parseInt(slideIndex) );
    }); 

    // blog init
     $(".blog-carousel").each(function() {
        var options = $(this).data('carousel-options');
        $(this).owlCarousel(options);
    });

    $(function(){ 
        $( "ul.children" ).addClass( "sub-menu" );
    });    
    
    //Videos popup jQuery activation code
    $('.popup-videos').magnificPopup({
        disableOn: 10,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    }); 

    //preloader
    $(window).on( 'load', function() {
        $(".book_preload").delay(1400).fadeOut(200);
        $(".book").on('click', function() {
        $(".book_preload").fadeOut(200);
    })

    if($(window).width() < 992) {
		$('.rs-menu').css('height', '0');
		$('.rs-menu').css('opacity', '0');
		$('.rs-menu').css('z-index', '-1');
		$('.rs-menu-toggle').on( 'click', function(){
				$('.rs-menu').css('opacity', '1');
				$('.rs-menu').css('z-index', '1');
			});
	    }
    })
		
    // Counter Up  
    $('.rs-counter').counterUp({
        delay: 20,
        time: 1500
    });
	
    // scrollTop init
	var win=$(window);
    var totop = $('#scrollUp');    
    win.on('scroll', function() {
        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
    totop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });	

    $(function(){ 
        $( ".sidenav ul.children" ).addClass( "sub-menu" );
    });

    $(".sidenav .menu li").on('click', function() {
        $(this).children("ul.sub-menu").slideToggle();
    })
    
    $(".sticky_search").on('click', function(){
        $(".sticky_form").slideToggle();
        $(this).toggleClass( "active" );
    });
    
    // Last Word init
    $(".blog-style").html(function(){
      var text= $(this).text().trim().split(" ");selected
      var last = text.pop();
      return text.join(" ") + (text.length > 0 ? " <span class='date_style'>" + last + "</span>" : last);
    }); 

    $('.rs-course-archive-top .course-icons a').on('click', function() {
        $('body').removeClass('rs-grid-view').removeClass('rs-list-view');

        if ($(this).hasClass('rs-list')) {
        $('body').addClass('rs-list-view');
        Cookies.set('lpcourseview', 'list');
        }
        else {
        $('body').addClass('rs-grid-view');
        Cookies.set('lpcourseview', 'grid');
        }
        return false;
    });

    $(function () {
        if ($('.learn-press-form-login').hasClass('learn-press-form')) {
             $('body').addClass('login-form-body');
        }
    });

    $(".style4 .title-inner h2").html(function(){
        var text= $(this).text().trim().split(" ");
        var first = text.shift();
        return (text.length > 0 ? "<span class='red-color'>"+ first + "</span> " : first) + text.join(" ");
    });
    $(".style5 .title-inner h2").html(function(){
        var text= $(this).text().trim().split(" ");
        var last = text.pop();
        return text.join(" ") + (text.length > 0 ? " <span class='red-color-last'>" + last + "</span>" : last);
    });

    //Feature Left
    $('#feature-left').owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        items: 1,
        mouseDrag: true,
        dotsContainer: '#item-thumb',
    });
    
    //Feature Left
    $('#feature-content').owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        items: 1,
        mouseDrag: true,
        dotsContainer: '#item-thumb',
    });
    //Feature Left
    $('#slider_inner').owlCarousel({
        margin: 20,
        nav:true,
        navText:[
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        loop:true,
        dots: false,
        items:3,
        autoplay:true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            }
        }
    });

   

   //CountDown Timer
    var CountTimer = $('.CountDownTimer3');
    if(CountTimer.length){ 
        $(".CountDownTimer3").TimeCircles({
            fg_width: 0.030,
            bg_width: 0.8,
            circle_bg_color: events_data.ev_circle_bg_color,
            time: {
                Days:{
                    color: events_data.ev_days_color
                },
                Hours:{
                    color: events_data.ev_hours_color
                },
                Minutes:{
                    color: events_data.ev_min_color
                },
                Seconds:{
                    color: events_data.ev_sec_color
                }
            }
        }); 
       
    } 



})(jQuery);