if ($(".fullScreenButton.enter").length == 1){
	$(".fullScreenButton").click();
	$(".tray.screencast").hide();
	$(".rightSide").hide();
	$(".overlay").hide();
	$(".normalControls").hide();
	$(".controls").hide();
}
else {
	$(".fullScreenButton").click();
	$(".tray.screencast").show();
	$(".rightSide").show();
	$(".overlay").show();
	$(".normalControls").show();
	$(".controls").show();
}

