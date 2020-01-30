import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";

const InputForm = ({
  categories,
  handleChange,
  handleSubmit,
  handleClick,
  handleSelect
}) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Saskatchewanizon</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <DropdownButton
            onSelect={handleSelect}
            id="dropdown-basic-button"
            title="All Departments"
          >
            <Dropdown.Item key="0">All Departments</Dropdown.Item>
            {categories.map((category, i) => {
              return (
                <Dropdown.Item key={category.id}>{category.name}</Dropdown.Item>
              );
            })}
          </DropdownButton>
        </Nav>
        <Form onSubmit={handleSubmit} inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={handleChange}
          />
          <Button onClick={handleClick} variant="outline-success">
            <i className="fa fa-search"></i>
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
//old class name mr-auto for nav

export default InputForm;
