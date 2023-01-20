
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = () => {
     return (
          <>


               {/*==================================================*/}
               {/*--- Start Techno Testimonial Area ---*/}
               {/*==================================================*/}
               <div className="testimonial_area pt-80 pb-70">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-12">
                                   <div className="section_title text_center mb-60 mt-3">
                                        <div className="section_main_title">
                                             <h1>Our <span>Happy Clients</span></h1>
                                        </div>
                                        <div className="em_bar">
                                             <div className="em_bar_bg" />
                                        </div>
                                        <div className="section_content_text uppercase mb-3">
                                             <h6 className="content_para">We have provided IT Outsourcing Services to 50+ customers globally from SMEs to Fortune 100 companies. Check out our portfolio to know where all we have made difference!</h6>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                   <div className="row">
                                        {/*testimonial owl curousel */}
                                        <OwlCarousel items={3}
                                             className="owl-theme"
                                             loop
                                             nav
                                             margin={8} >
                                             <div ><img className="img" src={'assets/img/img1.jpg'} /></div>
                                             <div><img className="img" src={'assets/img/img2.jpg'} /></div>
                                             <div><img className="img" src={'assets/img/img4.jpg'} /></div>
                                             <div><img className="img" src={'assets/img/img3.jpg'} /></div>
                                             <div><img className="img" src={'assets/img/img5.jpg'} /></div>
                                             <div><img className="img" src={'assets/img/img6.jpg'} /></div>
                                             <div><img className="img" src={'assets/img/img7.jpg'} /></div>
                                        </OwlCarousel>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               {/*==================================================*/}
               {/*--- End Techno Testimonial Area ---*/}
               {/*==================================================*/}
          </>
     )
}


export default Testimonial