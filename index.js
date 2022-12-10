const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World~!");
});

app.get("/role/:id", (req, res) => {
  const { id } = req.params;
  if (id == "hyuntae") {
    res.json({ role: "me" });
  } else {
    res.json({ role: "others" });
  }
  res.send(`Hello ${id} nice to meet you`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
