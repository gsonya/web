#### web worker

##### （1）demo_workers.js中postMessage ( ) 方法是用来向HTML页面传回一段消息

##### （2）创建web worker对象：new Worker ( "demo_workers.js )

##### （3）onmessage : 事件监听器

##### （4）terminate : 终止web worker并释放浏览器资源

#### Application Cache应用程序缓存

##### （1）添加方法：< html manifest = " demo.appache " >

##### （2）manifest文件：扩展名：.appache；三部分：CACHE MANIFEST（在此标题下列出的文件将在首次下载后进行缓存）、NETWORK（在此标题下列出的文件需要与服务器的连接，且不会被缓存）、FALLBACK （在此标题下列出的文件规定当页面无法访问时的回退页面）