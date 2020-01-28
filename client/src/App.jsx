import React from "react";
import axios from "axios";
import data from "./CanadianAPISorryEh.js";
import Categories from "./components/Categories.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: 1
    };
  }

  componentDidMount() {
    for (let i = 0; i < data.length; i++) {
      let obj = {
        productId: data[i].productId,
        productName: data[i].productName,
        category_id: data[i].category_id
      };

      axios
        .post("http://localhost:3000/products", obj)
        .then(response => {
          console.log("The post response is:", response);
        })
        .catch(err => {
          console.error("post failed");
        });
    }
    // axios
    //   .get("http://localhost:3000/products")
    //   .then(response => {
    //     this.setState({
    //       productId: response.data.productId
    //     });
    //   })
    //   .catch(err => {
    //     console.error("warning, error, please head to the nearest exit");
    //   });
  }

  //post data from API to database
  postData() {
    for (let i = 0; i < data.length; i++) {
      let obj = {
        productId: data[i].productId,
        productName: data[i].productName,
        category_id: data[i].category_id
      };

      axios
        .post("http://localhost:3000/products", obj)
        .then(response => {
          console.log("The post response is:", response);
        })
        .catch(err => {
          console.error("post failed");
        });
    }
  }

  render() {
    return (
      <div>
        <h1>Hello there, neighbor</h1>
        <div className="app">
          <Categories />
        </div>
      </div>
    );
  }
}

export default App;
