#### DOM-2 DOM附加知识点 

##### （1）文档：整个HTML网页文档；对象：网页中的每一个部分都是一个对象；模型：dom树，对象之间的关系，可以更方便的查找对象

##### （2）事件：文档或浏览器窗口中发生的一些特定的交互瞬间（w3school中DOM参考——dom event）

##### （3）文档加载：浏览器加载时读取一行运行一行，js如果写在head标签中，会出现代码执行时，页面还未加载的情况，所以可以将js中的代码都写进window.onload =function ( ) { } 函数中

##### （4）DOM查询：对于没有内容的标签，例如input标签，可以查询元素.value、元素.name、元素.className（class是保留字，不能直接查询元素.class）

##### （5）图片转换问题：imageSwitcher.html

##### （6）复选框选择问题：checkAll.html

##### （7）dom增删改查问题：domCRUD.html

##### （8）获取元素样式（属性中带-的用驼峰命名法，例如background-color应写成backgroundColor）：

###### a.元素.style.属性:获取的是内联样式

###### b.元素.currentStyle.属性:获取元素当前样式，内联样式和外部样式都可以获得（只有IE浏览器支持）

###### c.obj=getComputedStyle ( 元素，伪元素（一般是null） ) ; obj.属性：获取元素样式，内联和外部都可以

##### （9）员工增加、删除：crud.html
