$(function(){
			$(window).scroll(function(){
				if ($(window).scrollTop()>300) {
					$(".gotop").fadeIn(300)
				}else{	
					$(".gotop").fadeOut(0)
				}
			})
			$(".gotop").click(function(){
				$("body,html").animate({scrollTop:0});
				$(this).animate({bottom:5000},800,function(){
					$(this).css({bottom:100});
				})
			})
	
		})