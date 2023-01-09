import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function TabBar() {

  return (
    <Navbar bg="dark" expand="lg" variant={'dark'}>
      <Container fluid>
        <Navbar.Brand href="#">Giphy</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', display:'flex', gap:'5px' }}
            navbarScroll
          >
            <Link to="/search" style= {{
              textDecoration: "none",
              color: "white"
            }}>Search</Link>
            <Link to="/trending" style= {{
              textDecoration: "none",
              color: "white"
            }}>Trending</Link>
            <Link to="/random" style= {{
              textDecoration: "none",
              color: "white"
            }}>Random</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for Giphy"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TabBar;