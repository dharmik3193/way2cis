import Footer from "../Components/Footer";
import Headerdemo from "../Components/Headerdemo";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
     return (
          <>
               <Headerdemo />
               {/* ============================================================== */}
               {/* Start Techno Breatcome Area */}
               {/* ============================================================== */}
               <div className="breatcome_area d-flex align-items-center">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-12">
                                   <div className="breatcome_title">
                                        <div className="breatcome_title_inner pb-2">
                                             <h2>Contact Us</h2>
                                        </div>
                                        <div className="breatcome_content">
                                             <ul>
                                                  <li>
                                                       <a href="index.html">Home</a>{" "}
                                                       <i className="fa fa-angle-right" /> <a href="#"> Pages</a>{" "}
                                                       <i className="fa fa-angle-right" /> <span>Contact Us</span>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               {/* ============================================================== */}
               {/* End Techno Breatcome Area */}
               {/* ============================================================== */}


               <>
                    {/* ============================================================== */}
                    {/* Start Techno Contact Address Area */}
                    {/* ============================================================== */}
                    <div className="contact_address_area pt-80 pb-70">
                         <div className="container">
                              <div className="row">
                                   <div className="col-lg-12">
                                        <div className="section_title text_center mb-55">
                                             <div className="section_sub_title uppercase mb-3">
                                                  <h6>CONTACT US</h6>
                                             </div>
                                             <div className="section_main_title">
                                                  <h1>We Are Here For You</h1>
                                             </div>
                                             <div className="em_bar">
                                                  <div className="em_bar_bg" />
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="row">
                                   <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="single_contact_address text_center mb-30">
                                             <div className="row">
                                                  <div className="contact_address_title pb-2 col">
                                                       <h4>India</h4>
                                                  </div>
                                             </div>
                                             <div className="row">
                                                  <div className="col-2 location_icon"><FaMapMarkerAlt /></div>
                                                  <div className="col-10 text-left">803/Gala Empire, Opp. Door-Darshan Tower, Thaltej, Ahmedabad, Gujarat-380059, India.</div>
                                             </div>
                                             <div className="row">
                                                  <div className="col-2 location_icon"><FaPhoneAlt /></div>
                                                  <div className="col-10 text-left">+91 94273 85096</div>
                                             </div>
                                             <div className="row">
                                                  <div className="col-2 location_icon"><FaEnvelope /></div>
                                                  <div className="col-10 text-left">maulik@way2cis.com</div>
                                             </div>

                                        </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="single_contact_address text_center mb-30">
                                             <div className="row">
                                                  <div className="contact_address_title pb-2 col">
                                                       <h4>Oman</h4>
                                                  </div>
                                             </div>
                                             <div className="row">
                                                  <div className="col-2 location_icon"><FaMapMarkerAlt /></div>
                                                  <div className="col-10 text-left">P.O.Box:1890, PC:130 Sultanate of Oman</div>
                                             </div>
                                             <div className="row">
                                                  <div className="col-2 location_icon"><FaPhoneAlt /></div>
                                                  <div className="col-10 text-left">+968-91945242</div>
                                             </div>
                                             <div className="row">
                                                  <div className="col-2 location_icon"><FaEnvelope /></div>
                                                  <div className="col-10 text-left">info@way2cis.com</div>
                                             </div>

                                        </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="single_contact_address text_center mb-30">
                                             <div className="row">
                                                  <div className="contact_address_title pb-2 col">
                                                       <h4>India</h4>
                                                  </div>
                                             </div>
                                             <div className="row">
                                                  <div className="col-2 location_icon"><FaMapMarkerAlt /></div>
                                                  <div className="col-10 text-left">803/Gala Empire, Opp. Door-Darshan Tower, Thaltej, Ahmedabad, Gujarat-380059, India.</div>
                                             </div>
                                             <div className="row">
                                                  <div className="col-2 location_icon"><FaPhoneAlt /></div>
                                                  <div className="col-10 text-left">+91 94273 85096</div>
                                             </div>
                                             <div className="row">
                                                  <div className="col-2 location_icon"><FaEnvelope /></div>
                                                  <div className="col-10 text-left">maulik@way2cis.com</div>
                                             </div>

                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/* ============================================================== */}
                    {/* End Techno Contact Address Area */}
                    {/* ============================================================== */}
               </>


               <Footer />
          </>
     )
}

export default Contact;