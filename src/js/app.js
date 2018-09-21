$(document).ready(function(){
    $('.slide').slick({
        dots: true,
        prevArrow: $('.slide-left'),
        nextArrow: $('.slide-right'),
        autoplay: true
    });
  });

$(document).ready(function() {
// Add smooth scrolling to all links
$("a").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } // End if
  });
  // Scroll to top button
  $('.top-btn').click(function() {

    $('html, body').animate({
        scrollTop: $('header').offset().top
      }, 800, function(){
      });
});

    // Hamburger menu
    $('.hamburger').click(function() {
        $('.top-nav').addClass('nav-open');
        $('a').click(function() {
            $('.top-nav').removeClass('nav-open');
        });
    });

    $('.close-nav-menu').click(function() {
        $('.top-nav').removeClass('nav-open');
    });

    // Menu modal

    $('.see-all-cta').click(function() {
        $('.menu-modal').addClass('modal-open');
        $(document).keydown(function(event) { 
            if (event.keyCode == 27) { 
                $('.menu-modal').removeClass('modal-open');
            }
        });
    });

    $('.close-icon-modal').click(function() {
        $('.menu-modal').removeClass('modal-open');
    });

    //Dishes likes and slide

    $('.like-icon').one('click', function() {
        $(this).addClass('like-icon-clicked');
        var likeCount = $(this).next().attr('data-likes');
        likeCount++;
        $(this).next().html(`${likeCount} people likes this`);
        $(this).next().attr('data-likes', likeCount);
    });

    // Gallery modal

    $('.gallery-img').click(function() {
        var imgLink= $(this).children().first().attr('src');
        console.log(imgLink);
        $('.img-modal').children().first().attr('src', imgLink);
        $('.gallery-modal').addClass('gallery-open');
        //close on esc press
        $(document).keydown(function(event) { 
            if (event.keyCode == 27) { 
                $('.gallery-modal').removeClass('gallery-open');
            }
        });
        // List gallery images
        var nextImage = $(this).next().children().first().attr('src');
        var prevImage = $(this).prev().children().first().attr('src');
        $('.gallery-right').click(function() {
            $('.img-modal').children().first().attr('src', nextImage);

        });
        $('.gallery-left').click(function() {
            $('.img-modal').children().first().attr('src', prevImage);

        });
    });

    $('.close-icon-gallery').click(function() {
        $('.gallery-modal').removeClass('gallery-open');
    });
});

  