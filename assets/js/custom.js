$(document).ready(function() {
	
	$('.homepage-slides').owlCarousel({
	  items: 1,
	  autoplay: false,
	  loop: true,
	  nav: true,
	  dots: false,
	 navText: ["<i class='fa fa-long-arrow-alt-left'></i>" ,"<i class='fa fa-long-arrow-alt-right'></i>"]
	 });

	$('.product-promotions').owlCarousel({
	  items: 1,
	  autoplay: false,
	  loop: true,
	  nav: false,
	  dots: true
	 });

	$('.product-list').masonry();

	$(".menu-trigger").on("click", function(){
		$(".offcanvus-menu, .offcanvus-overlay").addClass("active");
		return false;
	});
	$(".menu-close, .offcanvus-overlay").on("click", function(){
		$(".offcanvus-menu, .offcanvus-overlay").removeClass("active");
	});
});