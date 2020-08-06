const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const bp = require("body-parser");
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

//to avoid cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/file", require("./routes/files"));
app.use(express.static("public"));

app.get("/index", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(process.env.PORT || 3000, () =>
  console.log("listening on port 3000")
);
