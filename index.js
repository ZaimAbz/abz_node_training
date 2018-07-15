const express = require("express");
const formidable = require("express-formidable");

const app = express();

app.use(express.static("ahmed"));
app.use(formidable());
// const data = { name: "abz", age: 25 };

app.get("/", function(req, res) {
  res.send("/");
});

app.post("/info", function(req, res) {
  res.send(req.fields);
});

app.listen(8000, function() {
  console.log("the app is listening on port 8000");
});
