$(function() {
	/***************************************************************************
	 *** 单选按钮的初始化 和注册单击事件
	 **************************************************************************/
	// 初始化默认单选按钮为选中
	$(".radio-btn-group input:checked").each(function(index) {
		//找到for属性为此input元素的ID的label 为其增加active 类
		$(".radio-btn-group label[for='" + this.id + "']").addClass("active");
	});
	// 单击单选按钮事件切换显示样式
	$(".radio-btn-group .radio-btn").click(function() {
		$(this).siblings("label").removeClass("active");
		$(this).addClass("active");
	});
});