const mysql = require("mysql");
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig);

//old query that gets all products
// const getProducts = function(callback) {
//   connection.query(`Select * from products`, (err, data) => {
//     if (err) {
//       throw err;
//     } else {
//       callback(null, data);
//     }
//   });
// };

const getProducts = function(inputString, callback) {
  connection.query(
    `SELECT * FROM PRODUCTS WHERE NAME LIKE '${inputString}%'`,
    (err, data) => {
      if (err) {
        throw err;
      } else {
        callback(null, data);
      }
    }
  );
};

const insertProduct = function(productId, productName, category_id, callback) {
  connection.query(
    `Insert into products (id, name, category_id) values ('${productId}', '${productName}','${category_id}')`,
    (err, data) => {
      if (err) {
        throw err;
      } else {
        callback(null, data);
      }
    }
  );
};

module.exports = {
  getProducts,
  insertProduct
};
