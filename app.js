const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = "<h1>Hello World</h1>";
});

app.listen(3000);