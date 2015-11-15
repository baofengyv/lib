/*
*
*
*	只是基本能工作了 。
*
*/

/*
google 提示的 源码。

<div style="background-color: rgb(45, 45, 45); border: 1px solid rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 4px; box-sizing: border-box; color: rgb(255, 255, 255); display: block; font-size: 11px; font-weight: bold; height: 29px; left: 687px; line-height: 29px; padding: 0px 10px; position: absolute; text-align: center; top: 344px; transition: opacity 0.13s; -webkit-transition: opacity 0.13s; white-space: nowrap; visibility: visible; z-index: 2000; -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;">按语音搜索<div style="border-width: 0px 6px 6px; border-style: solid; border-color: rgb(255, 255, 255) transparent; content: ''; display: block; font-size: 0px; height: 0px; line-height: 0; position: absolute; top: -6px; width: 0px; left: 36.5px;"><div style="border-width: 0px 6px 6px; border-style: solid; border-color: rgb(45, 45, 45) transparent; content: ''; display: block; font-size: 0px; height: 0px; line-height: 0; position: absolute; top: 1px; width: 0px; left: -6px;"></div></div></div>

结构：

<div>					//div
	按语音搜索
	<div>				//div1
		<div></div>		//div11
	</div>
</div>

取名分别叫：div div1 div11
*/

window.onload=function(){
	var list=document.getElementsByClassName("showTip");
	for(var i=0;i<list.length;++i){
		list[i].addEventListener("mouseover",
			function(e){

				var body = document.getElementsByTagName("body")[0];
				
				var div = document.createElement("div");
				
				div.style.cssText="background-color: rgb(45, 45, 45); border: 1px solid rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 4px; box-sizing: border-box; color: rgb(255, 255, 255); display: block; font-size: 11px; font-weight: bold; height: 29px; left: 687px; line-height: 29px; padding: 0px 10px; position: absolute; text-align: center; top: 344px; transition: opacity 0.13s; -webkit-transition: opacity 0.13s; white-space: nowrap; visibility: visible; z-index: 2000; -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;";
				
				div.style.top= e.target.offsetTop+e.target.offsetHeight+3+"px";
				div.style.left= e.target.offsetLeft+e.target.offsetWidth/2-8+"px";
				
				
				var div1 = document.createElement("div");

				div1.style.cssText="border-width: 0px 6px 6px; border-style: solid; border-color: rgb(255, 255, 255) transparent; content: ''; display: block; font-size: 0px; height: 0px; line-height: 0; position: absolute; top: -6px; width: 0px; left: 36.5px;";
				
				
				var div11 = document.createElement("div");

				div11.style.cssText="border-width: 0px 6px 6px; border-style: solid; border-color: rgb(45, 45, 45) transparent; content: ''; display: block; font-size: 0px; height: 0px; line-height: 0; position: absolute; top: 1px; width: 0px; left: -6px;";

				div1.appendChild(div11);
				
				div.appendChild(document.createTextNode(e.target.attributes.tips.value));
				div.appendChild(div1);
				
				body.appendChild(div);
				
				div1.style.left= div.clientWidth/2-6+"px";

				window.globalTipCountiner=div;
			}
		);
		list[i].addEventListener("mouseleave",
			function (){
				if(window.globalTipCountiner){
					var body = document.getElementsByTagName("body")[0];
					body.removeChild(window.globalTipCountiner);
					delete window.globalTipCountiner;
				}	
			}		
		);
	}
}