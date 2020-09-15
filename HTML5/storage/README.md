#### web存储

##### （1）localStorage - 用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去除；sessionStorage - 用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据

##### （2） 常用API

###### a.保存数据：localStorage.setItem ( key,value )

###### b.读取数据：localStorage.getItem ( key )

###### c.删除单个数据：localStorage.removeItem ( key )

###### d.删除所有数据：localStorage.clear ( ) 

###### e.得到某个索引的key：localStorage.key ( index ) 

##### （3）storage.html使用的是简单的数据存储方式，storage_json.html使用的是json数据存储方式（谷歌浏览器可能不能正常显示，Firefox可以显示）