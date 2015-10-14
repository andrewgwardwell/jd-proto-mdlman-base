//= require_tree .


(function($){
	slick_inst = {
		init: function(){
			$('.component--slider').slick({
				centerMode: true,
				dots: true,
			});
		}
	};	


	$(document).ready(function(){
		slick_inst.init();

	});
})(jQuery);
