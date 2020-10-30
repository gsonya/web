(function (window,undefined) {
	var njQuery = function (selector) {
		return new njQuery.prototype.init(selector);
	};
	njQuery.prototype = {
		constructor:njQuery,
		init:function (selector) {

			// 0.去掉字符串两端的空格
			selector = njQuery.trim(selector);

			// 1.传入'' null undefined NaN 0 false，返回空的jQuery对象
			if(!selector){
				return this;
			}
			// 2.字符串
			else if(njQuery.isString(selector)){
				// 2.1判断是否是代码片段
				if(njQuery.isHTML(selector)){
					// 1.根据代码片段创建所有的元素
					var temp = document.createElement("div");
					temp.innerHTML = selector;
					// 2.将创建好的一级元素添加到jQuery中
					// for(var i=0;i<temp.children.length;i++){
					// 	this[i] = temp.children[i];
					// }
					// 3.给jQuery对象添加length属性
					// this.length = temp.children.length;

					// 将第二步与第三步优化如下：
					[].push.apply(this,temp.children);
					// 4.返回加工好的this(jQuery)
					return this;
				}
				// 2.2判断是否是选择器
				else{
					// 1.根据传入的选择器找到对应的元素
					var res = document.querySelectorAll(selector);
					// 2.将找到的元素添加到njQuery上
					[].push.apply(this,res);
					// 3.返回加工上的this
					return this;
				}
			}
			// 3.数组
			else if (njQuery.isArray(selector)){
				// 3.1真数组（真数组类型：[object Array]；伪数组类型：[object object]）
				// if(({}).toString.apply(selector) === "[object Array]"){
				// 	[].push.apply(this,selector);
				// 	return this;
				// }
				// 3.2伪数组
				// else{
					// 将自定义的伪数组转换成真数组
					var arr = [].slice.call(selector);
					// 将真数组转换成伪数组
					[].push.apply(this,arr);
					return this;
				// }
			}
		}
	};
	njQuery.isString = function(str){
		return typeof str ==="string";
	};
	njQuery.isHTML = function(str){
		return str.charAt(0) == "<" && str.charAt(str.length - 1) == ">" && str.length >= 3
	};
	njQuery.isArray = function(str){
		return typeof str === "object" && "length" in str && str !== window;
	};
	njQuery.trim = function(str){
		if(!njQuery.isString(str)){
			return str;
		}
		if(str.trim){
			return str.trim();
		}else{
			return str.replace(/^\s+|\s+$/g,"");
		}
	};
	njQuery.prototype.init.prototype = njQuery.prototype;
	window.njQuery = window.$ = njQuery;
})(window);
