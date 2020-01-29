import React from "react";
import axios from "axios";
import data from "./CanadianAPISorryEh.js";
import Items from "./components/Items.jsx";
import InputForm from "./components/InputForm.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      search: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/products")
      .then(response => {
        this.setState({
          items: response.data
        });
      })
      .catch(err => {
        console.error("warning, error, please head to the nearest exit");
      });
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(this.state.search);
  }

  //post data from API to database
  // postData() {
  // for (let i = 0; i < data.length; i++) {
  //   let obj = {
  //     productId: data[i].productId,
  //     productName: data[i].productName,
  //     category_id: data[i].category_id
  //   };

  //   axios
  //     .post("http://localhost:3000/products", obj)
  //     .then(response => {
  //       console.log("The post response is:", response);
  //     })
  //     .catch(err => {
  //       console.error("post failed");
  //     });
  // }
  // }

  render() {
    if (!this.state.items[0]) {
      return <span>Loading...</span>;
    }

    return (
      <div>
        <h1>Hello there, neighbor</h1>
        <div className="searchbar">
          <InputForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            search={this.state.search}
            items={this.state.items}
          />
        </div>
        <div className="app">
          <Items items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default App;
