const Calltoaction = () => {
     return (
          <>
               {/*==================================================*/}
               {/*--- Start Techno Call Do Action Area ---*/}
               {/*==================================================*/}
               <div
                    className="call_do_action pt-85 pb-130 bg_color"
                    style={{ backgroundImage: "url(assets/images/call-bg.png)" }}
               >
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-9">
                                   <div className="section_title white text_left mb-60 mt-3">
                                        <div className="phone_number mb-3">
                                             <h5>+968-91945242</h5>
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
                              <div className="col-lg-3">
                                   <div className="single-video mt-90">
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
               {/*==================================================*/}
               {/*--- End Techno Call Do Action Area ---*/}
               {/*==================================================*/}
          </>
     )
}

export default Calltoaction;