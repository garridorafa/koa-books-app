const Koa = require("koa");
const koaBody = require("koa-body");

const books = require("./books");

//Server
const app = new Koa();

//Middlerwares
app.use(koaBody());

//Routes
app.use(books.routes());

//Bootstraping app
app.listen(3000);
