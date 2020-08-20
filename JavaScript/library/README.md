#### 库

##### （1）JavaScript方式：

##### function myFunction ( ) { 

##### 	var obj = document.getElementById ( " demo " ) ;

##### 	obj.innerHTML = " Test JavaScript " ;

##### } 

##### onload = myFunction;

##### （2）jQuery方式：

##### function myFunction ( ) {

##### 	$ ( " demo " ) .html ( "Test Jqery " ) ;

##### }

##### $ ( document ) .ready ( myFunction ) ;

##### （3）Prototype方式：

##### function myFunction ( ) {

##### 	$ ( " demo " ) .insert ( " Test Prototype " ) ;

##### } 

##### Event.observe ( window , " load " , myFunction ) ;