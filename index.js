const Koa = require('koa')
const app = new Koa()

// Convert用来封装自定义中间件
// const convert = require('koa-convert')
// 使用generator中间件
// const loggerGenerator  = require('./middleware/logger-generator')
const loggerAsync  = require('./middleware/logger-async')

// 使用自定义路由
const route = require('./middleware/routes')

// generator中间件在koa2需要进行封装
// app.use(convert(loggerGenerator()))

// 使用自定义的asyns await中间件
app.use(loggerAsync())

app.use( async (ctx) => {
	// 自定义route中间件
	let url = ctx.request.url
	let html = await route( url )
  ctx.body = html
})

app.listen(3000);

console.log('[demo] start-quick is starting at port 3000');
