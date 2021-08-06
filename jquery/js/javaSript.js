var faq_title=$(".faq-item-title");
var faq_content=$(".faq-item-content");

faq_title.click( function(){

	var this_title=$(this);
	var this_content=$(this).parent().find(faq_content);

	this_content.slideToggle("fast");
	faq_content.not(this_content).slideUp("fast");
});
//slider
$(document).ready(function(){

	$(".next").click(function(){
		var now_pic=$(".show");
		var next_pic=now_pic.next();
		if(next_pic.length){
			now_pic.fadeOut("fast").removeClass("show");
			next_pic.fadeIn("fast").addClass("show");
		}
	})

	$(".prev").click(function(){
		var now_pic=$(".show");
		var prev_pic=now_pic.prev();
		if(prev_pic.length){
			now_pic.fadeOut("fast").removeClass("show");
			prev_pic.fadeIn("fast").addClass("show");
		}
	})
})

//tabs scripts
$(document).ready(function(){
$(".tab-content").hide();
$(".tab-content:first-child").show();

$(".tabs li").click(function(){
	$(".tabs li").removeClass("active");
	$(this).addClass("active");
	var now_tab =$(this).attr("data-attr");
	$(".tab-content").hide();
	$("." + now_tab).show();
});
});






















/*
functions:
.hide();
.show();
.click();
.slideDown();
.slideUp();
.toggle();
.slideToggle();
.this();
*/