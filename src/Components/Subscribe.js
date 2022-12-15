const Subscribe = () => {
     return (
          <>
               {/*==================================================*/}
               {/*--- Start Techno Subscribe Area ---*/}
               {/*==================================================*/}
               <div className="subscribe_area bg_color pt-30 pb-45">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-2" />
                              <div className="col-lg-8">
                                   <div className="single_subscribe_contact">
                                        <div className="subscribe_content_title white text_center pb-30">
                                             <h2>Subscribe Our Newsletter</h2>
                                        </div>
                                        <form action="#">
                                             <div className="subscribe_form">
                                                  <input
                                                       type="email"
                                                       name="email"
                                                       id="email"
                                                       className="form-control"
                                                       required=""
                                                       data-error="Please enter your email"
                                                       placeholder="Enter Your Email"
                                                  />
                                                  <div className="help-block with-errors" />
                                             </div>
                                             <div className="subscribe_form_send">
                                                  <button type="submit" className="btn">
                                                       Subscribe
                                                  </button>
                                                  <div id="msgSubmit" className="h3 text-center hidden" />
                                                  <div className="clearfix" />
                                             </div>
                                        </form>
                                   </div>
                              </div>
                              <div className="col-lg-2" />
                         </div>
                    </div>
               </div>
               {/*==================================================*/}
               {/*--- End Techno Subscribe Area ---*/}
               {/*==================================================*/}
          </>
     )
}

export default Subscribe;