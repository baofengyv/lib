$(function() {
	$(".radio-btn-group .radio-btn").click(function() {
//		debugger;
		var parent = $(this).parent(".radio-btn-group");
		$('label',parent).removeClass("active");
		$(this).addClass("active");				
	});
});