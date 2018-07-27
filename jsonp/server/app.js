const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()
router.get('/api', (ctx) => {
  const data = {
    name: 'Halo',
    age: '22'
  }
  let cb = ctx.query.jsonpcallback
  const query = {
    jsonpcallback: callback
  }
  if(cb) {
    ctx.body = cb + '(' + JSON.stringify(data)+ ')'
  } else{
    ctx.body = data
  }
})
app.use(router.routes())

app.listen(3000)