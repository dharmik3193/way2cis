import { BsInstagram } from "react-icons/bs";
import '../App.css'

const Footer = () => {
     return (
          <>
               {/*==================================================*/}
               {/*--- Start Techno Footer Middle Area ---*/}
               {/*==================================================*/}
               <div
                    className="footer-middle pt-95"
                    style={{ backgroundImage: "url(assets/images/call-bg.png)" }}
               >
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-3 col-md-6 col-sm-12">
                                   <div className="widget widgets-company-info">
                                        <div className="footer-bottom-logo py-2 mb-3">
                                             <img src="assets/images/logo.png" alt="" className="footer_logo" />
                                        </div>
                                        <div className="company-info-desc">
                                             <p>
                                                  CIS is a multi-company, multi division, multi-branch, multi location, multi-currency based application, which cover the entire area of operations for organization, such as financial management, purchase management, stock control, sales management, fixed assets management, and payroll.
                                             </p>
                                        </div>
                                        <div className="follow-company-info pt-3">
                                             <div className="follow-company-text mr-3">
                                                  <a href="#">
                                                       <p>Follow Us</p>
                                                  </a>
                                             </div>
                                             <div className="follow-company-icon">
                                                  <a href="https://www.facebook.com/WAY2CIS/" target="_blank">
                                                       <i className="fa fa-facebook" />
                                                  </a>
                                                  <a href="https://www.instagram.com/way2cis/" target="_blank">
                                                       {/* <i className="fa fa-twitter" /> */}
                                                       {/* <AiFillInstagram /> */}
                                                       <BsInstagram className='mb-1' />
                                                  </a>
                                                  <a href="https://www.linkedin.com/company/way2cis/" target="_blank">
                                                       <i className="fa fa-linkedin" />
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-lg-3 col-md-6 col-sm-12">
                                   <div className="widget widget-nav-menu">
                                        {/* <h4 className="widget-title pb-4">Our Services</h4>
                                        <div className="menu-quick-link-container ml-4">
                                             <ul id="menu-quick-link" className="menu">
                                                  <li>
                                                       <a href="#">Marketing Strategy</a>
                                                  </li>
                                                  <li>
                                                       <a href="#">Interior Design</a>
                                                  </li>
                                                  <li>
                                                       <a href="#">Digital Services</a>
                                                  </li>
                                                  <li>
                                                       <a href="#">Product Selling</a>
                                                  </li>
                                                  <li>
                                                       <a href="#">Product Design</a>
                                                  </li>
                                                  <li>
                                                       <a href="#">Social Marketing</a>
                                                  </li>
                                             </ul>
                                        </div> */}

                                        <div class="col-md-3 address">
                                             <div class="location">
                                                  <h3 className="location_head my-2">India</h3>
                                                  <ul className="footer_location mt-4">
                                                       <li className="my-1">WAY2CIS</li>
                                                       <li className="my-1"><i class="fa fa-home"></i> 803/Gala Empire, Opp. Door-Darshan Tower, Thaltej, Ahmedabad, Gujarat-380059, India.</li>
                                                       <li className="my-1"><i class="fa fa-phone"></i> <a href="tel:+919427385096">+91 94273 85096</a></li>
                                                       <li className="my-1"><i class="fa fa-envelope"></i> <a href="mailto:maulik@way2cis.com"> maulik@way2cis.com </a></li>
                                                  </ul>
                                             </div>

                                        </div>

                                   </div>
                              </div>
                              <div className="col-lg-3 col-md-6 col-sm-12">
                                   <div class="location">
                                        <h3 className="location_head my-2">Oman</h3>
                                        <ul className="footer_location mt-4">
                                             <li className="my-1">Modern Advance Computer System LLC</li>
                                             <li className="my-1"><i class="fa fa-home"></i>P.O.Box:1890, PC:130 Sultanate of Oman</li>
                                             <li className="my-1"><i class="fa fa-phone"></i> <a href="tel:+968-91945242">+968-91945242</a></li>
                                             <li className="my-1"><i class="fa fa-envelope"></i> <a href="mailto:info@way2cis.com"> info@way2cis.com </a></li>
                                        </ul>
                                   </div>
                              </div>
                              <div className="col-lg-3 col-md-6 col-sm-12">
                                   <div class="location">
                                        <h3 className="location_head my-2">U.A.E</h3>
                                        <ul className="footer_location mt-4">
                                             <li className="my-1">Modern Advance Computer System Fze</li>
                                             <li className="my-1"><i class="fa fa-home"></i>P.O.Box: 7073, Umm Al Quwain, U.A.E</li>
                                             <li className="my-1"><i class="fa fa-phone"></i> <a href="tel:+971-523308910">+971-523308910</a></li>
                                             <li className="my-1"><i class="fa fa-envelope"></i> <a href="mailto:info@way2cis.com"> info@way2cis.com </a></li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                         <div className="row footer-bottom mt-70 pt-3 pb-1">
                              <div className="col-lg-12 col-md-12">
                                   <div className="footer-bottom-content">
                                        <div className="footer-bottom-content-copy">
                                             <p>© 2022 WAY2CIS || All Rights Reserved. </p>
                                        </div>
                                   </div>
                              </div>
                              {/* <div className="col-lg-6 col-md-6">
                                   <div className="footer-bottom-right">
                                        <div className="footer-bottom-right-text">
                                             <a className="absod" href="#">
                                                  Privacy Policy{" "}
                                             </a>
                                             <a href="#"> Terms &amp; Conditions</a>
                                        </div>
                                   </div>
                              </div> */}
                         </div>
                    </div>
               </div>
               {/*==================================================*/}
               {/*--- End Techno Footer Middle Area ---*/}
               {/*==================================================*/}
          </>
     )
}

export default Footer;