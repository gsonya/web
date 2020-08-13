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