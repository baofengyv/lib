function x() {
    $(".diver").each(function () {
        var timer;   //每一个 div  都有一个自己的 timer 变量????
        var div = this;
        var i =0;
        $(this).bind('mouseenter', function () {
            timer = this.innerHTML;
            i++;
            console.log("in"+timer+"|+|"+i);
        });
        $(this).bind('mouseleave', function () {
            timer = 10;
//            timer = window.setTimeout(function () {
//                $(".dropdown-menu", div).css("display", "none");
//            }, 300);
            timer = this.innerHTML;
            i++;
            console.log("out"+timer+"|-|"+i);
        });
    });
}





//@bfytodo 写完后整理出来作为一个插件