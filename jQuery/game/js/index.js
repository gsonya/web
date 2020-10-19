$(function () {
	// 监听游戏规则的点击
	$(".rules").click(function () {
		$(".rule").stop().fadeIn(100);
	});

	// 监听关闭按钮的点击
	$(".close").click(function () {
		$(".rule").stop().fadeOut(100);
	});

	// 监听开始游戏按钮的点击
	$(".start").click(function () {
		$(this).stop().fadeOut(100);
		progressHandler();
		startWolfAnimation();
	});

	// 监听重新开始按钮的点击
	$(".reStart").click(function () {
		$(".mask").stop().fadeOut(100);
        // 重新设置成绩
        $(".score").text('0');
		// 调用处理进度条方法
		progressHandler();
		// 调用灰太狼动画开始的方法
		startWolfAnimation();
	});

	// 定义一个专门处理进度条的方法
	function progressHandler() {
		// 重新设置进度条的宽度
		$(".progress").css({
			width: 180,
		});

		// 开启定时器处理进度条
		var timer = setInterval(function () {
			// 拿到进度条当前的宽度
			var progressWidth = $(".progress").width();
			// 减少当前的宽度
			progressWidth -= 1;
			// 重新给进度条赋值宽度
			$(".progress").css({
				width:progressWidth,
			});
			// 监听进度条是否走完
			if(progressWidth <= 0){
				// 关闭定时器
				clearInterval(timer);
				// 显示重新开始界面
				$(".mask").stop().fadeIn(100);
				stopWolfAnimation();
			}
		},100)
	}

	var wolfTimer;

	// 专门处理灰太狼动画开始的方法
	function startWolfAnimation() {
		// 定义一个数组保存所有灰太狼和小灰灰的图片
		var wolf_1=["./img/h0.png","./img/h1.png","./img/h2.png","./img/h3.png","./img/h4.png","./img/h5.png","./img/h6.png","./img/h7.png","./img/h8.png","./img/h9.png"];
		var wolf_2=['./img/x0.png','./img/x1.png','./img/x2.png','./img/x3.png','./img/x4.png','./img/x5.png','./img/x6.png','./img/x7.png','./img/x8.png','./img/x9.png'];
		// 定义一个数组保存所有可能出现的位置
		var arrPos = [
			{left:"100px",top:"115px"},
			{left:"20px",top:"160px"},
			{left:"190px",top:"142px"},
			{left:"105px",top:"193px"},
			{left:"19px",top:"221px"},
			{left:"202px",top:"212px"},
			{left:"120px",top:"275px"},
			{left:"30px",top:"295px"},
			{left:"209px",top:"297px"},
		];
		// 创建一个图片
		var $wolfImage = $("<img src='' class='wolfImage'>");
		// 随机获取图片的位置
		var posIndex = Math.round(Math.random()*8);
		// 设置图片显示的位置
		$wolfImage.css({
			position:"absolute",
			left:arrPos[posIndex].left,
			top:arrPos[posIndex].top
		});
		// 随机获取数组类型
		var wolfType = Math.round(Math.random()) == 0 ? wolf_1:wolf_2;
		// 设置图片的内容
		window.wolfIndex = 0;
		window.wolfIndexEnd = 5;
		wolfTimer = setInterval(function () {
			if(wolfIndex > window.wolfIndexEnd){
				$wolfImage.remove();
				clearInterval(wolfTimer);
				startWolfAnimation();
			}
			$wolfImage.attr("src",wolfType[wolfIndex]);
			wolfIndex++;
		},300);

		// 将图片添加到界面上
		$(".container").append($wolfImage);

		// 调用处理游戏规则的方法
		gameRules($wolfImage);
	}

	function gameRules($wolfImage) {
		$wolfImage.one("click",function () {
			// 修改索引
			window.wolfIndex = 5;
			window.wolfIndexEnd = 9;
			// 拿到当前图片的地址
			var $src = $(this).attr("src");
			// 根据地址判断是否是灰太狼
			var flag = $src.indexOf("h") >= 0;
			// 根据点击的图片类型增减分数
			if(flag){
				$(".score").text(parseInt($(".score").text()) + 10);
			}else {
				$(".score").text(parseInt($(".score").text()) - 10);
			}
		});
	}

	// 专门处理灰太狼动画停止的方法
	function stopWolfAnimation() {
		$(".wolfImage").remove();
		clearInterval(wolfTimer);
	}
});
