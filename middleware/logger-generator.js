/* ./middleware/logger-generator.js */
// 打印请求详情
function log( ctx ) {
    console.log( ctx.method, ctx.header.host + ctx.url )
}

module.exports = function () {
    return function * ( next ) {

        // 执行中间件的操作
        log( this )

        if ( next ) {
            yield next
        }
    }
}