import Headerdemo from "../../Components/Headerdemo";
import Footer from "../../Components/Footer";
import Testimonial from "../../Components/Testimonial";
import { Link } from "react-router-dom";

const Products = () => {
     return (
          <>
               <Headerdemo />
               <>
                    {/* ============================================================== */}
                    {/* Start Techno Breatcome Area */}
                    {/* ============================================================== */}
                    <div className="breatcome_area d-flex align-items-center">
                         <div className="container">
                              <div className="row">
                                   <div className="col-lg-12">
                                        <div className="breatcome_title">
                                             <div className="breatcome_title_inner pb-2">
                                                  <h2>Our Products</h2>
                                             </div>
                                             <div className="breatcome_content">
                                                  <ul>
                                                       <li>
                                                            <a href="index.html">Home</a>{" "}
                                                            <i className="fa fa-angle-right" /> <a href="#"> Pages</a>{" "}
                                                            <i className="fa fa-angle-right" /> <span>Our Products</span>
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


                    {/*==================================================*/}
                    {/*--- Start Techno Flipbox Area ---*/}
                    {/*==================================================*/}
                    <div className="flipbox_area pages pt-85 pb-70">
                         <div className="container">
                              <div className="row">
                                   <div className="col-lg-12">
                                        <div className="section_title text_center mb-55">
                                             <div className="section_sub_title uppercase mb-3">
                                                  <h6>Product</h6>
                                             </div>
                                             <div className="section_main_title">
                                                  <h1>Provide Exclusive Products</h1>
                                             </div>
                                             <div className="em_bar">
                                                  <div className="em_bar_bg" />
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="row">
                                   <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
                                        <div className="techno_flipbox mb-30">
                                             <div className="techno_flipbox_font">
                                                  <div className="techno_flipbox_inner">
                                                       <div className="techno_flipbox_icon">
                                                            <div className="icon">
                                                                 <i className="flaticon-padlock" />
                                                            </div>
                                                       </div>
                                                       <div className="flipbox_title">
                                                            <h3>Purchase Management System</h3>
                                                       </div>
                                                       <div className="flipbox_desc">
                                                            {/* <p>
                                                                 Porem asum molor sit amet, consectetur adipiscing do miusmod
                                                                 tempor.
                                                            </p> */}
                                                       </div>
                                                  </div>
                                             </div>
                                             <div
                                                  className="techno_flipbox_back "
                                                  style={{ backgroundImage: "url(assets/images/feature1.jpg)" }}
                                             >
                                                  <div className="techno_flipbox_inner">
                                                       <div className="flipbox_title">
                                                            <h3>Purchase Management System</h3>
                                                       </div>
                                                       <div className="flipbox_desc">
                                                            <p>
                                                                 Purchase Management System is a tool for managing your day-to-day purchases.
                                                            </p>
                                                       </div>
                                                       <div className="flipbox_button">
                                                            <Link to="/purchase_management">
                                                                 Learn More
                                                                 <i className="fa fa-angle-double-right" />
                                                            </Link>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
                                        <div className="techno_flipbox mb-30">
                                             <div className="techno_flipbox_font">
                                                  <div className="techno_flipbox_inner">
                                                       <div className="techno_flipbox_icon">
                                                            <div className="icon">
                                                                 <i className="flaticon-intelligent" />
                                                            </div>
                                                       </div>
                                                       <div className="flipbox_title">
                                                            <h3>Sales Management System</h3>
                                                       </div>
                                                       <div className="flipbox_desc">
                                                            <p>
                                                                 {/* Porem asum molor sit amet, consectetur adipiscing do miusmod
                                                                 tempor. */}
                                                            </p>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div
                                                  className="techno_flipbox_back "
                                                  style={{ backgroundImage: "url(assets/images/feature2.jpg)" }}
                                             >
                                                  <div className="techno_flipbox_inner">
                                                       <div className="flipbox_title">
                                                            <h3>Sales Management System</h3>
                                                       </div>
                                                       <div className="flipbox_desc">
                                                            <p>
                                                                 An effective sales management process will encompass lead and opportunity management.
                                                            </p>
                                                       </div>
                                                       <div className="flipbox_button">
                                                            <Link to='/sales_management'>
                                                                 Learn More
                                                                 <i className="fa fa-angle-double-right" />
                                                            </Link>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
                                        <div className="techno_flipbox mb-30">
                                             <div className="techno_flipbox_font">
                                                  <div className="techno_flipbox_inner">
                                                       <div className="techno_flipbox_icon">
                                                            <div className="icon">
                                                                 <i className="flaticon-code" />
                                                            </div>
                                                       </div>
                                                       <div className="flipbox_title">
                                                            <h3>Inventory Management System</h3>
                                                       </div>
                                                       <div className="flipbox_desc">
                                                            {/* <p>
                                                                 Porem asum molor sit amet, consectetur adipiscing do miusmod
                                                                 tempor.
                                                            </p> */}
                                                       </div>
                                                  </div>
                                             </div>
                                             <div
                                                  className="techno_flipbox_back "
                                                  style={{ backgroundImage: "url(assets/images/feature3.jpg)" }}
                                             >
                                                  <div className="techno_flipbox_inner">
                                                       <div className="flipbox_title">
                                                            <h3>Inventory Management System</h3>
                                                       </div>
                                                       <div className="flipbox_desc">
                                                            <p>
                                                                 Inventory management systems centralizes the process for controlling the flow and maintenance of inventory
                                                            </p>
                                                       </div>
                                                       <div className="flipbox_button">
                                                            <Link to='/inventory_management'>

                                                                 Learn More
                                                                 <i className="fa fa-angle-double-right" />

                                                            </Link>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
                                        <div className="techno_flipbox mb-30">
                                             <div className="techno_flipbox_font">
                                                  <div className="techno_flipbox_inner">
                                                       <div className="techno_flipbox_icon">
                                                            <div className="icon">
                                                                 <i className="flaticon-content-writing" />
                                                            </div>
                                                       </div>
                                                       <div className="flipbox_title">
                                                            <h3>Production Management System</h3>
                                                       </div>
                                                       <div className="flipbox_desc">
                                                            {/* <p>
                                                                 Porem asum molor sit amet, consectetur adipiscing do miusmod
                                                                 tempor.
                                                            </p> */}
                                                       </div>
                                                  </div>
                                             </div>
                                             <div
                                                  className="techno_flipbox_back "
                                                  style={{ backgroundImage: "url(assets/images/feature3.jpg)" }}
                                             >
                                                  <div className="techno_flipbox_inner">
                                                       <div className="flipbox_title">
                                                            <h3>Production Management System</h3>
                                                       </div>
                                                       <div className="flipbox_desc">
                                                            <p>
                                                                 We provides variety of worksheets assist you in production process.
                                                            </p>
                                                       </div>
                                                       <div className="flipbox_button">
                                                            <Link to='/production_management'>

                                                                 Learn More
                                                                 <i className="fa fa-angle-double-right" />

                                                            </Link>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
                                        <div className="techno_flipbox mb-30">
                                             <div className="techno_flipbox_font">
                                                  <div className="techno_flipbox_inner">
                                                       <div className="techno_flipbox_icon">
                                                            <div className="icon">
                                                                 <i className="flaticon-bar-chart" />
                                                            </div>
                                                       </div>
                                                       <div className="flipbox_title">
                                                            <h3>Financial Management System</h3>
                                                       </div>
                                                       <div className="flipbox_desc">
                                                            {/* <p>
                                                                 Porem asum molor sit amet, consectetur adipiscing do miusmod
                                                                 tempor.
                                                            </p> */}
                                                       </div>
                                                  </div>
                                             </div>
                                             <div
                                                  className="techno_flipbox_back "
                                                  style={{ backgroundImage: "url(assets/images/feature1.jpg)" }}
                                             >
                                                  <div className="techno_flipbox_inner">
                                                       <div className="flipbox_title">
                                                            <h3>Financial Management System</h3>
                                                       </div>
                                                       <div className="flipbox_desc">
                                                            <p>
                                                                 Finance System help the user to identified the customer total outstanding as well as supplier out standing.
                                                            </p>
                                                       </div>
                                                       <div className="flipbox_button">
                                                            <Link to='/financial_management'>

                                                                 Learn More
                                                                 <i className="fa fa-angle-double-right" />

                                                            </Link>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
                                        <div className="techno_flipbox mb-30">
                                             <div className="techno_flipbox_font">
                                                  <div className="techno_flipbox_inner">
                                                       <div className="techno_flipbox_icon">
                                                            <div className="icon">
                                                                 <i className="flaticon-business-and-finance" />
                                                            </div>
                                                       </div>
                                                       <div className="flipbox_title">
                                                            <h3>Fixed Assets Management System</h3>
                                                       </div>
                                                       <div className="flipbox_desc">
                                                            {/* <p>
                                                                 Porem asum molor sit amet, consectetur adipiscing do miusmod
                                                                 tempor.
                                                            </p> */}
                                                       </div>
                                                  </div>
                                             </div>
                                             <div
                                                  className="techno_flipbox_back "
                                                  style={{ backgroundImage: "url(assets/images/feature2.jpg)" }}
                                             >
                                                  <div className="techno_flipbox_inner">
                                                       <div className="flipbox_title">
                                                            <h3>Fixed Assets Management System</h3>
                                                       </div>
                                                       <div className="flipbox_desc">
                                                            <p>
                                                                 Fixed Assets Management System keeps all records related to fixed asset transactions.
                                                            </p>
                                                       </div>
                                                       <div className="flipbox_button">
                                                            <Link to='/fixed-assets_management'>

                                                                 Learn More
                                                                 <i className="fa fa-angle-double-right" />

                                                            </Link>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
                                        <div className="techno_flipbox mb-30">
                                             <div className="techno_flipbox_font">
                                                  <div className="techno_flipbox_inner">
                                                       <div className="techno_flipbox_icon">
                                                            <div className="icon">
                                                                 <i className="flaticon-business-and-finance" />
                                                            </div>
                                                       </div>
                                                       <div className="flipbox_title">
                                                            <h3>Automobile Management</h3>
                                                       </div>
                                                       <div className="flipbox_desc">
                                                            {/* <p>
                                                                 Porem asum molor sit amet, consectetur adipiscing do miusmod
                                                                 tempor.
                                                            </p> */}
                                                       </div>
                                                  </div>
                                             </div>
                                             <div
                                                  className="techno_flipbox_back "
                                                  style={{ backgroundImage: "url(assets/images/feature2.jpg)" }}
                                             >
                                                  <div className="techno_flipbox_inner">
                                                       <div className="flipbox_title">
                                                            <h3>Automobile Management</h3>
                                                       </div>
                                                       <div className="flipbox_desc">
                                                            <p>
                                                                 We Provides a Fully Automated Environment Where You can see the work progress.
                                                            </p>
                                                       </div>
                                                       <div className="flipbox_button">
                                                            <Link to='/automobile_management'>

                                                                 Learn More
                                                                 <i className="fa fa-angle-double-right" />

                                                            </Link>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
                                        <div className="techno_flipbox mb-30">
                                             <div className="techno_flipbox_font">
                                                  <div className="techno_flipbox_inner">
                                                       <div className="techno_flipbox_icon">
                                                            <div className="icon">
                                                                 <i className="flaticon-business-and-finance" />
                                                            </div>
                                                       </div>
                                                       <div className="flipbox_title">
                                                            <h3>POS System</h3>
                                                       </div>
                                                       <div className="flipbox_desc">
                                                            {/* <p>
                                                                 Porem asum molor sit amet, consectetur adipiscing do miusmod
                                                                 tempor.
                                                            </p> */}
                                                       </div>
                                                  </div>
                                             </div>
                                             <div
                                                  className="techno_flipbox_back "
                                                  style={{ backgroundImage: "url(assets/images/feature2.jpg)" }}
                                             >
                                                  <div className="techno_flipbox_inner">
                                                       <div className="flipbox_title">
                                                            <h3>POS System</h3>
                                                       </div>
                                                       <div className="flipbox_desc">
                                                            <p>
                                                                 Transform the store with a true, single commerce (online, in-store, call center) platform.
                                                            </p>
                                                       </div>
                                                       <div className="flipbox_button">
                                                            <a href="">
                                                                 Learn More
                                                                 <i className="fa fa-angle-double-right" />
                                                            </a>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
                                        <div className="techno_flipbox mb-30">
                                             <div className="techno_flipbox_font">
                                                  <div className="techno_flipbox_inner">
                                                       <div className="techno_flipbox_icon">
                                                            <div className="icon">
                                                                 <i className="flaticon-business-and-finance" />
                                                            </div>
                                                       </div>
                                                       <div className="flipbox_title">
                                                            <h3>Fleet Management</h3>
                                                       </div>
                                                       <div className="flipbox_desc">
                                                            {/* <p>
                                                                 Porem asum molor sit amet, consectetur adipiscing do miusmod
                                                                 tempor.
                                                            </p> */}
                                                       </div>
                                                  </div>
                                             </div>
                                             <div
                                                  className="techno_flipbox_back "
                                                  style={{ backgroundImage: "url(assets/images/feature2.jpg)" }}
                                             >
                                                  <div className="techno_flipbox_inner">
                                                       <div className="flipbox_title">
                                                            <h3>Fleet Management</h3>
                                                       </div>
                                                       <div className="flipbox_desc">
                                                            <p>
                                                                 The goal here is is to keep the fleet operating smoothly by reducing costs, and ensuring compliance with government regulations.
                                                            </p>
                                                       </div>
                                                       <div className="flipbox_button">
                                                            <a href="">
                                                                 Learn More
                                                                 <i className="fa fa-angle-double-right" />
                                                            </a>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
                                        <div className="techno_flipbox mb-30">
                                             <div className="techno_flipbox_font">
                                                  <div className="techno_flipbox_inner">
                                                       <div className="techno_flipbox_icon">
                                                            <div className="icon">
                                                                 <i className="flaticon-business-and-finance" />
                                                            </div>
                                                       </div>
                                                       <div className="flipbox_title">
                                                            <h3>Property Management</h3>
                                                       </div>
                                                       <div className="flipbox_desc">
                                                            {/* <p>
                                                                 Porem asum molor sit amet, consectetur adipiscing do miusmod
                                                                 tempor.
                                                            </p> */}
                                                       </div>
                                                  </div>
                                             </div>
                                             <div
                                                  className="techno_flipbox_back "
                                                  style={{ backgroundImage: "url(assets/images/feature2.jpg)" }}
                                             >
                                                  <div className="techno_flipbox_inner">
                                                       <div className="flipbox_title">
                                                            <h3>Property Management</h3>
                                                       </div>
                                                       <div className="flipbox_desc">
                                                            <p>
                                                                 Property management software is designed to help property managers manage residential and commercial properties on behalf of their owners.
                                                            </p>
                                                       </div>
                                                       <div className="flipbox_button">
                                                            <a href="">
                                                                 Learn More
                                                                 <i className="fa fa-angle-double-right" />
                                                            </a>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
                                        <div className="techno_flipbox mb-30">
                                             <div className="techno_flipbox_font">
                                                  <div className="techno_flipbox_inner">
                                                       <div className="techno_flipbox_icon">
                                                            <div className="icon">
                                                                 <i className="flaticon-business-and-finance" />
                                                            </div>
                                                       </div>
                                                       <div className="flipbox_title">
                                                            <h3>Service Management</h3>
                                                       </div>
                                                       <div className="flipbox_desc">
                                                            {/* <p>
                                                                 Porem asum molor sit amet, consectetur adipiscing do miusmod
                                                                 tempor.
                                                            </p> */}
                                                       </div>
                                                  </div>
                                             </div>
                                             <div
                                                  className="techno_flipbox_back "
                                                  style={{ backgroundImage: "url(assets/images/feature2.jpg)" }}
                                             >
                                                  <div className="techno_flipbox_inner">
                                                       <div className="flipbox_title">
                                                            <h3>Service Management</h3>
                                                       </div>
                                                       <div className="flipbox_desc">
                                                            <p>
                                                                 FSM software is normally used by companies that focus on handling installs, repairs, and services of work equipment.
                                                            </p>
                                                       </div>
                                                       <div className="flipbox_button">
                                                            <a href="">
                                                                 Learn More
                                                                 <i className="fa fa-angle-double-right" />
                                                            </a>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
                                        <div className="techno_flipbox mb-30">
                                             <div className="techno_flipbox_font">
                                                  <div className="techno_flipbox_inner">
                                                       <div className="techno_flipbox_icon">
                                                            <div className="icon">
                                                                 <i className="flaticon-business-and-finance" />
                                                            </div>
                                                       </div>
                                                       <div className="flipbox_title">
                                                            <h3>Payroll & HR Management System</h3>
                                                       </div>
                                                       <div className="flipbox_desc">
                                                            {/* <p>
                                                                 Porem asum molor sit amet, consectetur adipiscing do miusmod
                                                                 tempor.
                                                            </p> */}
                                                       </div>
                                                  </div>
                                             </div>
                                             <div
                                                  className="techno_flipbox_back "
                                                  style={{ backgroundImage: "url(assets/images/feature2.jpg)" }}
                                             >
                                                  <div className="techno_flipbox_inner">
                                                       <div className="flipbox_title">
                                                            <h3>Payroll & HR Management System</h3>
                                                       </div>
                                                       <div className="flipbox_desc">
                                                            <p>
                                                                 Payroll Management System is one of the most important functions of an organization.
                                                            </p>
                                                       </div>
                                                       <div className="flipbox_button">
                                                            <a href="">
                                                                 Learn More
                                                                 <i className="fa fa-angle-double-right" />
                                                            </a>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
                                        <div className="techno_flipbox mb-30">
                                             <div className="techno_flipbox_font">
                                                  <div className="techno_flipbox_inner">
                                                       <div className="techno_flipbox_icon">
                                                            <div className="icon">
                                                                 <i className="flaticon-business-and-finance" />
                                                            </div>
                                                       </div>
                                                       <div className="flipbox_title">
                                                            <h3>Portfolio Management System</h3>
                                                       </div>
                                                       <div className="flipbox_desc">
                                                            {/* <p>
                                                                 Porem asum molor sit amet, consectetur adipiscing do miusmod
                                                                 tempor.
                                                            </p> */}
                                                       </div>
                                                  </div>
                                             </div>
                                             <div
                                                  className="techno_flipbox_back "
                                                  style={{ backgroundImage: "url(assets/images/feature2.jpg)" }}
                                             >
                                                  <div className="techno_flipbox_inner">
                                                       <div className="flipbox_title">
                                                            <h3>Portfolio Management System</h3>
                                                       </div>
                                                       <div className="flipbox_desc">
                                                            <p>
                                                                 Portfolio management is to maximize the investments' expected return given an appropriate level of risk exposure.
                                                            </p>
                                                       </div>
                                                       <div className="flipbox_button">
                                                            <a href="">
                                                                 Learn More
                                                                 <i className="fa fa-angle-double-right" />
                                                            </a>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/*==================================================*/}
                    {/*--- End Techno Flipbox Area ---*/}
                    {/*==================================================*/}
                    {/*==================================================*/}
                    {/*--- Start Techno Accordion Area ---*/}
                    {/*==================================================*/}
                    <div className="accordion-area about-pages">
                         <div className="container-fluid">
                              <div className="row">
                                   <div className="col-lg-6 main-accordion-lt">
                                        {/* Start Accordion */}
                                        <div className="acd-items acd-arrow pt-30 pb-30 mr-4">
                                             <div className="section_title white text_left mb-60 mt-3">
                                                  <div className="section_sub_title uppercase mb-3">
                                                       <h6>WHY CHOOSE US</h6>
                                                  </div>
                                                  <div className="section_main_title">
                                                       <h1>We Provide World Class</h1>
                                                       <h1>IT Solution Service</h1>
                                                  </div>
                                                  <div className="em_bar">
                                                       <div className="em_bar_bg" />
                                                  </div>
                                             </div>
                                             <div className="panel-group symb" id="accordion">
                                                  <div className="panel panel-default">
                                                       <div className="panel-heading mb-3">
                                                            <h4 className="panel-title">
                                                                 <a
                                                                      data-toggle="collapse"
                                                                      data-parent="#accordion"
                                                                      href="#ac1"
                                                                 >
                                                                      <i className="fa fa-check-circle" />
                                                                      Best IT Solution Provider
                                                                 </a>
                                                            </h4>
                                                       </div>
                                                       <div id="ac1" className="panel-collapse in">
                                                            <div className="panel-body pl-4 pr-4">
                                                                 <p>
                                                                      There are many variations of passages of Lorem Ipsum
                                                                      available, but the majority have suffered alteration in
                                                                      some form, by injected humour, or randomised words which
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="panel panel-default">
                                                       <div className="panel-heading mb-3">
                                                            <h4 className="panel-title">
                                                                 <a
                                                                      data-toggle="collapse"
                                                                      data-parent="#accordion"
                                                                      href="#ac2"
                                                                 >
                                                                      <i className="fa fa-check-circle" />
                                                                      Experienced Engineers
                                                                 </a>
                                                            </h4>
                                                       </div>
                                                       <div id="ac2" className="panel-collapse collapse">
                                                            <div className="panel-body pl-4 pr-4">
                                                                 <p>
                                                                      There are many variations of passages of Lorem Ipsum
                                                                      available, but the majority have suffered alteration in
                                                                      some form,
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="panel panel-default">
                                                       <div className="panel-heading mb-3">
                                                            <h4 className="panel-title">
                                                                 <a
                                                                      data-toggle="collapse"
                                                                      data-parent="#accordion"
                                                                      href="#ac3"
                                                                 >
                                                                      <i className="fa fa-check-circle" />
                                                                      Internet Of Things
                                                                 </a>
                                                            </h4>
                                                       </div>
                                                       <div id="ac3" className="panel-collapse collapse">
                                                            <div className="panel-body pl-4 pr-4">
                                                                 <p>
                                                                      There are many variations of passages of Lorem Ipsum
                                                                      available, but the majority have suffered alteration in
                                                                      some form, by injected humour, or randomised words which
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        {/* End Accordion */}
                                   </div>
                                   <div className="col-lg-6 absod">
                                        <div className="single-panel">
                                             <div className="single-panel-thumb">
                                                  <div className="single-panel-thumb-inner">
                                                       <img src="assets/images/video1.jpg" alt="" />
                                                  </div>
                                                  <div className="main_video text_center">
                                                       <div className="video-icon">
                                                            <a
                                                                 className="video-vemo-icon venobox vbox-item"
                                                                 data-vbtype="youtube"
                                                                 data-autoplay="true"
                                                                 href="https://youtu.be/BS4TUd7FJSg"
                                                            >
                                                                 <i className="fa fa-play" />
                                                            </a>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/*==================================================*/}
                    {/*--- End Techno Accordion Area ---*/}
                    {/*==================================================*/}
                    {/*==================================================*/}
                    {/*--- Start Techno Pricing Area ---*/}
                    {/*==================================================*/}
                    <div className="pricing_area pt-80 pb-70" id="pricing">
                         <div className="container">
                              <div className="row">
                                   {/* Start Section Tile */}
                                   <div className="col-lg-12">
                                        <div className="section_title text_center mb-50 mt-3">
                                             <div className="section_sub_title uppercase mb-3">
                                                  <h6>PRICING AND PLAN</h6>
                                             </div>
                                             <div className="section_main_title">
                                                  <h1>Choose Your Best Plan</h1>
                                             </div>
                                             <div className="em_bar">
                                                  <div className="em_bar_bg" />
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="row">
                                   <div className="col-lg-4 col-md-6 col-sm-12">
                                        {/* Single Pricing */}
                                        <div className="single_pricing mb-4">
                                             <div className="single_pricing_content">
                                                  <div className="single_pricing_content_inner">
                                                       <div className="pricing_head pb-4">
                                                            <div className="pricing_title">
                                                                 <h3>Basic Plan</h3>
                                                            </div>
                                                       </div>
                                                       <div className="pricing_body pt-35 pb-4">
                                                            <div className="featur">
                                                                 <ul>
                                                                      <li>30 Days Trial Features</li>
                                                                      <li>Synced To Cloud Database</li>
                                                                      <li>10 Hours Of Support</li>
                                                                      <li>Social Media Integration</li>
                                                                      <li>Unlimited Features</li>
                                                                 </ul>
                                                            </div>
                                                       </div>
                                                       <div className="pricing_tk pt-3 pb-4">
                                                            <span className="curencyp">$</span>
                                                            <h2>
                                                                 49.99 <span>/ month</span>
                                                            </h2>
                                                       </div>
                                                       <div className="pricing_button">
                                                            <div className="order_now">
                                                                 <a href="#">Choose Plan</a>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6 col-sm-12">
                                        {/* Single Pricing */}
                                        <div className="single_pricing active mb-4">
                                             <div className="single_pricing_content">
                                                  <div className="single_pricing_content_inner">
                                                       <div className="pricing_head pb-4">
                                                            <div className="pricing_title">
                                                                 <h3>Premium Plan</h3>
                                                            </div>
                                                       </div>
                                                       <div className="pricing_body pt-35 pb-4">
                                                            <div className="featur">
                                                                 <ul>
                                                                      <li>30 Days Trial Features</li>
                                                                      <li>Synced To Cloud Database</li>
                                                                      <li>10 Hours Of Support</li>
                                                                      <li>Social Media Integration</li>
                                                                      <li>Unlimited Features</li>
                                                                 </ul>
                                                            </div>
                                                       </div>
                                                       <div className="pricing_tk pt-3 pb-4">
                                                            <span className="curencyp">$</span>
                                                            <h2>
                                                                 99.77 <span>/ month</span>
                                                            </h2>
                                                       </div>
                                                       <div className="pricing_button">
                                                            <div className="order_now">
                                                                 <a href="#">Choose Plan</a>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6 col-sm-12">
                                        {/* Single Pricing */}
                                        <div className="single_pricing mb-4">
                                             <div className="single_pricing_content">
                                                  <div className="single_pricing_content_inner">
                                                       <div className="pricing_head pb-4">
                                                            <div className="pricing_title">
                                                                 <h3>Ultra Plan</h3>
                                                            </div>
                                                       </div>
                                                       <div className="pricing_body pt-35 pb-4">
                                                            <div className="featur">
                                                                 <ul>
                                                                      <li>30 Days Trial Features</li>
                                                                      <li>Synced To Cloud Database</li>
                                                                      <li>10 Hours Of Support</li>
                                                                      <li>Social Media Integration</li>
                                                                      <li>Unlimited Features</li>
                                                                 </ul>
                                                            </div>
                                                       </div>
                                                       <div className="pricing_tk pt-3 pb-4">
                                                            <span className="curencyp">$</span>
                                                            <h2>
                                                                 89.49 <span>/ month</span>
                                                            </h2>
                                                       </div>
                                                       <div className="pricing_button">
                                                            <div className="order_now">
                                                                 <a href="#">Choose Plan</a>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/*==================================================*/}
                    {/*--- End Techno Pricing Area ---*/}
                    {/*==================================================*/}
                    {/*==================================================*/}
                    {/*--- Start Techno Call Do Action Area ---*/}
                    {/*==================================================*/}
                    <div
                         className="call_do_action pt-85 pb-50 bg_color"
                         style={{ backgroundImage: "url(assets/images/slider/slider-4.jpg)" }}
                    >
                         <div className="container">
                              <div className="row">
                                   <div className="col-lg-12">
                                        <div className="section_title white text_center mb-60 mt-3">
                                             <div className="phone_number mb-3">
                                                  <h5>+880 013 143 206</h5>
                                             </div>
                                             <div className="section_main_title">
                                                  <h1>To make requests for the</h1>
                                                  <h1>further information</h1>
                                             </div>
                                             <div className="button three mt-40">
                                                  <a href="#">
                                                       Join With Now
                                                       <i className="fa fa-long-arrow-right" />
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/*==================================================*/}
                    {/*--- End Techno Call Do Action Area ---*/}
                    {/*==================================================*/}

                    <Testimonial />

                    {/*==================================================*/}
                    {/*--- Start Techno Brand Area ---*/}
                    {/*==================================================*/}
                    <div className="brand_area bg_color2 pt-35 pb-15">
                         <div className="container">
                              <div className="row">
                                   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="row">
                                             {/*brand owl curousel */}
                                             <div className="brand_list owl-carousel curosel-style">
                                                  {/* Start Single Brand */}
                                                  <div className="col-lg-12">
                                                       <div className="single_brand mt-3 mb-5">
                                                            <div className="single_brand_thumb">
                                                                 <img src="assets/images/brand/1.png" alt="" />
                                                            </div>
                                                       </div>
                                                  </div>
                                                  {/* Start Single Brand */}
                                                  <div className="col-lg-12">
                                                       <div className="single_brand mt-3 mb-5">
                                                            <div className="single_brand_thumb">
                                                                 <img src="assets/images/brand/2.png" alt="" />
                                                            </div>
                                                       </div>
                                                  </div>
                                                  {/* Start Single Brand */}
                                                  <div className="col-lg-12">
                                                       <div className="single_brand mt-3 mb-5">
                                                            <div className="single_brand_thumb">
                                                                 <img src="assets/images/brand/3.png" alt="" />
                                                            </div>
                                                       </div>
                                                  </div>
                                                  {/* Start Single Brand */}
                                                  <div className="col-lg-12">
                                                       <div className="single_brand mt-3 mb-5">
                                                            <div className="single_brand_thumb">
                                                                 <img src="assets/images/brand/4.png" alt="" />
                                                            </div>
                                                       </div>
                                                  </div>
                                                  {/* Start Single Brand */}
                                                  <div className="col-lg-12">
                                                       <div className="single_brand mt-3 mb-5">
                                                            <div className="single_brand_thumb">
                                                                 <img src="assets/images/brand/5.png" alt="" />
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/*==================================================*/}
                    {/*--- End Techno Brand Area ---*/}
                    {/*==================================================*/}
               </>

               <Footer />
          </>
     )

}

export default Products;