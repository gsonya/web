#### jQuery基本结构

##### （1）jQuery本质是一个闭包（可理解为定义一个匿名函数并立即执行。带参数形式：$ ( function ( 形参 ) { do something } ) ( 实参 )）

##### （2）jQuery为什么使用闭包来实现？为了避免多个框架的冲突

##### （3）jQuery如何让外界访问内部定义的局部变量？window.xxx=xxx;

##### （4）jQuery为什么要给自己传递一个window参数？1.为了方便后期压缩代码 2.为了提升查找的效率

##### （5）jQuery为什么要给自己传递一个undefined参数？1.为了方便后期压缩代码 2.IE9以下的浏览器undefined可以被修改，为了保证内部使用的undefined不被修改，所以需要接受一个正确的undefined

##### （6）jQuery的入口函数：

###### 1、传入'' null undefined NaN 0 false，返回空的jQuery对象

###### 2、字符串：

####### 代码片段：会将创建好的DOM元素存储到jQuery对象中返回

####### 选择器：会将找到的所有元素存储到jQuery对象中返回

###### 3、数组：会将数组中存储的元素一次存储到jQuery对象中返回（真数组、伪数组都是）

###### 4、除上述类型以外的：会将传入的数据存储到jQuery对象中返回

##### （7）apply和call方法：

###### 1、window.func.apply( obj )：将找到的func方法内部的this修改为自定义的对象；格式：apply( 对象，[ 数组 ] )

###### 2、window.func.call( obj ) :将找到的func方法内部的this修改为自定义的对象；格式：call( 对象，参数1，参数2，……)

###### 3、真数组转换成伪数组：var arr = [ 1,3,5,7,9 ];var obj = {};[].push.apply ( obj ,arr );（同理可得伪数组转换成真数组，但ie8及以下浏览器不支持，可使用 var arr = [].slice.call ( obj )实现）

