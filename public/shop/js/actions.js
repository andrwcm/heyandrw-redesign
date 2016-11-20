$(function() {
	$('#venta').hover(function() {
		$('.overlayventa').fadeIn('slow');
	},
	function(){
		$('.overlayventa').fadeOut('slow');
	}
	);
});

$(function() {
    $('#preventa').hover(function() {
        $('.overlaypreventa').fadeIn('slow');
      },
  	function(){
	    $('.overlaypreventa').fadeOut('slow');
	  }
 );
});