// 定义一个匿名函数并立即执行
	(function(p){  /* p 的值为 'x' */})("x");

	;(
		function(plugin) {
			//something
		}("毕方瑜")
	);
//每5000毫秒尝试执行一次 直到成功
	(function(){
		try {
			f();
		}catch(e){
			setTimeout(arguments.callee/*this is the piont*/,5000);
			return;
		}
	})();
//jQuery 的最外层结构
	(
		function (global, factory) {  // global  是 window 或 this
			                          // factory 是一个函数
			//。。。。
		}(
			typeof window !== "undefined" ? window : this
			,
			function (window, noGlobal) {
				//。。。。
			}
		)														
	);

//chrome  dev tool
	在SOURCE界面 <ctrl> <shift> <O>   //打开当前JS中的function 列表

//jQuery
	//滚动屏幕到指定位置
	//参见插件jQuery.localScroll jQuery.scrollTo
	$("body").animate({scrollTop: 2650;}, 1000);

	// 滚动屏幕时 更换背景位置插件 jQuery Parallax
		function update(){

			var pos = $window.scrollTop();

				$this.each(function(){
					var $element = $(this);
					var top = $element.offset().top;
					var height = getHeight($element);

					// Check if totally above or totally below viewport
					if (top + height < pos || top > pos + windowHeight) {
						return;
					}

					$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
				});
		}
		$window.bind('scroll', update);//.resize(update);
		update();
	//下拉菜单插件 bootstrap-hover-dropdown
	
	//滚动条插件jQuery slimScroll
	//jQuery 线图 柱状图 插件
		http://omnipotent.net/jquery.sparkline/


//js 中的函数调用 invocation
   	//方法调用模式   函数调用模式    构造器调用模式  apply调用模式
	   	//方法调用模式 the method invocation pattern
		   var o = {
		   		x : 1,
		   		f : function (){
		   			this.x += 1;
		   		}
		   }; 

		   o.f(); o["f"]();   //函数作为对象的方法调用
		                      //调用时  this 指向这个对象
		//函数调用模式 the function invocation pattern
			var x = f();   //调用f时 this 被绑定到全局变量
			o.f = function () {
				var that = this;//这个this指向 对象o
				var h = function (){
					that.value += 1;
				};
				h(); //这样作为函数调用h()的时候 
				     //h里面的this是指向 全局变量的
				     //所以通过上面的that 去访问对象o的value
			};

			o.f();
		//构造器调用模式 the constructor invocation pattern
			function Person(name){
				this.name =name;
			}
			var p1 = new Person("Bob");

		// apply call
		    //两者的不同在于传递的第二个参数的格式不同
			obj.say.call(obj2,[param1[,param2[,…[,paramN]]]]); //调用obj的say方法时
						                  //将此方法里面的this绑定到obj2
			Function.apply(obj,args); //方法能接收两个参数
				// obj：这个对象将代替Function类里this对象
				// args：这个是数组，它将作为参数传给Function（args-->arguments）

// morris.js  生成饼图 线图等时序图表

//事件
	//window的load 事件 
    	//在文档的所有元素包括图片加载完成之后发生
    //DOMContentLoaded 事件
    	//文档加载解析完毕 且 所有延迟脚本都执行完毕后才发生
    //readystatechange 事件
    	//document.readyState属性随着文档加载过程而变
    	//会触发readystatechange事件

//事件处理
  	// 一个事件的发生后经历三个阶段
  	// <注册的捕获阶段的处理程序>  	   
  		//最后一个参数指定为 true
  		//document.addEventListener("DOMContentLoaded",completed,true);
  	// <发生事件的元素上的注册处理程序>
  	// <冒泡阶段的事件处理程序>

  	//在以上三个阶段中的任意一个阶段都可以通过调用时间对象的
  	//stopPropagation 来阻止事件的传播

	// Mutation events list
	// The following is a list of all mutation events, as defined in DOM Level 3 Events specification:

		// 	DOMAttrModified
		// 	DOMAttributeNameChanged
		// 	DOMCharacterDataModified
		// 	DOMElementNameChanged
		// 	DOMNodeInserted
		// 	DOMNodeInsertedIntoDocument
		// 	DOMNodeRemoved
		// 	DOMNodeRemovedFromDocument
		// 	DOMSubtreeModified


//--------------------------------
	function person(name,sex){
		this.name = name;
		this.sex  = sex;
		return this;
	}

	//不使用 new 调用时 this 会指向全局变量
	p1 = person('Lili','F');  
	//这样this会指向新建的对象
	p2 = new person('Lili','F');  

//浏览器调试鼠标hover事件触发显示的元素的技巧
	1 调试器调到source栏
	2 用鼠标触发hover事件让元素显示
	3 按<F8>暂停脚本执行
	4 移开鼠标后脚本将暂停