const Contact = () => {
     return (
          <>
               {/*==================================================*/}
               {/*--- Start Techno Contact Area ---*/}
               {/*==================================================*/}
               <div
                    className="contact_area pt-85 pb-90"
                    style={{ backgroundImage: "url(assets/images/bg-cnt.jpg)" }}
               >
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-12">
                                   <div className="section_title white text_center mb-60 mt-3">
                                        <div className="section_sub_title uppercase mb-3">
                                             <h6>GET QUOTE</h6>
                                        </div>
                                        <div className="section_main_title">
                                             <h1>Make An</h1>
                                             <h1>Free Consultant</h1>
                                        </div>
                                        <div className="em_bar">
                                             <div className="em_bar_bg" />
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="row">
                              <div className="col-xl-12">
                                   <div className="quote_wrapper">
                                        <form id="contact_form" action="mail.php" method="POST">
                                             <div className="row">
                                                  <div className="col-lg-6">
                                                       <div className="form_box mb-30">
                                                            <input type="text" name="name" placeholder="Name" />
                                                       </div>
                                                  </div>
                                                  <div className="col-lg-6">
                                                       <div className="form_box mb-30">
                                                            <input
                                                                 type="email"
                                                                 name="email"
                                                                 placeholder="Email Address"
                                                            />
                                                       </div>
                                                  </div>
                                                  <div className="col-lg-6">
                                                       <div className="form_box mb-30">
                                                            <input
                                                                 type="text"
                                                                 name="phone"
                                                                 placeholder="Phone Number"
                                                            />
                                                       </div>
                                                  </div>
                                                  <div className="col-lg-6">
                                                       <div className="form_box mb-30">
                                                            <input type="text" name="web" placeholder="Website" />
                                                       </div>
                                                  </div>
                                                  <div className="col-lg-12">
                                                       <div className="form_box mb-30">
                                                            <textarea
                                                                 name="message"
                                                                 id="message"
                                                                 cols={30}
                                                                 rows={10}
                                                                 placeholder="Write a Message"
                                                                 defaultValue={""}
                                                            />
                                                       </div>
                                                       <div className="quote_btn text_center">
                                                            <button className="btn" type="submit">
                                                                 Free Consultancy
                                                            </button>
                                                       </div>
                                                  </div>
                                             </div>
                                        </form>
                                        <p className="form-message" />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               {/*==================================================*/}
               {/*--- End Techno Contact Area ---*/}
               {/*==================================================*/}
          </>
     )
}

export default Contact;