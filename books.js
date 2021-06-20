const Router = require("koa-router");

const router = new Router({
  prefix: "/books",
});

let books = [
  { id: 101, name: "Fight Club", author: "Chuck Palahniuk" },
  { id: 102, name: "Sharp Objects", author: "Gillian Flynn" },
  { id: 103, name: "Frankenstein", author: "Mary Shelley" },
  { id: 101, name: "Into The Wild", author: "John Krakauer" },
];

router.get("/", (ctx, next) => {
  ctx.body = books;
  next();
});

module.exports = router;
