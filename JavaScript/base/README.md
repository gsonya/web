#### base

##### （1）数据类型：（动态类型）：字符串、数字、布尔、数组、对象

##### （2）对象：

##### a.访问对象属性：person.age、person [ "age" ] 

##### b.对象方法：person.getage（作为属性被访问）、person.getage ( ) （作为方法被访问） 

##### c.创建对象方法：methodname：function ( ) { 代码 } 

##### （3）函数

##### a.函数创建：function functionname ( ) { 代码 } 

##### b.变量生存周期：变量生命期从它们被声明的时间开始，局部变量会在函数运行后被删除，全局变量会在页面关闭后被删除

##### c.未声明对象自动作为window的一个属性，可删除（例如：i=1是未声明变量，var i=1是声明变量）

##### （4）字符串：字符串长度：x.length;转义字符：反斜杠

##### （5）条件:if……else if……else

##### （6）switch：switch ( n ) { case 1:代码 break;case 1:代码 break;default:代码 } 

##### （7）for:for ( var i=0;i<n;i++ ) ;for ( x in person ) 

##### （8）while：while ( 条件 ) { 代码 }  、do { 代码 } 

##### （9）break 语句用于跳出循环。continue 用于跳过循环中的一个迭代

##### （10）类型：

##### a.( 2 ) .constructor用于返回数字2的类型

##### b.将数字转换成字符串并返回结果：String ( 9 )

##### c.将字符串转换成数字：Number ( "9" )、x = + "9"