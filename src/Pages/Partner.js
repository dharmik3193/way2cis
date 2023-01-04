import Footer from "../Components/Footer";
import Headerdemo from "../Components/Headerdemo";

const Partner = () => {
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
                                             <h2>Partner</h2>
                                        </div>
                                        <div className="breatcome_content">
                                             <ul>
                                                  <li>
                                                       <a href="index.html">Home</a>{" "}
                                                       <i className="fa fa-angle-right" /> <a href="#"> Pages</a>{" "}
                                                       <i className="fa fa-angle-right" /> <span>Partner</span>
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
                                             <h6>PARTNER</h6>
                                        </div>
                                        <div className="section_main_title">
                                             <h1>Parnership With Oracle</h1>
                                        </div>
                                        <div className="em_bar">
                                             <div className="em_bar_bg" />
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <section class="about about-2" >
                              <div class="container">
                                   <div class="item-list">
                                        <div class="row">

                                             <div class="col-md-6 col-xs-12">
                                                  <div class="item">
                                                       <figure class="image-box">
                                                            <img src={require('../Assets/partner.jpg')} alt="" class="img-responsive" />
                                                       </figure>
                                                  </div>
                                             </div>
                                             <div class="col-md-6 col-xs-12">
                                                  <div class="item clearfix">
                                                       <div class="content-box">
                                                            <img src={require('../Assets/oracle.png')} class="img-responsive" />
                                                            <h4 class="text-center">We are authorized Oracle Silver Partner. </h4>

                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </section>
                    </div>
               </div>
               {/*==================================================*/}
               {/*--- End Techno Flipbox Area ---*/}
               {/*==================================================*/}






               <Footer />
          </>
     )
}

export default Partner;