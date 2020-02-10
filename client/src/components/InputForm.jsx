import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";

const InputForm = ({
  categories,
  currentCategory,
  items,
  handleChange,
  handleSubmit,
  handleClick,
  handleSelect,
  handleCompleteClick,
  cartCount
}) => {
  return (
    <div>
      <Navbar variant="dark">
        <Navbar.Brand href="#home">
          <img
            id="logo-nav"
            src="http://nodedockersearch-env.z6b7pgpgn9.us-east-2.elasticbeanstalk.com/FEC-logo.png"
            className="d-inline-block align-top"
            alt="Saskatchewanizon logo"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <DropdownButton
                as={InputGroup.Prepend}
                variant="light"
                onSelect={handleSelect}
                id="dropdown-basic-button"
                title={currentCategory}
              >
                <Dropdown.Item key="0">All</Dropdown.Item>
                {categories.map(category => {
                  return (
                    <Dropdown.Item key={category.id}>
                      {category.name}
                    </Dropdown.Item>
                  );
                })}
              </DropdownButton>
              <FormControl
                id="search-input"
                onChange={handleChange}
                aria-label="Item to search for"
              />
              <InputGroup.Append>
                <Button onClick={handleClick}>
                  <i className="fa fa-search"></i>
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link href="#Language">
            <div className="nav-line-1">EN</div>
            <div className="nav-globe"></div>
          </Nav.Link>
          <Nav.Link href="#Account">
            <div className="nav-line-1">Hello, Sign in</div>
            <div className="nav-line-2">Account & Lists</div>
          </Nav.Link>
          <Nav.Link href="#Orders">
            <div className="nav-line-1">Returns</div>
            <div className="nav-line-2">& Orders</div>
          </Nav.Link>
          <Nav.Link href="#Prime">
            <div className="nav-line-1"></div>
            <div className="nav-line-2">Try Prime</div>
          </Nav.Link>
          <Nav.Link href="#ShoppingCart" className="nav-link-right">
            <div id="nav-cart-count" className="hidden">
              {cartCount}
            </div>
            <div className="nav-cart"></div>
            <div className="nav-line-2 nav-cart-text">Cart</div>
          </Nav.Link>
        </Nav>
      </Navbar>
      <ListGroup id="search-list">
        {Array.from(items).map((item, i) => {
          return (
            <ListGroup.Item
              href="#"
              key={i}
              data-id={item.id}
              action
              onClick={handleCompleteClick}
            >
              {item.name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <Navbar variant="dark">
        <Nav className="justify-content-center">
          <Nav.Link href="#Address">
            <div className="nav-dot-icon"></div>
            <div className="nav-address">
              <div className="nav-line-3">Hello</div>
              <div className="nav-line-4">Select your address</div>
            </div>
          </Nav.Link>
          <Nav.Link href="#deals" className="nav-bottom-links nav-first-bottom">
            Today's Deals
          </Nav.Link>
          <Nav.Link href="#best" className="nav-bottom-links">
            Best Sellers
          </Nav.Link>
          <Nav.Link href="#service" className="nav-bottom-links">
            Customer Service
          </Nav.Link>
          <Nav.Link href="#gift" className="nav-bottom-links">
            Find a Gift
          </Nav.Link>
          <Nav.Link href="#releases" className="nav-bottom-links">
            New Releases
          </Nav.Link>
          <Nav.Link href="#registry" className="nav-bottom-links">
            Registry
          </Nav.Link>
          <Nav.Link href="#cards" className="nav-bottom-links">
            Gift Cards
          </Nav.Link>
          <Nav.Link href="#sellers" className="nav-bottom-links">
            Sellers
          </Nav.Link>
          <Nav.Link href="#amazon" className="nav-bottom-links">
            Saskatchewanazon Basics
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default InputForm;
