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
import "bootstrap/dist/css/bootstrap.min.css";

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
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Saskatchewanizon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <DropdownButton
                  onSelect={handleSelect}
                  id="dropdown-basic-button"
                  title={currentCategory}
                >
                  <Dropdown.Item key="0">All Departments</Dropdown.Item>
                  {categories.map(category => {
                    return (
                      <Dropdown.Item key={category.id}>
                        {category.name}
                      </Dropdown.Item>
                    );
                  })}
                </DropdownButton>
              </InputGroup.Prepend>
              <FormControl
                onChange={handleChange}
                aria-label="Item to search for"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" onClick={handleClick}>
                  <i className="fa fa-search"></i>
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
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
    </div>
  );
};
//old class name mr-auto for nav

export default InputForm;
