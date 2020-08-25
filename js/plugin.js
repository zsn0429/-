/*
	jQuery插件
	date: 2017年1月5日
	author: zk
*/

//工具类型插件
;(function($){
	var lightBox = $('<div style = "width: 100%; height: 100%;position: fixed;background-color:rgba(0, 0, 0, 0.6); left: 0; top: 0"></div>');
	$.extend({
		showLightBox: function(){
			if($("body").find(lightBox).size() > 0){
				lightBox.show();
			}else{
				$("body").append(lightBox);
			}
		},
		hideLightBox: function(){
			lightBox.hide();
		}
	});
})(jQuery);

//原型插件，为实例服务
;(function($){
	$.fn.extend({
		zebra: function(color){
			this.find("tbody tr").hover(function(){
				//将tr原背景色保存在当前tr节点上
				$(this).data("oldColor", $(this).css("backgroundColor"));
				//设置hover效果
				$(this).css("backgroundColor", color || "pink");
			},function(){
				//恢复原色彩
				$(this).css("backgroundColor", $(this).data("oldColor"));
				//删除节点临时数据
				$(this).removeData("oldColor");
			});
			return this;
		},
		Colorful: function(color){
			this.on("click", function(e){
				e.stopPropagation();
				$(this).css("backgroundColor", color || "pink");
			});
			return this;
		}
	});
})(jQuery);
