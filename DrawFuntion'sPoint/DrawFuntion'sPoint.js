"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

window.onload = initCanvas();

//根据数学坐标在Canvas中绘制点(矩形块)
function drawPoint(x,y,width,height){
	width = width || 2;
	height = height || 2;
	x=X(x);
	y=Y(y);
	g.fillStyle="#4080f0";
	g.fillRect(x,y,width,height);
}

function initCanvas() {
    var graph = document.getElementById("graph"); // Get the <canvas> tag
    graph.width = graph.width;  // Magic to clear and reset the canvas element

    window.g = graph.getContext("2d"); // All drawing is done with this object
    window.w = graph.width,		//将 Canvas 的宽度设成全局变量
	window.h = graph.height,	//将 Canvas 的高度设成全局变量
	window.w_half=w/2,		//将 Canvas 的半高度设成全局变量
	window.h_half=h/2;		//将 Canvas 的半宽度设成全局变量

	//画x轴
    g.moveTo(0,h_half);
    g.lineTo(w,h_half);
	g.lineWidth=1;
	g.stroke();

	//画y轴
    g.moveTo(w_half,0);
    g.lineTo(w_half,h);
	g.lineWidth=1;
	g.stroke();
}

//将数学坐标轴坐标转成 Canvas 中以左上角为原点的坐标
function X(x){
	return x+w_half;
}
function Y(y){
	return h_half-y;
}




function compute( T /*图像的放大倍数*/){
	T = T || 1;
	//给这个函数起个短的别名

	var x,y;
	for(var i=-2;i<=2;i+=0.01){
		x = T*(4*(i-1)/(4-i));
		y = T*(Math.sqrt(12-3*i*i)*(16+4*i)/(2*(16-i*i))); 
		drawPoint(x,y);
	}
}


function go(T /*图像的放大倍数*/){
		T = T || 1;
	//给这个函数起个短的别名

	var x,y;
    var N =10;
    var a=[0];
    var b;
    for (var i = 1; i < N; i++) {
      b=[];
      for (var x in a) {
        b.push(a[x]+1);
        b.push(a[x]-1);
      }
      a=b;
      console.log(a.reduce(function (x,y){return Math.abs(x)+Math.abs(y);})/Math.pow(2,i));
      x=i;
      y=T*a.reduce(function (x,y){return Math.abs(x)+Math.abs(y);})/Math.pow(2,i);
      drawPoint(x,y);
      console.log(x+"||"+y);
    }

}






