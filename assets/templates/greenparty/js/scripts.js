$(window).load(function() {
	$('a[href*="http://www.youtube.com/embed"]').fancybox({'type':'iframe'});
	$('a[href*="http://www.youtube.com/v"]').fancybox({'type':'iframe'});
	$('a[href*="http://youtu.be/"]').fancybox({'type':'iframe'});
	
	
	if($('#bannerslider').length){
	if($('#bannerslider ul li').length==1){
		$('#bannerslider').show();		
		$('#bannerslider ul').show();		
	} else {
		var screenImage = $('#bannerslider ul').find("img");
		var theImage = new Image();
		theImage.src = screenImage.attr("src");
		var imageHeight = theImage.height;	
			$('#bannerslider').bjqs({
			    'height' : imageHeight,
			    'width' : 860,
			    'animspeed' : 4000,
			    'responsive' : true,
			    'automatic' : true,
			    'showcontrols' : false,
			    'centermarkers' : false
			});
		}
	}
	if($('#subbannerslider').length){
	$height=$('#subbannerslider img:first').height();
		$('#subbannerslider').bjqs({
			'height' : $height,
		    'width' : 860,
		    'animspeed' : 4000,
		    'responsive' : true,
		    'automatic' : true,
		    'showcontrols' : false,
		    'centermarkers' : false
		});
	}
});