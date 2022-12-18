import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, Button } from 'react-bootstrap'
import '../App.css'
import { BsInstagram, BsList } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

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
                                                       <a href="#">
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
                                                       <a href="#" >
                                                            <i className="fa fa-phone" />+968-91945242
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
                                                  <li className='mx-2'>
                                                       <a href="https://www.facebook.com/WAY2CIS/" target="_blank">
                                                            <i className="fa fa-facebook" />
                                                       </a>
                                                  </li>
                                                  <li className='mx-2'>
                                                       <a href="https://www.instagram.com/way2cis/" target="_blank">
                                                            {/* <i className="fa fa-twitter" /> */}
                                                            {/* <AiFillInstagram /> */}
                                                            <BsInstagram className='mb-1' />
                                                       </a>
                                                  </li>

                                                  <li className='mx-2'>
                                                       <a href="https://www.linkedin.com/company/way2cis/" target="_blank">
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
               <Navbar collapseOnSelect expand="lg" bg="loght" variant="dark" className='row'>
                    <Container >

                         <Navbar.Brand href="#home" className='col-3'><img src="assets/images/logo.png" alt="" /></Navbar.Brand>
                         <Navbar.Toggle aria-controls="responsive-navbar-nav" ><BsList /></Navbar.Toggle>
                         <Navbar.Collapse id="responsive-navbar-nav" className='col-8'>
                              <Nav className="me-auto">
                                   <Nav.Link href="#features">Home</Nav.Link>
                                   <Nav.Link href="#features">Company</Nav.Link>
                                   <Nav.Link href="#features">Product</Nav.Link>
                                   <Nav.Link href="#features">Industries</Nav.Link>
                                   <Nav.Link href="#features">Services</Nav.Link>
                                   <Nav.Link href="#features">Partner</Nav.Link>
                                   <Nav.Link href="#features">Career</Nav.Link>
                                   <Nav.Link href="#features">Contact</Nav.Link>
                              </Nav>
                         </Navbar.Collapse>

                    </Container>
               </Navbar>

          </>
     )
}

export default Headerdemo;