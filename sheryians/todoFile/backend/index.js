const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  fs.readdir(`./files`, (err, files) => {
    // console.log(files);
    res.render("index", { files: files });
  });
});

app.get("/files/:filename", (req, res) => {
  fs.readFile(
    path.join(__dirname, "files", req.params.filename),
    "utf8",
    (err, data) => {
      res.render("show", { filename: req.params.filename, data: data });
    }
  );
});

app.get("/edit/:filename", (req, res) => {
  res.render("edit", { filename: req.params.filename });
});

app.post("/edit", (req, res) => {
  fs.rename(
    `./files/${req.body.preName}`,
    `./files/${req.body.newName}`,
    (err) => {
      if (err) console.log(err);
      res.redirect("/");
    }
  );
});
app.post("/create", (req, res) => {
  //   console.log(req.body);
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    req.body.details,
    (err) => {
      if (err) console.error(err);
      res.redirect("/");
    }
  );
});

app.listen(5000, () => console.log("server running"));
