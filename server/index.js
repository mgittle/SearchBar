const express = require("express");
const bodyParser = require("body-parser");
const db = require("../database");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../client/dist"));

app.get("/products", (req, res) => {
  var inputString = req.query.inputString;
  db.getProducts(inputString, (err, data) => {
    if (err) throw error;
    res.send(data);
  });
});

app.post("/products", (req, res) => {
  db.insertProduct(
    req.body.productId,
    req.body.productName,
    req.body.category_id,
    (err, data) => {
      if (err) throw err;
      res.send(data);
    }
  );
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
