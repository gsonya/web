(function (window) {
	function Lyric(path) {
		return new Lyric.prototype.init(path);
	}
	Lyric.prototype = {
		constructor:Lyric,
		init:function (path) {
			this.path = path;
		},
		times: [],
		lyrics: [],
		loadLyric:function (callBack) {
			var $this = this;
			$.ajax({
				url: $this.path,
				dataType: "text",
				success: function (data) {
					$this.parseLysic(data);
					callBack();
				},
				error: function (e) {

				}
			});
		},
		parseLysic:function (data) {
			var $this = this;
			var array = data.split("\n");
			// 时间的正则表达式 [00:00.92]
			var timeReg = /\[(\d*:\d*\.\d*)\]/;
			$.each(array,function (index,ele) {
				// 处理歌词
				var lrc = ele.split("]")[1];
				if(lrc.length == 1) return true;
				$this.lyrics.push(lrc);

				var res = timeReg.exec(ele);
				if(res == null) return true;
				// console.log(res);
				var timeStr = res[1];
				var res2 = timeStr.split(":");
				var min = parseInt(res2[0]) * 60;
				var sec = parseFloat(res2[1]);
				var time = parseFloat(Number(min + sec).toFixed(2));
				$this.times.push(time);


			})
		},
	}
	Lyric.prototype.init.prototype = Lyric.prototype;
	window.Lyric = Lyric;
})(window);
