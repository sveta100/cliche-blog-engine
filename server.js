import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import https from "https";
import fs from "fs";
import dbconfig from "./config/db.config";
import devServer from "./build/dev-server";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

const indexHTML = (() => {
  return fs.readFileSync(
    path.resolve(__dirname, "./public/index.html"),
    "utf-8"
  );
})();

app.use("/dist", express.static(path.resolve(__dirname, "./dist")));

devServer(app);

const port = process.env.PORT || 4000;

app.get("*", (req, res) => {
  res.write(indexHTML);
  res.end();
  //res.sendfile(path.resolve(__dirname, "./public/index.html"));
});

//TODO: for later use
/* https
  .createServer(
    {
      key: fs.readFileSync("./server.key"),
      cert: fs.readFileSync("./server.cert")
    },
    app
  )
  .listen(port, () => {
    console.log(`Server is listening on port using https ${port}`);
  }); */

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

mongoose.Promise = global.Promise;

//connecting to the db

mongoose.connect(
  dbconfig.url,
  {
    useNewUrlParser: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Connected to the db");
});
