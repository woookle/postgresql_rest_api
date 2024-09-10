const express = require("express");
const userRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.routes");
const port = 3000;

const app = express();

app.use(express.json());
app.use("/api", userRouter);
app.use("/api", postRouter);

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
