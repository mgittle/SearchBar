import React from "react";
import ReactDOM from "react-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const InputForm = ({
  items,
  search,
  handleChange,
  handleSubmit,
  handleClick
}) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Saskatchewanizon</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
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
    // <div className="inputform">
    //   <form onSubmit={handleSubmit} autoComplete="off">
    //     <div className="autocomplete">
    //       <input
    //         type="text"
    //         name="search"
    //         id="search"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <button type="submit">
    //       <i className="fa fa-search"></i>
    //     </button>
    //   </form>
    //   <br />
  );
};

export default InputForm;
