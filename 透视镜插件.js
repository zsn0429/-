/*
* @Author: Administrator
* @Date:   2017-01-05 19:05:32
* @Last Modified by:   Administrator
* @Last Modified time: 2017-01-06 08:56:33
*/

(function($){
	$.fn.extend({
		photoscope : function(){
			this.mousemove(function(e){
				var x=e.clientX||e.x;
				var y=e.clientY||e.y;
  				$("#box").css("background","radial-gradient(200px"+ " " +"200px"+ " " +"at"+ " " +x+"px"+ " " +y+"px,transparent,black");				
			});
		}
	})
})(jQuery);