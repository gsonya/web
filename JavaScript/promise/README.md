#### promise

##### （1）使用promise的目的是优雅地书写复杂的异步任务

##### （2）Promise 构造函数只有一个参数，是一个函数，这个函数在构造之后会直接被异步运行，所以我们称之为起始函数。起始函数包含两个参数 resolve 和 reject

##### （3）resolve 和 reject 都是函数，其中调用 resolve 代表一切正常，reject 是出现异常时所调用的

##### （4）Promise 类有 .then ( )  .catch ( )  和 .finally ( )  三个方法，这三个方法的参数都是一个函数，.then ( )  可以将参数中的函数添加到当前 Promise 的正常执行序列，.catch ( )  则是设定 Promise 的异常处理序列，.finally ( )  是在 Promise 执行的最后一定会执行的序列。 .then ( )  传入的函数会按顺序依次执行，有任何异常都会直接跳到 catch 序列

##### （5）resolve ( )  中可以放置一个参数用于向下一个 then 传递一个值，then 中的函数也可以返回一个值传递给 then。但是，如果 then 中返回的是一个 Promise 对象，那么下一个 then 将相当于对这个返回的 Promise 进行操作


