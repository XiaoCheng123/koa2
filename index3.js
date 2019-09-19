/**
 * GET请求数据获取
 * 
 * 1.是从上下文中直接获取
    请求对象ctx.query，返回如 { a:1, b:2 }
    请求字符串 ctx.querystring，返回如 a=1&b=2
 *
    2.是从上下文的request对象中获取
    请求对象ctx.request.query，返回如 { a:1, b:2 }
    请求字符串 ctx.request.querystring，返回如 a=1&b=2

 *  运行后输入http://localhost:3000/page/user?a=1&b=2
 */

const Koa = require('koa')
const app = new Koa()


app.use( async ( ctx ) => {
  let url = ctx.url
  // 从上下文的request对象中获取
  let request = ctx.request
  let req_query = request.query
  let req_querystring = request.querystring

  // 从上下文中直接获取
  let ctx_query = ctx.query
  let ctx_querystring = ctx.querystring

  ctx.body = {
    url,
    req_query,
    req_querystring,
    ctx_query,
    ctx_querystring
  }
})

app.listen(3000, () => {
  console.log('[demo] request get is starting at port 3000')
})