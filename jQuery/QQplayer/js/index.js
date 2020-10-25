$(function () {
	// 自定义滚动条
	$(".content_list").mCustomScrollbar();

	var $audio = $("audio");
	var player = new Player($audio);

	// 加载音乐列表
	getPlayerList();
	function  getPlayerList() {
		$.ajax({
			url:"./source/musiclist.json",
			dateType:'json',
			success:function (data) {
				player.musicList = data;
				var $musicList=$('.content_list ul');
				$.each(data,function (index,ele) {
					var $item=createMusicItem(index,ele);
					$musicList.append($item);
					// console.log(index);
				})
			},
			error:function (e) {
				console.log(e);
			}
		});
	}

	initEvents();

	function  initEvents() {
		// 监听歌曲的移入移出事件
		$(".content_list").delegate('.list_music','mouseenter',function () {
			// 显示子菜单
			$(this).find(".list_menu").stop().fadeIn(100);
			$(this).find(".list_time a").stop().fadeIn(100);
			// 隐藏时长
			$(this).find(".list_time span").stop().fadeOut(100);
		});
		$(".content_list").delegate('.list_music','mouseleave',function () {
			// 隐藏子菜单
			$(this).find(".list_menu").stop().fadeOut(100);
			$(this).find(".list_time a").stop().fadeOut(100);
			// 显示时长
			$(this).find(".list_time span").stop().fadeIn(100);
		});
		// $(".list_music").hover(function () {
		//
		// },function () {
		//
		// });

		// 监听复选框的点击事件
		$(".content_list").delegate('.list_check','click',function () {
			$(this).toggleClass("list_checked");
		});
		// $(".list_check").click(function () {
		//
		// });

		// 添加子菜单播放按钮的监听
		var $musicPlay = $(".music_play");
		$(".content_list").delegate(".list_menu_play","click",function () {
			var $item = $(this).parents('.list_music');
			// 切换播放图标
			$(this).toggleClass("list_menu_play2");
			// 复原其他播放图标
			$item.siblings().find(".list_menu_play").removeClass("list_menu_play2");

			// 同步底部播放按钮
			if($(this).attr("class").indexOf("list_menu_play2") != -1){
				$musicPlay.addClass("music_play2");
				$item.find('div').css('color','#fff');
				$item.siblings().find('div').css('color','rgba(255,255,255,0.5)');
			}
			else {
				$musicPlay.removeClass("music_play2");
				$item.find('div').css('color','rgba(255,255,255,0.5)');
			}
			$item.find('.list_number').toggleClass('list_number2');
			$item.siblings().find('.list_number').removeClass('list_number2');

			player.playMusic($item.get(0).index,$item.get(0).music);
		});
		// 监听底部控制区域播放按钮的点击
		$musicPlay.click(function () {
			// 判断有没有播放过音乐
			if(player.currentIndex == -1){
				$(".list_music").eq(0).find(".list_menu_play").trigger("click");
			}else{
				$(".list_music").eq(player.currentIndex).find(".list_menu_play").trigger("click");
			}
		});
		// 监听底部控制区域上一首按钮的点击
		$(".music_pre").click(function () {
			$(".list_music").eq(player.preIndex()).find(".list_menu_play").trigger("click");
		});
		// 监听底部控制区域下一首按钮的点击
		$(".music_next").click(function () {
			$(".list_music").eq(player.nextIndex()).find(".list_menu_play").trigger("click");
		});

		// 监听删除按钮的点击
		$(".content_list").delegate(".list_menu_del","click",function () {
			// 找到被点击的音乐
			var $item = $(this).parents(".list_music");

			// 判断当前删除的是否是正在播放的
			if($item.get(0).index == player.currentIndex){
				$(".music_next").trigger("click");
			}

			$item.remove();
			player.changeMusic($item.get(0).index);

			// 重新排序
			$(".list_music").each(function (index,ele) {
				ele.index = index;
				$(ele).find(".list_number").text(index+1);
			})
		});
	}

	function createMusicItem(index,music) {
		var $item=$('<li class="list_music">\n' +
			'                            <div class="list_check"><i></i></div>\n' +
			'                            <div class="list_number">'+(index+1)+'</div>\n' +
			'                            <div class="list_name">'+music.name+'\n' +
			'                                <div class="list_menu">\n' +
			'                                    <a href = "javascript:;" title="播放" class="list_menu_play"></a>\n' +
			'                                    <a href = "javascript:;" title="添加"></a>\n' +
			'                                    <a href = "javascript:;" title="下载"></a>\n' +
			'                                    <a href = "javascript:;" title="分享"></a>\n' +
			'                                </div>\n' +
			'                            </div>\n' +
			'                            <div class="list_singer">'+music.singer+'</div>\n' +
			'                            <div class="list_time">\n' +
			'                                <span>'+music.time+'</span>\n' +
			'                                <a href = "javascript:;" title="删除" class="list_menu_del"></a>\n' +
			'                            </div>\n' +
			'                        </li>');
		$item.get(0).index = index;
		$item.get(0).music = music;
		return $item;
	}
});
