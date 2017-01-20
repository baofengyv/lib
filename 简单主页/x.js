		function go(){
			$("td").each(function(){
				var R=Math.floor(255*Math.random());
				var G=Math.floor(255*Math.random());
				var B=Math.floor(255*Math.random());
				
				
				$(this).css("background-color","rgb("+R+","+G+","+B+")");
			});
		};
		$(function(){
			window.setInterval(go,737);
		});
