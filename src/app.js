const Koa = require("koa");
const koaBody = require("koa-body");

const books = require("./books");

//Server
const app = new Koa();

//Middlerwares
app.use(async (ctx, next) => {
  await next();
  console.log(`${ctx.method} ${ctx.url} - ${ctx.status}`);
});

app.use(koaBody());

//Routes
app.use(books.routes());

module.exports = app;
