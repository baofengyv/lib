$(document).ready(function () {
        $(".dropdown-menu-div").each(function () {
            var timer;   //每一个 div  都有一个自己的 timer 变量.
            var div = this;
            $(".dropdown-menu-button", div).bind('mouseenter', function () {
                window.clearTimeout(timer);
                $(".dropdown-menu", div).css("display", "block");
            });
            $(".dropdown-menu-button", div).bind('mouseleave', function () {
                timer = window.setTimeout(function () {
                    $(".dropdown-menu", div).css("display", "none");
                }, 300);
            });
            $(".dropdown-menu", div).bind('mouseenter', function () {
                window.clearTimeout(timer);
            });
            $(".dropdown-menu", div).bind('mouseleave', function () {
                timer = window.setTimeout(function () {
                    $(".dropdown-menu", div).css("display", "none");
                }, 300);
            });
        });
        //给右边的菜单加上 事件处理
        $(".top-menu-item").each(function () {
            var timer;   //每一个 div  都有一个自己的 timer 变量.
            var div = this;
            $(this).bind('mouseenter', function () {
                window.clearTimeout(timer);
                $(".dropdown-menu-left", div).css("display", "block");
            });
            $(this).bind('mouseleave', function () {
                timer = window.setTimeout(function () {
                    $(".dropdown-menu-left", div).css("display", "none");
                }, 300);
            });
//        $(".dropdown-menu").bind('mouseenter', function () {
//            window.clearTimeout(timer);
//        });
//        $(".dropdown-menu",div).bind('mouseleave', function () {
//            timer = window.setTimeout(function () {
//                $(".dropdown-menu", div).css("display", "none");
//            }, 300);
//        });
        });
        $('.search-form-div').on('click', '.search-form', function (e) {
            $(".search-form-input", this).addClass("open-form").focus();

            $('.search-form-input').on('blur', function (e) {
                $(this).removeClass("open-form");
                $(this).unbind("blur");  //这个挺重要 取消对blur 事件的绑定
            });
        });
        //左侧菜单栏上有子菜单的项的单击事件：展开子菜单
        $(".side-menu-root-li-div").click(function () {
            var $this = $(this);
            if ($this.hasClass("side-sub-menu-close")) {
                $this.removeClass("side-sub-menu-close").addClass("side-sub-menu-open");
                $("~.sub-menu", this).slideDown(193);
            } else if ($this.hasClass("side-sub-menu-open")) {
                $this.removeClass("side-sub-menu-open").addClass("side-sub-menu-close");
                $("~.sub-menu", this).slideUp(193);
            }
        });
        //点击菜单项时 添加左侧边栏
        $(".side-menu-root-item").click(function () {
            var $this = $(this);
            var submenu = $(".sub-menu", this);
            //处理没有子菜单的 菜单项
            if (!submenu.length) {
                $(".side-menu-root-item").removeClass("active-menu-item");
                $(".side-menu-root-li-div").removeClass("active-menu-item");
                $this.addClass("active-menu-item");
            }
        });
        $(".sub-menu-item").click(function () {
            $(".side-menu-root-item").removeClass("active-menu-item");
            $(".side-menu-root-li-div").removeClass("active-menu-item");
            $(this).parents(".side-menu-root-item").children(".side-menu-root-li-div").addClass("active-menu-item");
        });
});

//@bfytodo 写完后整理出来作为一个插件