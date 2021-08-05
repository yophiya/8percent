

$(window).on('load resize', function(){
	
	//hide loader
	TweenMax.to($("#loader-bg"), 1 ,{
		opacity:0,
		delay:0.5,
		onComplete: function(){
			$('#loader-bg').css({display : 'none'});
	        $('#wrapper').animate({opacity:1},1000);
	    }
	});		

});    
    


$(function(){
	
	//hamburger
	
$('.hamburger-box').click(function(){
	
	
	$(".hamburger").toggleClass("open"); 	

	if($('.hamburger').hasClass('open')){ 
			$('body').append('<div class="side-cover"></div>');
			$('.side-cover').css({display: 'block',opacity:.5});		
			 			
			setTimeout(function() {	
				$(".side-cover,.side-nav").addClass("open"); 
				$('nav ul li').each(function(i) {
					$(this).delay(50 * i).animate({
			            opacity: 1
			        }, 300);	     
				});  
			},200);   	
			return false; 		
		}else{
			
			$.when(
				$(".side-cover,.side-nav").removeClass("open"), 	
				$('nav ul li').animate({
				    opacity: 0
				}, 300)	
			).done(function(){ 
				$('.side-cover').fadeOut();	
			},300);			
			return false; 
		}
	$('a').click(function() {
		$(".hamburger").removeClass("open"); 
	});	 
	
	return false; 
		
		
} ) ;

	
	

$(function() {
	$('.figure-chain-ex-item,.award-item,.gov-item').matchHeight();

});	
	

	
	
	
	
	
	 //accordion  
	 
	$(".accordion li a").on("click", function() {
		$(this).next().slideToggle();	
		if ($(this).children(".accordion_icon").hasClass('active')) {			
			$(this).children(".accordion_icon").removeClass('active');		
		}
		else {
			$(this).children(".accordion_icon").addClass('active');			
		}			
	});	

	
});














	
//loading

	
	
	var logoLeft = $('.logo').offset().left;	
	$('.logo').css({
		top:logoLeft+10
	});
	$('.hamburger-box').css({
		top:logoLeft
	});	
	
	
	//humbuger
	$('.hamburger').click(function(){
		$(this).toggleClass("active"); 	
		$('#menu-board,.global-nav,.about-sp').toggleClass("active");  



		if($('.hamburger').hasClass('active')){ 
			
				$('#container').css({
					overflow: 'hidden'
				           
				 })		
				var containerScrollTop = $('#container').scrollTop(); 
				$('#menu-board').css({
					top:containerScrollTop
				           
				 })	
				 					 		


				TweenMax.to($("#menu-board,.global-nav,.about-sp"), .8 ,{
					opacity:1,
// 					delay:0.3,
/*
					onComplete: function(){
						$('#load').css({display : 'none'});
				        $('#container').animate({opacity:1},1400);
				        cursorCircle();	
				    }
*/
				});		
							
		}else{
				$('#container').css({
					overflow: 'scroll'
				           
				 })		
				TweenMax.to($("#menu-board,.global-nav,.about-sp"), .8 ,{
					opacity:0,
// 					delay:0.3,
/*
					onComplete: function(){
						$('#load').css({display : 'none'});
				        $('#container').animate({opacity:1},1400);
				        cursorCircle();	
				    }
*/
				});					 
				 			
			
			
		}

	});
	
	




