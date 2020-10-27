(function (window) {
	function Progress($progressBar,$progressLine,$progressDot) {
		return new Progress.prototype.init($progressBar,$progressLine,$progressDot);
	}
	Progress.prototype = {
		constructor:Progress,
		init:function ($progressBar,$progressLine,$progressDot) {
			this.$progressBar = $progressBar;
			this.$progressLine = $progressLine;
			this.$progressDot = $progressDot;
		},
		isMove:false,
		progressClick:function (callBack) {
			var $this = this;//此时此刻的this是progress

			// 监听背景的点击
			this.$progressBar.click(function (event) {
				// 获取背景距离窗口默认的位置
				var normalLeft = $(this).offset().left;
				// 获取点击位置距离窗口的位置
				var eventLeft = event.pageX;
				// 设置前景的宽度
				$this.$progressLine.css("width",eventLeft - normalLeft);
				// 获取小圆点的位置
				$this.$progressDot.css("left",eventLeft - normalLeft);
				// 计算进度条的比例
				var value = (eventLeft - normalLeft) / $(this).width();
				callBack(value);
			})
		},
		progressMove:function (callBack) {
			var $this = this;
			var barwidth = this.$progressBar.width();
			var normalLeft = this.$progressBar.offset().left;
			var barWidth = this.$progressBar.width();
			var eventLeft;

			// 监听鼠标的按下事件
			this.$progressBar.mousedown(function () {
				$this.isMove = true;
				// 监听鼠标的移动事件
				$(document).mousemove(function (event) {
					// 获取点击位置距离窗口的位置
					eventLeft = event.pageX;
					var offset = eventLeft - normalLeft;
					if(offset >= 0 && offset <= barwidth){
						// 设置前景的宽度
						$this.$progressLine.css("width",offset);
						// 获取小圆点的位置
						$this.$progressDot.css("left",offset);
					}
				});
			});

			// 监听鼠标的抬起事件
			$(document).mouseup(function () {
				$(document).off("mousemove");
				this.isMove = false;
				// 计算进度条的比例
				var value = (eventLeft - normalLeft) / $this.$progressBar.width();
				callBack(value);

			});
		},
		setProgress:function (value) {
			if(this.isMove) return;
			if(value < 0 || value > 100) return;
			this.$progressLine.css({
				width:value+"%"
			});
			this.$progressDot.css({
				left:value+"%"
			});
		}
	};
	Progress.prototype.init.prototype = Progress.prototype;
	window.Progress = Progress;
})(window);
