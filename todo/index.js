const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html"); //파일 이동
});

app.get("/:memo", (req, res) => {
  const { memo } = req.params;
  console.log("내용: "+memo);
  res.json({ m_content: memo });  
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log("SERVER ON");
});
