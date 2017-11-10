
window.onload=function(){
	
	function mainimg(a){
		$kj(".mainimg").css("background-image","url(img/index/banner_0"+a+".jpg)");
	}
	$kj(".bannum li").eq(0).click(function(){
			mainimg(2);
	});
	$kj(".bannum li").eq(1).click(function(){
			mainimg(1);
		});
	$kj(".bannum li").eq(2).click(function(){
			mainimg(2);
		});
	$kj(".bannum li").eq(3).click(function(){
			mainimg(1);
		});
	$kj(".bannum li").eq(4).click(function(){
			mainimg(2);
		});
		


}


$(document).ready(function(){
	
	$(".bannum li").eq(0).click(function(){
			mainimg(2);
	});
	$(".bannum li").eq(1).click(function(){
			mainimg(1);
		});
	$(".bannum li").eq(2).click(function(){
			mainimg(2);
		});
	$(".bannum li").eq(3).click(function(){
			mainimg(1);
		});
	$(".bannum li").eq(4).click(function(){
			mainimg(2);
		});
});
function mainimg(a){
		$(".mainimg").css("background-image","url(img/index/banner_0"+a+".jpg)");
	}