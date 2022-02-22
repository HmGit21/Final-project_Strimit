new WOW().init();
$(function(){
  $('.threeDots').click(function(){
    $('.nav_icon_box').toggleClass('active');
    
  });
});
$(function(){
    //menu top
    let menuFixed = $('nav');
        menuTop = menuFixed.offset().top;
    $(window).scroll(function(){
        scrollTop = $(this).scrollTop();

        if(scrollTop > menuTop){
          menuFixed.addClass('active');
        }else{
          menuFixed.removeClass('active');
        }

        //back to top button
        if(scrollTop > 500){
          backTop.addClass('active')
        }else{
          backTop.removeClass('active')
        }
    });
    
    let backTop = $('#back_top');
    backTop.on('click', function(){
      $('html,body').animate({
        scrollTop: 0,
      }, 1000);
    });
    //banner slick slider part
    $('.mySlide_box').slick({
      arrows: true,
      infinit: true,
      autoplay: false,
      prevArrow: '<span class="mySliderArrow mySliderArrow_left"><i class="fas fa-chevron-left"></i></span>',
      nextArrow: '<span class="mySliderArrow mySliderArrow_right"><i class="fas fa-chevron-right"></i></span>',
      
    });
    $('.mySlide_box').slickAnimation();
    //sections slick slides
    $('.mySlide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,
        prevArrow: '<span class="myArrow myArrow_left"><i class="fas fa-chevron-left"></i></span>',
        nextArrow: '<span class="myArrow myArrow_right"><i class="fas fa-chevron-right"></i></span>',
        // responsive
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
    // top 10 vertical slide
    $('.movie_list').slick({
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:  false,
        prevArrow: '<span class="myArrow2 myArrow_up"><i class="fas fa-chevron-up"></i></span>',
        nextArrow: '<span class="myArrow2 myArrow_down"><i class="fas fa-chevron-down"></i></span>',
        asNavFor: '.movie_poster',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
    });
      $('.movie_poster').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows:false,
        fade: true,
        asNavFor: '.movie_list',
      });
      // Trending Slide
      $('.TrendingSlide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: '<span class="myArrow myArrow_left"><i class="fas fa-chevron-left"></i></span>',
        nextArrow: '<span class="myArrow myArrow_right"><i class="fas fa-chevron-right"></i></span>',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
      });
      //episode slide
      $('.episodeSlide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,
        prevArrow: '<span class="myArrow myArrow_left"><i class="fas fa-chevron-left"></i></span>',
        nextArrow: '<span class="myArrow myArrow_right"><i class="fas fa-chevron-right"></i></span>',
        // responsive
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
    });
    });
    //movies page js
    $(function(){
      $('.movies_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<span class="myArrow3 moviArrow_left"><i class="fas fa-chevron-left"></i></span>',
        nextArrow: '<span class="myArrow3 moviArrow_right"><i class="fas fa-chevron-right"></i></span>',
      });
    });