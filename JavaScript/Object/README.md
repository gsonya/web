#### 一、object

##### （1）访问对象属性：objectName.propertyName

##### （2）访问对象方法：objectName.methodName ( )

##### （3）创建对象：new Object ( [ value ] ) 

##### （4）对象构造器：function person ( name , age ) { this.name = name ; this.age = age ; } 

##### （5）for……in 循环 ：for ( variable in object ) { 代码 }

##### （6）对象是可变的，通过引用来传递： 

###### var person = { name : " 张三 " , age : 15 }

###### var x = person; x.age = 10;  //x.age和person.age都会变

#### 二、prototype

##### （1）prototype属性可以给对象的构造函数添加新的属性

##### （2）prototype属性也可以给对象的构造函数添加新的方法

#### 三、Number

##### （1）JavaScript不定义不同类型的数字，比如整数、短、长、浮点等

##### （2）整数最多15位，小数最大位数是17

##### （3）八进制前缀：0；十六进制前缀：0x

##### （4）无穷大：infinity

##### （5）非数字值：NaN

#### 四、String

##### （1）string常见属性：length（字符串长度）

##### （2）常见方法

###### a ) indexOf ( string ) （返回string在句子中的位置，未找到返回-1）

###### b ) match ( string ) （查找特定字符串，找到返回字符串，未找到返回null）

###### c ) replace ( 原string , 替换string )

###### d ) toUpperCase ( ) （小写变大写）；toLowerCase ( ) （大写变小写）

###### e ) split ( "符号" ) （以“符号”分隔）

#### 五、Date

##### （1）创建日期：var myDate=new Date ( ) 

##### （2）设置日期：myDate.setDate ( myDate.getDate ( ) +5 ) （如果增加天数改变了月份或年份，则日期对象自动完成转换） 

##### （3）比较日期：两个日期可以比较大小

#### 六、Array

##### （1）创建数组：var myCars = new Array ( " Saab " , " Volvo " , " BMW " ) 

##### （2）访问数组：myCars [ 0 ] 

##### （3）数组属性：myCars.length ; 数组方法：myCars.indexOf ( " Volvo " ) 

##### （4）创建新方法：Array.prototype.myUcase = function ( ) { } 

#### 七、Boolean

##### 创建：var myBoolean = new Boolean ( ) ;（若布尔对象无初始值，或者是0，-0，null……等值，那么该对象值为false）

#### 八、math

##### 常见方法：Math.round ( 数字 ) （四舍五入）；Math.random ( ) （0至1之间的随机数） 