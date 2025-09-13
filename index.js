const express = require("express");
const path = require("path");
const app = express();

// Definindo o EJS como engine de views
app.set("view engine", "ejs");

// Definindo a pasta "views" para armazenar os arquivos .ejs
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index"); // Vai procurar views/index.ejs
});

app.get("/login", (req, res) => {
  res.render("login"); // Vai procurar views/login.ejs
});

app.listen(3000, () => {
  console.log("Servidor esta ligado");
});
