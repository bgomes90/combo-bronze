// $('header a').on('click', function() {
//   var scrollAnchor = $(this).attr('data-scroll'),
//       scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;
//   $('body,html').animate({
//       scrollTop: scrollPoint
//   }, 500);
//   return false;
// })
// $(window).scroll(function() {
//     var windscroll = $(window).scrollTop();
//     if (windscroll >= 100) {
//         // $('header a').addClass('active');
//         $('.wrapper section').each(function(i) {
//             if ($(this).position().top <= windscroll - 20) {
//                 $('header a.active').removeClass('active');
//                 $('header a').eq(i).addClass('active');
//             }
//         });
//     } else {
//         // $('nav').removeClass('fixed');
//         $('header a.active').removeClass('active');
//         $('header a:first').addClass('active');
//     }
// }).scroll();

$(document).ready(function(){
  $(document).on("scroll", onScroll);
  //smoothscroll
  $('#menu-bar a[href^="#"]').click(function (e) {
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
