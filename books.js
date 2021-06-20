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

router.get("/:id", (ctx, next) => {
  let getCurrentBook = books.filter((book) => {
    if (book.id == ctx.params.id) return true;
  });

  if (getCurrentBook.length) {
    ctx.body = getCurrentBook[0];
  } else {
    ctx.response.status = 404;
    ctx.body = "Book Not Found";
  }
  next();
});

module.exports = router;
