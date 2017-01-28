$(document).ready(function() {
	var flag = false;
  $("#quote-carousel").on('slide.bs.carousel', function() {
  	if(!flag){
      var arr = $('ol.carousel-indicators > li');
      $($('ol.carousel-indicators')).append($('ol.carousel-indicators > li')[0]);
      $('.carousel-inner').append($('.carousel-inner > .item')[0]);
  	}else{
    	flag = false;
    }
  });

  $('#quote-carousel').carousel();

  $('.item-btn').click(function(obj){
  	flag = true;
  	var arr = $('.item-btn');
    var index  = arr.index(obj.currentTarget);
    var len = arr.length;
    var mid = Math.floor(len/2);
    $('#quote-carousel').carousel(index);
    if(index<mid){
    	for(i=0;i<(mid-index);i++){
  			$($('ol.carousel-indicators')).prepend($('.item-btn')[len-1]);
    		$('.carousel-inner').prepend($('.item')[len-1]);
  		}
    }else if(index>mid){
    	for(i=0;i<(index-mid);i++){
  			$($('ol.carousel-indicators')).append($('.item-btn')[0]);
    		$('.carousel-inner').append($('.item')[0]);
  		}
    }
  });

  $(".left").click(function(){
        flag = true;
        var arr = $('ol.carousel-indicators > li');
        $($('ol.carousel-indicators')).prepend(arr[arr.length-1]);
      	arr = $('.carousel-inner > .item');
      $('.carousel-inner').prepend(arr[arr.length - 1]);
      $("#quote-carousel").carousel("prev");
    });
    $(".right").click(function(){
        flag = true;
        var arr = $('ol.carousel-indicators > li');
        $($('ol.carousel-indicators')).append(arr[0]);
      	arr = $('.carousel-inner > .item');
      $('.carousel-inner').append(arr[0]);
      $("#quote-carousel").carousel("next");
    });
});
