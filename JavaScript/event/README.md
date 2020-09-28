#### event事件

##### （1）事件对象：点击屏幕可获得坐标信息event.clientX、event.clientY

##### （2）div块跟着鼠标移动：div块的left=event.clientX+滚动的距离、top=event.clientY+滚动的距离（注意div块必须进行定位，即position:absolute）

##### （3）事件冒泡：大多数事件冒泡很有用，但是若想取消：event.cancelBubble=true;

##### （4）冒泡的一个应用——事件的委派：给ul设置一个点击事件，则ul内的所有区域都可以响应，若仅仅想让ul中的li区域响应，可设置event.target.className=li类名时才进行响应，这样如果有新加的li项，不用重新绑定点击事件就可以和原来的li一样响应

##### （5）拖拽事件：drag.html

##### （6）键盘事件：控制键盘不能输入数字（keyEvent_input.html），键盘移动div（keyEvent_div.html）

##### （7）计时器：实现图片的切换（timer.html）
