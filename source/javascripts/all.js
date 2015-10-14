//= require_tree .


(function($){
	slick_inst = {
		init: function(){
			$('.component--slider--one').slick({
				centerMode: true,
				dots: true,
			});
			$('.component--slider--two').slick({
				slidesToShow: 3,
			});
		}
	};	


	$(document).ready(function(){
		slick_inst.init();

	});
})(jQuery);
