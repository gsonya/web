$(function () {
	$(".content_list").mCustomScrollbar();
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
		// 切换播放图标
		$(this).toggleClass("list_menu_play2");
		// 复原其他播放图标
		$(this).parents(".list_music").siblings().find(".list_menu_play").removeClass("list_menu_play2");

		// 同步底部播放按钮
		if($(this).attr("class").indexOf("list_menu_play2") != -1){
			$musicPlay.addClass("music_play2");
		}
		else {
			$musicPlay.removeClass("music_play2");
		}
	});

	// 得到音乐列表
	getPlayerList();
	function  getPlayerList() {
		$.ajax({
			url:"./source/musiclist.json",
			dateType:'json',
			success:function (data) {
				var $musicList=$('.content_list ul');
				$.each(data,function (index,ele) {
					var $item=createMusicItem(index,ele);
					$musicList.append($item);
				})
			},
			error:function (e) {
				console.log(e);
			}
		})
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
			'                                <a href = "javascript:;" title="删除"></a>\n' +
			'                            </div>\n' +
			'                        </li>');
		return $item;
	}
});
