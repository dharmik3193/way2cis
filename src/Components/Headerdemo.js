import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import "../App.css";
import { BsInstagram, BsList } from "react-icons/bs";
import { Link } from "react-router-dom";

const Headerdemo = () => {
  return (
    <>
      <div className="header_top_menu pt-2 pb-2 bg_color">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-8">
              <div className="header_top_menu_address">
                <div className="header_top_menu_address_inner">
                  <ul>
                    <li>
                      <a href="mailto:info@way2cis.com">
                        <i className="fa fa-envelope-o" />
                        info@way2cis.com
                      </a>
                    </li>
                    {/* <li>
                                                       <a href="#">
                                                            <i className="fa fa-map-marker" />
                                                            24/5, 1st Floor, Kurigram
                                                       </a>
                                                  </li> */}
                    <li>
                      <a href="tel:+968-91945242">
                        <i className="fa fa-phone" />
                        +968-91945242
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4">
              <div className="header_top_menu_icon">
                <div className="header_top_menu_icon_inner">
                  <ul>
                    <li className="mx-2">
                      <a
                        href="https://www.facebook.com/WAY2CIS/"
                        target="_blank"
                      >
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li className="mx-2">
                      <a
                        href="https://www.instagram.com/way2cis/"
                        target="_blank"
                      >
                        {/* <i className="fa fa-twitter" /> */}
                        {/* <AiFillInstagram /> */}
                        <BsInstagram className="mb-1" />
                      </a>
                    </li>

                    <li className="mx-2">
                      <a
                        href="https://www.linkedin.com/company/way2cis/"
                        target="_blank"
                      >
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="loght"
        variant="dark"
        className="row sticky-top"
      >
        <Container>
          <Navbar.Brand className="col-4">
            <Link to="/">
              <img className="logo" src="assets/images/logo.png" alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <BsList />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <ul className="main_menu">
                <li>
                  <Nav.Link>
                    <Link to="/" className="link_color">
                      Home
                    </Link>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link>
                    <Link to="/company" className="link_color">
                      Company
                    </Link>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link>
                    <Link to="/product" className="link_color">
                      Product
                    </Link>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link>
                    <Link to="/industries" className="link_color">
                      Industries
                    </Link>
                  </Nav.Link>
                </li>
                <li className="services">
                  <Nav.Link>Service</Nav.Link>
                  <ul className="submenu">
                    <Link to="/professional_services">
                      {" "}
                      <li>Professional Services</li>
                    </Link>
                    <Link to="/education_services">
                      <li>Education Services</li>
                    </Link>
                    <Link to="/support_services">
                      <li>Support Services</li>
                    </Link>
                    <Link to="/cloud_services">
                      <li>Cloud Services</li>
                    </Link>
                  </ul>
                </li>
                <li>
                  <Nav.Link>
                    <Link to="/partner" className="link_color">
                      Partner
                    </Link>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link>
                    <Link to="/career" className="link_color">
                      Career
                    </Link>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link>
                    <Link to="/contact" className="link_color">
                      Contact
                    </Link>
                  </Nav.Link>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Headerdemo;
