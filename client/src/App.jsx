import React from "react";
import axios from "axios";
import InputForm from "./components/InputForm.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      categories: [],
      currentCategory: "All",
      input: "",
      cartCount: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleCompleteClick = this.handleCompleteClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("cart", event => {
      var newCount = this.state.cartCount + Number(event.detail.count);
      this.setState({ cartCount: newCount }, () => {
        if (`${this.state.cartCount}`.length === 2) {
          document.getElementById("nav-cart-count").classList.add("long-count");
        }
        document.getElementById("nav-cart-count").classList.remove("hidden");
      });
    });

    axios
      .get(
        "http://nodedockersearch-env.z6b7pgpgn9.us-east-2.elasticbeanstalk.com/categories"
      )
      .then(response => {
        this.setState({
          categories: response.data
        });
      })
      .catch(err => {
        console.error("warning, error, please head to the nearest exit");
      });
  }

  handleChange(event) {
    var input = event.target.value;
    var element = document.getElementsByClassName("list-group")[0];
    element.classList.add("hidden");
    this.setState(
      {
        input: input
      },
      () => {
        axios
          .get(
            "http://nodedockersearch-env.z6b7pgpgn9.us-east-2.elasticbeanstalk.com/products",
            {
              params: {
                inputString: this.state.input,
                currentCategory: this.state.currentCategory
              }
            }
          )
          .then(response => {
            this.setState(
              {
                items: response.data
              },
              () => {
                if (this.state.input) {
                  element.classList.remove("hidden");
                }
              }
            );
          })
          .catch(err => {
            console.error("warning, error, please head to the nearest exit");
          });
      }
    );
  }

  handleSelect(event, eventkey) {
    this.setState(
      {
        currentCategory: eventkey.target.innerHTML
      },
      () => {
        axios
          .get(
            "http://nodedockersearch-env.z6b7pgpgn9.us-east-2.elasticbeanstalk.com/products",
            {
              params: {
                inputString: this.state.input,
                currentCategory: this.state.currentCategory
              }
            }
          )
          .then(response => {
            this.setState({
              items: response.data
            });
          })
          .catch(err => {
            console.error("warning, error, please head to the nearest exit");
          });
      }
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    //placeholder for submit functionality
  }

  handleCompleteClick(event) {
    this.setState(
      {
        input: "",
        showSuggestions: false
      },
      () => {
        document.getElementById("search-input").value = "";
        document.getElementById("search-list").classList.add("hidden");
      }
    );
  }

  handleClick(event) {
    //placeholder for submit button functionality
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
    return (
      <div>
        <div className="searchbar">
          <InputForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleClick={this.handleClick}
            handleSelect={this.handleSelect}
            handleCompleteClick={this.handleCompleteClick}
            categories={this.state.categories}
            currentCategory={this.state.currentCategory}
            items={this.state.items.slice(0, 10)}
            cartCount={this.state.cartCount}
          />
        </div>
      </div>
    );
  }
}

export default App;
