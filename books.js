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
  ctx.body = {
    status: "success",
    results: books.length,
    data: {
      books,
    },
  };
  next();
});

router.get("/:id", (ctx, next) => {
  let getCurrentBook = books.filter((book) => {
    if (book.id == ctx.params.id) return true;
  });

  if (getCurrentBook.length) {
    ctx.response.status = 200;
    ctx.body = {
      status: "success",
      data: {
        book: getCurrentBook[0],
      },
    };
  } else {
    ctx.response.status = 404;
    ctx.body = {
      status: "fail",
      message: "Book Not Found",
    };
  }
  next();
});

router.post("/", (ctx, next) => {
  if (
    !ctx.request.body.id ||
    !ctx.request.body.name ||
    !ctx.request.body.author
  ) {
    ctx.response.status = 400;
    ctx.body = {
      status: "fail",
      message: "Please enter the complete data",
    };
  } else {
    let newBook = {
      id: ctx.request.body.id,
      name: ctx.request.body.name,
      author: ctx.request.body.author,
    };
    books.push(newBook);
    ctx.status = 201;
    ctx.body = {
      status: "success",
      data: {
        newBook,
      },
    };
  }
  next();
});

module.exports = router;
