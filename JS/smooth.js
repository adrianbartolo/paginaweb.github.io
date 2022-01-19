(function(){
	//EFECTO SMOOTH
	$('a.scroll').click(function(e){
		e.preventDefault();
		$('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 2000);
	});
}());

(function(){
	//efecto smooth
	$('a.scroll').click(function(e){
		e.preventDefault();
		$('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 2000);
	});

	//Scroll
	$(document).ready(function(){
		$("html").niceScroll({
			//cursoropacitymin:1
			//cursoropacitymin:1
			cursorcolor:"#111111",
			zindex: 1100,
			cursorborderradius: 3,
			cursorborder:"1px solid #ffffff",
			horizrailenabled: false,
			cursorfixedheight:120,
			cursorwidth:"12px",
		});
	});
}());
