var tOut;

function process(){
	tOut = setTimeout(displayPage,3000);
}

function displayPage(){
	$(".loader").css("display", "none");
	$(".load-img").css("display", "none");
	$("#mainPage").css("display", "block");
}

$(document).ready(function(){
	$("ul.menu li").click(function(e){
		$(".active").removeClass("active");
		$(this).addClass("active");
	});

});