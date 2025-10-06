const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
};
const mysql = require("mysql");

app.use(cors(corsOptions));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "keuzedeelproj",
});

app.get("/api", (req, res) => {
  res.json({ fruits: ["apple", "banana"] });
});

app.listen(8081, () => {
  console.log("listening");
});
