const Accordian = () => {
     return (
          <>
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
          </>

     )
}

export default Accordian;