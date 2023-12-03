import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyHeader = () => {

    return (
        <Navbar style={{backgroundColor:"Whitesmoke"}} expand="lg">
            <Container >
                {/* <Navbar.Brand><Link to="">React Playground</Link></Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link><Link to="/multiTable">MultiTable</Link></Nav.Link> */}
                        {/* <Nav.Link><Link to="/simple.form.components">SimpleForm</Link></Nav.Link> */}
                        {/* <Nav.Link><Link to="/react.hookform">React HookForm</Link></Nav.Link> */}
                        {/* <Nav.Link><Link to="/Count-incdec">Counter_INC_DEC</Link></Nav.Link>
                        <Nav.Link><Link to="/wordcounter">Word Counter</Link></Nav.Link>
                        <Nav.Link><Link to="/products">Products List</Link></Nav.Link>
                        <Nav.Link><Link to="/search">Search Bar</Link></Nav.Link>
                        <Nav.Link><Link to="/useproducts">ProductsList2</Link></Nav.Link>
                        <Nav.Link><Link to="/post_form-data">PostFormData</Link></Nav.Link>
                        <Nav.Link><Link to="/weatherapp">WeatherApp</Link></Nav.Link>
                        <Nav.Link><Link to="/count_reducer">Count Reducer</Link></Nav.Link>
                        <Nav.Link><Link to="/count_reducer">Count Reducer</Link></Nav.Link> */}
                        <Nav.Link><Link to="/movies_app">Movies App</Link></Nav.Link>
                        <Nav.Link><Link to="/movie/id"></Link></Nav.Link>
                        <Nav.Link><Link to="/manu">check</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}
export default MyHeader;