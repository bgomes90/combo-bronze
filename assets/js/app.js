$(document).ready(function(){
  $("#member-1").on('mouseover', function(){
       $('#member-1 p').text('Vocal');
   }).on('mouseleave', function(){
       $('#member-1 p').text('João');
   });
  $('#member-2').on('mouseover', function(){
    $('#member-2 p').text('Baixo');
  }).on('mouseleave', function(){
      $('#member-2 p').text('Paulo');
  });
  $('#member-3').on('mouseover', function(){
    $('#member-3 p').text('Guitarra');
  }).on('mouseleave', function(){
      $('#member-3 p').text('Jorge');
  });
  $('#member-4').on('mouseover', function(){
    $('#member-4 p').text('Bateria');
  }).on('mouseleave', function(){
      $('#member-4 p').text('Ringão');
  });

  $('.social-item.face').on('mouseover', function(){
    $(this).css('background-color', '#3b5998');
    $('.social-item.face a img').attr('src', 'assets/img/facebook-white.svg');
  }).on('mouseleave', function(){
    $(this).css('background-color', 'transparent');
    $('.social-item.face a img').attr('src', 'assets/img/facebook.svg');
  });

  $('.social-item.insta').on('mouseover', function(){
    $(this).css('background-color', '#c536a4');
    $('.social-item.insta a img').attr('src', 'assets/img/instagram-white.svg');
  }).on('mouseleave', function(){
    $(this).css('background-color', 'transparent');
    $('.social-item.insta a img').attr('src', 'assets/img/instagram.svg');
  });

  $('.social-item.utube').on('mouseover', function(){
    $(this).css('background-color', '#e62117');
    $('.social-item.utube a img').attr('src', 'assets/img/youtube-white.svg');
  }).on('mouseleave', function(){
    $(this).css('background-color', 'transparent');
    $('.social-item.utube a img').attr('src', 'assets/img/youtube.svg');
  });

  $(document).on("scroll", onScroll);
  //smoothscroll
  $('#menu-bar li a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");
    $('#menu-bar a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');
    var target = this.hash,
    menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top+2
    }, 600, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });

  function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-bar a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('#menu-bar a').removeClass("active");
        currLink.addClass("active");
      }else{
        currLink.removeClass("active");
      }
    });
  }
});
