#### 链接问题

##### (Html的target)

##### （1）view_window

###### 用户第一次选择内容列表中的某个链接时，浏览器将打开一个新的窗口，然后在其中显示文档内容。如果用户从这个内容列表中选择另一个链接，且这个新窗口仍处于打开状态，浏览器就会再次将选定的文档载入那个窗口，取代刚才的那些文档。

##### 【运行test.html查看效果】

##### （2）View_frame

###### 将这个内容列表放入一个带有两个框架的文档的其中一个框架中，并用这个相邻的框架来显示选定的文档。当用户从左边框架中的目录中选择一个链接时，浏览器会将这个关联的文档载入并显示在右边这个 "view_frame" 框架中。当其他链接被选中时，右边这个框架中的内容也会发生变化，而左边这个框架始终保持不变。

##### 【运行main.html查看效果】

##### （3）_blank

###### 该属性也会使链接打开一个新的窗口展示，但与view_window不同的是，点击链接，浏览器总会打开一个新的窗口，不分情况。

##### （4）_self

###### 它使得目标文档载入并显示在相同的框架或者窗口中作为源文档。

##### （5）_parent

###### 这个目标使得文档载入父窗口或者包含来超链接引用的框架的框架集。如果这个引用是在窗口或者在顶级框架中，那么它与目标 _self 等效。

##### （6）_top

###### 这个目标使得文档载入包含这个超链接的窗口，用 _top 目标将会清除所有被包含的框架并将文档载入整个浏览器窗口。

##### 【（4）、（5）、（6）运行show.html查看效果】
