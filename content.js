var vetoed = [".roomControlsLayoutView", ".overlay", ".normalControls", ".rightSide", ".tray.screencast", ".social", ".toolbar", ".barRight", ".controls", ".tray"];

if ($(".controls").is(":visible")){
	console.log("1");
	document.documentElement.webkitRequestFullscreen();
	for (let i = 0; i < vetoed.length; i++) {
        $(vetoed[i]).hide();
    }
	$(".videoChatView").removeClass("chatOpen");
	$(".content").css('height', "100%");
	$(".content").css('marginTop', "0");
	$(".content").css('maxWidth', "100%");
	$(".leftSide").css('maxWidth', "100%");
	
    $('body').removeClass("bannerVisible");
	
	$(".rabbitapp").removeClass("toolbarVisible");
	$(".rabbitapp").focus();
}
else {
	console.log("0");
	document.webkitCancelFullScreen();
	for (let i = 0; i < vetoed.length; i++) {
        $(vetoed[i]).show();
    }
	$(".videoChatView").addClass("chatOpen");
	$(".content").css('height', null);
	$(".content").css('marginTop', null);
	$(".rabbitapp").addClass("toolbarVisible");
	$(".rabbitapp").focus();
}

