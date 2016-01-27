/**
* 动态加载css文件
* 作者：wikieswan
*/
;(function () {
	window.CssLoader = {
		version : '1.1.1',
		css: function(src,callback){
			var style = document.createElement('link'),
				loaded;
			style.setAttribute('href', src);
			style.rel = 'stylesheet';
			style.type = 'text/css';
		    if (callback) {
		    style.onreadystatechange = style.onload = function() {
		        if (!loaded) {
		          callback();
		        }
		        loaded = true;
		      };
		    }
		    var head = document.getElementsByTagName("head")[0];
		    (head || document.body).appendChild(style);
		    return this;
		}
	}
})();