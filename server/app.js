// 为运行端口文件 运行方式 node server/app.js

const Koa =require ('koa');
const cors = require('koa-cors');
const router = require('./routers/index');

const app = new Koa();
// 创建一个koa对象 表示web app 本身
app.use(cors()); //解决跨域问题

//对于任何请求，app将调用该异步函数处理请求：

app.use(async (ctx,next)=>{
    console.log(ctx.request.path + ':' + ctx.request.method);
    await next();
});
// app.use(router.routes());
app.listen(3005);
console.log('app started at port 3005...');