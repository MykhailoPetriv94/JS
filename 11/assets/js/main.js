$(function(){
  $(".top__slider").slick( {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: 'slick-dots top-dots',
  }),

  $('.products__slider').slick( {
    accessibility: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 800,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        }
      },

      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,  
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 368,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          dotsClass: 'slick-dots top-dots',
        }
      },
    ]
  });

  $('.partners__slider').slick( {
    accessibility: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 800,
    speed: 1000,
    slidesToShow: 9,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 550,
        settings: {
          dots: true,
          dotsClass: 'slick-dots top-dots',
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
  });

  $('.left').click(function() {
    $('.products__slider').slick('slickPrev');
  })
  
  $('.right').click(function() {
    $('.products__slider').slick('slickNext');
  })

  $('.left__partners').click(function() {
    $('.partners__slider').slick('slickPrev');
  })
  
  $('.right__partners').click(function() {
    $('.partners__slider').slick('slickNext');
  })
})