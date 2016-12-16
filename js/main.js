$(".goBarSearchButton").click(function(){
    $(".headerContainer").toggleClass("slideToggle");
    $(this).toggleClass('icon-icon_magnifyglass');
    $(this).toggleClass('icon-icon_chevron_up');
});

$(".footerSideBarButton").click(function(){
    $(".leftSideBar").toggleClass("sideBarShow");
    $(".footerNavContainer").toggleClass("navMove");
    $(".icon-icon_edit").toggleClass("hideSideBar");
    $(".mainContainer").toggleClass("dim");
});

$(".footerAlarmButton").click(function(){
    $(".rightSideBar").toggleClass("alarmBarShow");
    $(".footerAlarmContainer").toggleClass("alarmMove");
});



$(".goBarSearch").keypress(function(e) {
    if(e.which == 13) {
    $(".headerContainer").toggleClass("slideToggle");
    $(".goBarSearchButton").toggleClass('icon-icon_magnifyglass');
    $(".goBarSearchButton").toggleClass('icon-icon_chevron_up');
    }
});


$(".signalPathButton").click(function(){
    $(".goBarResults").toggleClass("hide");
    $(".goBarSignalPath").toggleClass("show");
});

$(".signalPathBackButton").click(function(){
    $(".goBarResults").removeClass("hide");
    $(".goBarSignalPath").removeClass("show");
});
