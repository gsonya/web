### DOM 

#### 一、DOM简介

##### （1）通过id查找HTML元素：getElementById ( id ) 

##### （2）通过标签名查找HTML元素：getElementsByTagName ( tagName ) 

##### （3）通过类名查找HTML元素：getElementsByClassName ( className ) 

#### 二、DOM HTML

##### （1）JavaScript能够创建动态HTML内容：document.write ( Date ( ) );

##### （2）改变HTML内容：document.getElementById ( id ) .innerHTML = " 新文本 " ;

##### （3）改变HTML属性：document.getElementById ( id ) .attribute = " 新属性 " ;

#### 三、DOM CSS

##### （1）改变HTML样式：document.getElementById ( id ) .style.property = " 新样式 " ;

##### （2）使用事件：HTMLDOM允许我们通过触发事件来执行代码：onclick= " document.getElementById ( id ).style.property = ' 新样式 ' " ;

#### 四、DOM 事件

##### （1）如需向HTML分配事件，可以使用事件属性：< button onclick = " displayDate ( ) " > 点击 < / button > ；HTML DOM允许使用 JavaScript 来向 HTML 元素分配事件：document.getElementById ( " myBtn " ) .onclick = function ( ) { displayDate ( ) } ;

##### （2）onload和onunload事件会在用户进入或离开页面时被触发，onload 事件可用于检测访问者的浏览器类型和浏览器版本，并基于这些信息来加载网页的正确版本

##### （3）onchange事件事件常结合对输入字段的验证来使用

##### （4）onmouseover 和 onmouseout 事件可用于在用户的鼠标移至 HTML 元素上方或移出元素时触发函数

##### （5）onmousedown, onmouseup 以及 onclick 构成了鼠标点击事件的所有部分。首先当点击鼠标按钮时，会触发 onmousedown 事件，当释放鼠标按钮时，会触发 onmouseup 事件，最后，当完成鼠标点击时，会触发 onclick 事件