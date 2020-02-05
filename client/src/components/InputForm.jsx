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
  handleCompleteClick
}) => {
  return (
    <div>
      <Navbar variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <img
            src="http://nodedockersearch-env.z6b7pgpgn9.us-east-2.elasticbeanstalk.com/FEC-logo.png"
            className="d-inline-block align-top"
            alt="Saskatchewanizon logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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
          <Nav className="justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <ListGroup>
        {items.map((item, i) => {
          return (
            <ListGroup.Item key={i} action onClick={handleCompleteClick}>
              {item.name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <Navbar variant="dark" expand="sm">
        <Nav className="justify-content-center">
          <Nav.Link href="#deals">Today's Deals</Nav.Link>
          <Nav.Link href="#best">Best Sellers</Nav.Link>
          <Nav.Link href="#service">Customer Service</Nav.Link>
          <Nav.Link href="#gift">Find a Gift</Nav.Link>
          <Nav.Link href="#releases">New Releases</Nav.Link>
          <Nav.Link href="#registry">Registry</Nav.Link>
          <Nav.Link href="#cards">Gift Cards</Nav.Link>
          <Nav.Link href="#sellers">Sellers</Nav.Link>
          <Nav.Link href="#amazon">AmazonBasics</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
//old class name mr-auto for nav

export default InputForm;
