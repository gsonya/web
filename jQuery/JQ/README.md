#### jQuery知识点

##### 一、核心函数

##### 二、jQuery对象

##### 三、静态方法和实例方法

##### 四、each方法

##### 五、map方法

##### 六、holdReady方法：使jQuery的ready函数停止和运行

##### 七、jQuery内容选择器

##### 八、属性和属性结点：attr ( ) 和 removeAttr ( ) 

##### 九、attr方法和prop方法（setAttr.html）：prop方法不仅能够操作属性还可以操作属性节点，官方推荐在操作属性节点时，具有true和false两个属性节点，如checked，selected或者disabled使用prop ( ) ，其它的使用attr ( ) 

##### 十、类相关操作（JQdemo/setElement.html）：addClass ( ) 、removeClass ( ) 、toggleClass ( ) 

##### 十一、文本值相关操作（JQdemo/setElement.html）：html ( ) 、text ( ) 、val ( ) 

##### 十二、样式相关操作（JQdemo/setElement.html）：css ( ) 

##### 十三、位置相关操作（position.html）：position（元素距离定位元素的偏移）和offset（元素距离窗口位置的偏移）

##### 十四、scroll方法（scroll.html）、（coupletAd）：获取滚动高度

##### 十五、event

###### （1）事件绑定与解绑：绑定：$ ( 元素 ).事件（例如$ ( " button " ).click ( ) ）；事件解绑：$ ( 元素 ).off  ( 事件 ) 

###### （2）事件冒泡的阻止：在事件中return false或者event.stopPropagation ( ) ；默认行为的阻止（例如点击链接会跳转到该链接页面）：在事件中return false或者event.preventDefault ( ) 

###### （3）事件自动触发：$ ( 元素 ).trigger ( 事件 )（会触发事件冒泡，会触发默认行为）；$ ( 元素 ).triggerHandler ( 事件 ) 

###### （4）自定义事件（event.html）：事件需通过on绑定；通过trigger触发

###### （5）命名空间（event.html）：当元素有多个相同类型的事件时可设置命名空间，$ ( 元素 ).trigger ( 事件.命名空间 )

##### 十六、移入移出（tab.html）

###### （1）mouseover/mouseout事件，子元素被移入移出也会触发父元素的事件

###### （2）mouseenter/mouseleave事件，子元素被移入移出不会触发父元素的事件

##### 十七、slideDown和slideUp（foldTheMenu）：滑动效果