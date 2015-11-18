/**
 * author Remy Sharp
 * url http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 * fork https://github.com/zuk/jquery.inview
 * 
 * @BiFangYu work.bfy@qq.com 进行了小的修改
 * 此插件用来给jQuery增加 inview 事件
 * 使用方法： 
 *      1 给需要触发inview事件的元素添加类canTriggerInviewEvent （见下方代码）
 *      2 绑定事件处理程序（将下方 ‘绑定事件处理程序’ 部分）
 * 
 */
(function($) {
    'use strict';

    function getScrollTop() {
        return window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop;
    }

    function getViewportHeight() {
        var height = window.innerHeight; // Safari, Opera
        // if this is correct then return it. iPad has compat Mode, so will
        // go into check clientHeight (which has the wrong value).
        if (height) {
            return height;
        }
        var mode = document.compatMode;

        if ((mode || !$.support.boxModel)) { // IE, Gecko
            height = (mode === 'CSS1Compat') ?
                document.documentElement.clientHeight : // Standards
                document.body.clientHeight; // Quirks
        }

        return height;
    }

    function offsetTop(debug) {
        // Manually calculate offset rather than using jQuery's offset
        // This works-around iOS < 4 on iPad giving incorrect value
        // cf http://bugs.jquery.com/ticket/6446#comment:9
        var curtop = 0;
        for (var obj = debug; obj; obj = obj.offsetParent) {
            curtop += obj.offsetTop;
        }
        return curtop;
    }

    function checkInView() {
        var viewportTop = getScrollTop(),
            viewportBottom = viewportTop + getViewportHeight();
//@bfy 修改 -->
        $('.canTriggerInviewEvent').each(function() {
//@bfy 修改 <--
            var $el = $(this),
                elTop = offsetTop(this),
                elHeight = $el.height(),
                elBottom = elTop + elHeight,
                wasInView = $el.data('inview') || false,
                offset = $el.data('offset') || 0,
                inView = elTop >= viewportTop && elBottom <= viewportBottom,
                isBottomVisible = elBottom + offset >= viewportTop && elTop <= viewportTop,
                isTopVisible = elTop - offset <= viewportBottom && elBottom >= viewportBottom,
                inViewWithOffset = inView || isBottomVisible || isTopVisible ||
                    (elTop <= viewportTop && elBottom >= viewportBottom);

            if (inViewWithOffset) {
                var visPart = (isTopVisible) ? 'top' : (isBottomVisible) ? 'bottom' : 'both';
                if (!wasInView || wasInView !== visPart) {
                    $el.data('inview', visPart);
                    $el.trigger('inview', [true, visPart]);
                }
            } else if (!inView && wasInView) {
                $el.data('inview', false);
                $el.trigger('inview', [false]);
            }
        });
    }

    function createFunctionLimitedToOneExecutionPerDelay(fn, delay) {
        var shouldRun = false;
        var timer = null;

        function runOncePerDelay() {
            if (timer !== null) {
                shouldRun = true;
                return;
            }
            shouldRun = false;
            fn();
            timer = setTimeout(function() {
                timer = null;
                if (shouldRun) {
                    runOncePerDelay();
                }
            }, delay);
        }

        return runOncePerDelay;
    }

    // ready.inview kicks the event to pick up any elements already in view.
    // note however, this only works if the plugin is included after the elements are bound to 'inview'
    var runner = createFunctionLimitedToOneExecutionPerDelay(checkInView, 100);
    $(window).on('checkInView.inview click.inview ready.inview scroll.inview resize.inview', runner);

    
//@bfy 添加  -->
    $(document).ready(function() {
    	//绑定事件处理程序
    	$('.canTriggerInviewEvent').bind('inview', function (event, visible, topOrBottomOrBoth) {
    		var $this = $(this);
			if (visible == true && topOrBottomOrBoth == "both") {
				$this.animateNumbers($this.data('digit'), false, $this.data('duration')); 
				$this.unbind('inview'); //执行一遍后解除绑定
			}
    	});
    });
//@bfy 添加  <--
})(jQuery);

//Animated Number   数字动画
  $.fn.animateNumbers = function(stop/*结束的数值*/, commas/*千位分隔符*/, duration/*持续时间*/, ease) {
      return this.each(function() {
          var $this = $(this);
          var start = parseInt($this.text().replace(/,/g, ""));
          commas = (commas === undefined) ? true : commas;
          $({value: start}).animate({value: stop}, {
          	//持续时间
				  duration: duration == undefined ? 1000 : duration,
				//liner swing etc..
				  easing: ease == undefined ? "swing" : ease,

				  step: function() {
				        $this.text(Math.floor(this.value));
				        if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));}
				  },
				  
				  complete: function() {
					 //动画完成时执行的函数
				     if (parseInt($this.text()) !== stop) {
				         $this.text(stop);
				         if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));}
				     }
				  }
          });
      });
  };
