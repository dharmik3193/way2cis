import Footer from "../Components/Footer";
import Headerdemo from "../Components/Headerdemo";
import { TbBooks, TbBuildingSkyscraper, TbBulb, TbChartAreaLine, TbClock, TbUsers } from "react-icons/tb";
import { FaAndroid, FaApple, FaLaravel } from "react-icons/fa";

const Career = () => {
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
                                             <h2>Career</h2>
                                        </div>
                                        <div className="breatcome_content">
                                             <ul>
                                                  <li>
                                                       <a href="index.html">Home</a>{" "}
                                                       <i className="fa fa-angle-right" /> <a href="#"> Pages</a>{" "}
                                                       <i className="fa fa-angle-right" /> <span>Career</span>
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
               {/*--- Start Way2Cis Why Area ---*/}
               {/*==================================================*/}
               <div className="feature_area bg_color3 pt-100 pb-70">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-12">
                                   <div className="section_title text_center mb-55">
                                        <div className="section_sub_title uppercase mb-3">
                                             <h6>WHY CHOOSE US</h6>
                                        </div>
                                        <div className="section_main_title">
                                             <h1>What Are The Benefits?</h1>
                                        </div>
                                        <div className="em_bar">
                                             <div className="em_bar_bg" />
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="row">
                              <div className="col-lg-4 col-md-6 col-sm-12">
                                   <div className="single_feature_seven">
                                        <div className="single_feature_six_seven_icon">
                                             <div className="icon">
                                                  <TbBuildingSkyscraper />
                                             </div>
                                        </div>
                                        <div className="single_feature_seven_content">
                                             <h4>Good Infrastructure</h4>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12">
                                   <div className="single_feature_seven">
                                        <div className="single_feature_six_seven_icon">
                                             <div className="icon">
                                                  <TbClock />
                                             </div>
                                        </div>
                                        <div className="single_feature_seven_content">
                                             <h4>Flexible Hours</h4>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12">
                                   <div className="single_feature_seven">
                                        <div className="single_feature_six_seven_icon">
                                             <div className="icon">
                                                  <TbUsers />
                                             </div>
                                        </div>
                                        <div className="single_feature_seven_content">
                                             <h4>Friendly Team</h4>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12">
                                   <div className="single_feature_seven">
                                        <div className="single_feature_six_seven_icon">
                                             <div className="icon">
                                                  <TbChartAreaLine />
                                             </div>
                                        </div>
                                        <div className="single_feature_seven_content">
                                             <h4>Career Growth</h4>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12">
                                   <div className="single_feature_seven">
                                        <div className="single_feature_six_seven_icon">
                                             <div className="icon">
                                                  <TbBulb />
                                             </div>
                                        </div>
                                        <div className="single_feature_seven_content">
                                             <h4>Great Culture</h4>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12">
                                   <div className="single_feature_seven">
                                        <div className="single_feature_six_seven_icon">
                                             <div className="icon">
                                                  <TbBooks />
                                             </div>
                                        </div>
                                        <div className="single_feature_seven_content">
                                             <h4>Learning Environment</h4>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               {/*==================================================*/}
               {/*--- End Way2Cis Why Area ---*/}
               {/*==================================================*/}


               <>
                    {/*==================================================*/}
                    {/*--- Start Way2Cis Openings Area ---*/}
                    {/*==================================================*/}
                    <div className="feature_area pt-80 pb-70">
                         <div className="container">
                              <div className="row">
                                   <div className="col-lg-12">
                                        <div className="section_title text_center mb-55">
                                             <div className="section_sub_title uppercase mb-3">
                                                  <h6>JOB CIRCULAR</h6>
                                             </div>
                                             <div className="section_main_title">
                                                  <h1>Open Positions</h1>
                                             </div>
                                             <div className="em_bar">
                                                  <div className="em_bar_bg" />
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="row">
                                   <div className="col-lg-3">
                                        <div className="feature_style_five mb-30">
                                             <div className="feature_style_five_cion mb-20">
                                                  {/* <i className="fa fa-video-camera" /> */}
                                                  <i className="fa"><FaAndroid /></i>
                                             </div>
                                             <div className="feature_style_five_title mb-3">
                                                  <h4>Android Developer</h4>
                                             </div>
                                             <div className="feature_style_five_text">
                                                  <p>
                                                       <span>Skills</span><br />
                                                       Java<br />
                                                       Kotlin<br />
                                                       Android Studio<br />
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-lg-3">
                                        <div className="feature_style_five mb-30">
                                             <div className="feature_style_five_cion mb-20">
                                                  {/* <i className="fa fa-server" /> */}
                                                  <i className="fa"><FaLaravel /></i>
                                             </div>
                                             <div className="feature_style_five_title mb-3">
                                                  <h4>PHP Laravel Developer</h4>
                                             </div>
                                             <div className="feature_style_five_text">
                                                  <p>
                                                       <span>Skills</span><br />
                                                       HTML / CSS / Bootstrap<br />
                                                       PHP(OOP) / Laravel<br />
                                                       MySQL Database<br />
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-lg-3">
                                        <div className="feature_style_five mb-30">
                                             <div className="feature_style_five_cion mb-20">
                                                  <i className="fa fa-cloud" />
                                                  {/* <i className="fa"><FaCloudversify /></i> */}
                                             </div>
                                             <div className="feature_style_five_title mb-3">
                                                  <h4>Oracle D2k (Forms & Report ) Developer</h4>
                                             </div>
                                             <div className="feature_style_five_text">
                                                  <p>
                                                       <span>Skills</span><br />
                                                       OOP<br />
                                                       {/* Data Management<br /> */}
                                                       Oracle Database<br />
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-lg-3">
                                        <div className="feature_style_five mb-30">
                                             <div className="feature_style_five_cion mb-20">
                                                  {/* <i className="fa fa-desktop" /> */}
                                                  <i className="fa"><FaApple /></i>
                                             </div>
                                             <div className="feature_style_five_title mb-3">
                                                  <h4>iOS Developer</h4>
                                             </div>
                                             <div className="feature_style_five_text">
                                                  <p>
                                                       <span>Skills</span><br />
                                                       Swift<br />
                                                       Core Data<br />
                                                       API<br />
                                                       iOS Backend Services<br />
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/*==================================================*/}
                    {/*--- End Way2Cis Openings Area ---*/}
                    {/*==================================================*/}
               </>


               <Footer />
          </>
     )
}

export default Career;