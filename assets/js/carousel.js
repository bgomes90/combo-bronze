$(document).ready(function() {
	var flag = false;
  $("#quote-carousel").on('slide.bs.carousel', function() {
  	if(!flag){
      var arr = $('#quote-carousel ol.carousel-indicators > li');
      $($('#quote-carousel ol.carousel-indicators')).append($('#quote-carousel ol.carousel-indicators > li')[0]);
      $('#quote-carousel .carousel-inner').append($('#quote-carousel .carousel-inner > .item')[0]);
  	}else{
    	flag = false;
    }
  });

  $('#quote-carousel').carousel();

  $('#quote-carousel .item-btn').click(function(obj){
  	flag = true;
  	var arr = $('.item-btn');
    var index  = arr.index(obj.currentTarget);
    var len = arr.length;
    var mid = Math.floor(len/2);
    $('#quote-carousel').carousel(index);
    if(index<mid){
    	for(i=0;i<(mid-index);i++){
  			$($('#quote-carousel ol.carousel-indicators')).prepend($('.item-btn')[len-1]);
    		$('#quote-carousel .carousel-inner').prepend($('.item')[len-1]);
  		}
    }else if(index>mid){
    	for(i=0;i<(index-mid);i++){
  			$($('#quote-carousel ol.carousel-indicators')).append($('.item-btn')[0]);
    		$('#quote-carousel .carousel-inner').append($('.item')[0]);
  		}
    }
  });

  $(".left").click(function(){
        flag = true;
        var arr = $('#quote-carousel ol.carousel-indicators > li');
        $($('#quote-carousel ol.carousel-indicators')).prepend(arr[arr.length-1]);
      	arr = $('#quote-carousel .carousel-inner > .item');
      $('#quote-carousel .carousel-inner').prepend(arr[arr.length - 1]);
      $("#quote-carousel").carousel("prev");
    });
    $(".right").click(function(){
        flag = true;
        var arr = $('#quote-carousel ol.carousel-indicators > li');
        $($('#quote-carousel ol.carousel-indicators')).append(arr[0]);
      	arr = $('#quote-carousel .carousel-inner > .item');
      $('#quote-carousel .carousel-inner').append(arr[0]);
      $("#quote-carousel").carousel("next");
    });
});
