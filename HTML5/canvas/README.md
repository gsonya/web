#### canvas画布

##### （1）步骤：用canvas创建画布，用JavaScript绘制图像

##### （2）绘制路径

###### a.直线：开始：moveTo ( x , y ) ，结束lineTo ( x, y )

###### b.圆：arc ( x, y, r, start, stop ) : x, y是圆心坐标，r 是半径，start、stop是起始弧度

###### c.文本：实心文本：fillText ( text , x ,y ) 空心文本：strokeText ( text , x, y ) 

##### （3）渐变

###### a.线条渐变：createLinearGradient ( x, y, x1, y1 ) 

###### b.径向/圆渐变：createRadialGradient ( x, y, r, x1, y1, r1 ) 

###### c.文本渐变：strokeStyle （注意：前两个是fillstyle，是填充style；文本渐变是strokeStyle，是线条style）

##### （4）放大画布上绘制好的图像： scale ( 长度倍数 , 宽度倍数）
