$(document).ready(function(){
  // var scroll_start = 0;
  // var startchange = $('.startchange');
  // var offset = startchange.offset();
  // if (startchange.length){
    $(document).scroll(function() {
      // scroll_start = $('html, body').scrollTop();
      if($(document).scrollTop() > 80) {
        console.log('oi');
        // $("header .header.menu-bar").animate({height: '80px'}, 'slow').css('background', 'linear-gradient(to bottom, #020202 100%, #FFFFFF 0%)');
        $(".header.menu-bar").addClass('scrolling');
      } else {
        // $("header .header.menu-bar").css('background', 'transparent');
        $(".header.menu-bar").removeClass('scrolling');
      }
    });
  // }

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
});

// $(window).scroll(function() {
//     var scroll = $(window).scrollTop();
//     if (scroll >= 80) {
//         $("header .header .menu-bar").addClass("scrolling");
//     } else {
//         $("header .header .menu-bar").removeClass("scrolling");
//     }
// });
