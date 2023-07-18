import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "root" });
});

app.listen(3000, console.log("サーバーを開始します。"));
