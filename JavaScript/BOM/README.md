### BOM

#### 一、window基础（运行window.html）

##### （1）window.innerHeight：浏览器窗口内部高度（包括滚动条）；window.innerWidth：浏览器窗口内部宽度（包括滚动条）

##### （2）window.screen对象在编写时可以不用window前缀。screen.availWidth：可用屏幕宽度；screen.availHeight：可用屏幕高度

##### （3）location.href属性返回当前页面URL

##### （4）location.pathname属性返回URL路径名

##### （5）location.assign ( ) 方法加载新的文档

#### 二、前进、后退、刷新问题（运行hislink.html）

##### （1）前进：history.back ( ) 、history.go ( -1 )

##### （2）后退：history.forward ( ) 、history.go ( 1 ) 

##### （3）刷新：window.location.reload ( ) 、history.go ( 0 )

##### （4）问题：点击刷新时表单内容不会刷新，textarea文本框内容也不会刷新。

#### 三、Navigator（运行navigator.html）

##### window.navigator 对象包含有关访问者浏览器的信息

#### 四、弹窗（运行dialog.html）

##### （1）警告框：window.alert ( " text " ) ; （弹窗可用 “ \ n " 换行）

##### （2）确认框：window.confirm ( " text " ) ;

##### （3）提示框：window.prompt ( " text " , " defaultvalue " ) ;

#### 五、计时事件（运行dialog.html）

##### （1）setInterval ( ) :间隔指定的毫秒数不停地执行指定的代码

##### （2）setTimeout ( ) :在指定的毫秒数后执行指定代码

##### （3）停止执行：window.clearInterval ( intervalVariable ) 

#### 六、Cookie（运行cookie.html）

##### （1）创建cookie：document.cookie = " username = Tom ; expires = Thu, 18 Dec 2043 12:00:00 GMT; path=/ " （三个参数分别为：键值对、过期时间、路径;修改cookie和创建cookie一样，创建的新的cookie会代替原来的cookie）

##### （2）读取cookie：x = document.cookie;

##### （3）删除cookie：设置过期时间为以前的时间即可删除

##### （4）问题：在菜鸟教程中该代码可以正常运行，自己软件运行时cookie值无法保留

