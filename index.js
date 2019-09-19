const Koa = require('koa')
const app = new Koa()
// Convert用来封装自定义中间件
// const convert = require('koa-convert')
// 使用generator中间件
// const loggerGenerator  = require('./middleware/logger-generator')
const loggerAsync  = require('./middleware/logger-async')

// generator中间件在koa2需要进行封装
// app.use(convert(loggerGenerator()))

// 使用自定义的asyns await中间件
app.use(loggerAsync())

app.use( async (ctx) => {
    ctx.body = 'hello world'
})

app.listen(3000);

console.log('[demo] start-quick is starting at port 3000');
