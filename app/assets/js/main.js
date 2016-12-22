(function($){

	$(window).load(function(){

		$('[data-slide-menu]').click(function(e){
			e.preventDefault();

			$('#sidenav-overlay').remove();

			var target = $(this).data('slide-menu');
			var $overlay = $('<div id="sidenav-overlay" style="opacity: 1;" class=""></div>');


			$(target).toggleClass('open');
			$('body').toggleClass('menu-open');

			if($(target).hasClass('open')){
				$overlay.click(function(){
					$(target).removeClass('open');
					$('body').removeClass('menu-open');
					$(this).remove();
				});
				$overlay.appendTo($('body'));
			}

		});

		$(".button-collapse").sideNav();

		$("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");


        $('.mdb-select').material_select();



		if ($('#back-to-top').length) {
			var scrollTrigger = 200, // px
				backToTop = function () {
					var scrollTop = $(window).scrollTop();
					if (scrollTop > scrollTrigger) {
						$('#back-to-top').stop().fadeIn(200);
					} else {
						$('#back-to-top').stop().fadeOut(200);
					}
				};
			backToTop();
			$(window).on('scroll', function () {
				backToTop();
			});
			$('#back-to-top').on('click', function (e) {
				e.preventDefault();
				$('html,body').animate({
					scrollTop: 0
				}, 700);
			});
		}

		$('[data-slide-menu-main]').click(function(e){
			e.preventDefault();
			$('.icon-bars',this).toggleClass('open');
			var menu = $(this).data('slide-menu-main');

			$(menu).stop().slideToggle(300);
		});

	});

})(jQuery);