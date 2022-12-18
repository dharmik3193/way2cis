import React, { useRef, useState } from "react";
import OwlCarousel from 'react-owl-carousel';
import "../App.css";


const Sliderdemo = () => {


     return (
          <>
               <div className="slider index-3">
                    <OwlCarousel className="owl-main  owl-theme" items={1} loop>
                         {/* <Slide img={img1} title="Think Big Do Creative Grow Business " content={content1} loop />
                         <Slide img={img2} title="Think Big Do Creative Grow Business " content={content1} loop />
                         <Slide img={img3} title="Think Big Do Creative Grow Business " content={content1} />
                         <Slide img={img4} title="Think Big Do Creative Grow Business " content={content1} /> */}

                         <div className="item">
                              <img className="d-block w-100" src={require('./Slider_assets/slider-1.png')} alt="First slide" />

                              <div className="caption d-md-block">
                                   <div className="display">{'Hello'} </div>
                                   <div className="content">{'This Is Demo'}</div>
                                   {/* <Link to="/about" className="view_more" title="View More">View More</Link>
                                   <Link to="/contactUs" className="view_more contact_us" title="Contact Us">Contact Us</Link> */}
                              </div>

                         </div>
                    </OwlCarousel>
               </div>
          </>
     )
}

export default Sliderdemo;