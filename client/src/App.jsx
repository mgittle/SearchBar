import React from "react";
import axios from "axios";
// import data from "./CanadianAPISorryEh.js";
import Items from "./components/Items.jsx";
import InputForm from "./components/InputForm.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      categories: [],
      showSuggestions: false,
      input: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/categories")
      .then(response => {
        this.setState(
          {
            categories: response.data
          },
          () => {
            console.log(this.state.categories);
          }
        );
      })
      .catch(err => {
        console.error("warning, error, please head to the nearest exit");
      });
  }

  handleChange(event) {
    this.setState(
      {
        input: event.target.value
      },
      () => {
        axios
          .get("http://localhost:3000/products", {
            params: { inputString: this.state.input }
          })
          .then(response => {
            this.setState(
              {
                items: response.data
              },
              () => {
                console.log(this.state.items);
              }
            );
          })
          .catch(err => {
            console.error("warning, error, please head to the nearest exit");
          });
      }
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(this.state.input);
  }

  handleClick(event) {
    alert(this.state.input);
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
    // if (!this.state.items[0]) {
    //   return <span>Loading...</span>;
    // }

    return (
      <div>
        <div className="searchbar">
          <InputForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleClick={this.handleClick}
            input={this.state.input}
            items={this.state.items}
          />
        </div>
      </div>
    );
  }
}

export default App;
