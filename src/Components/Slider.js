import { useEffect, useState } from "react";
import '../App.css'

const Slider = () => {

     const [slider, setSlider] = useState('slider_list owl-carousel d-block')
     const [slider1, setSlider1] = useState('');
     const [slider2, setSlider2] = useState('');
     const [cnt, setCnt] = useState(0)

     useEffect(() => {



          setTimeout(() => {

               if (cnt % 2 == 0) {
                    setSlider1('home')
                    setSlider2('')
                    setCnt(cnt + 1)
               } else {
                    setSlider1('')
                    setSlider2('home')
                    setCnt(cnt + 1)
               }

          }, 2000)
     }, [])

     return (
          <>      {/*==================================================*/}
               {/* Start Techno Slider Area */}
               {/*==================================================*/}
               <div className={slider}>
                    <div className="slider_area d-flex align-items-center slider1" id={slider1}>
                         <div className="container">
                              <div className="row">
                                   {/*Start Single Portfolio */}
                                   <div className="col-lg-12">
                                        <div className="single_slider">
                                             <div className="slider_content">
                                                  <div className="slider_text">
                                                       <div className="slider_text_inner">
                                                            <h5>Total IT Solution Here</h5>
                                                            <h1>Best IT solution agency</h1>
                                                            <h1>for your Business </h1>
                                                       </div>
                                                       <div className="slider_button pt-5 d-flex">
                                                            <div className="button">
                                                                 <a href="#">
                                                                      How IT Work <i className="fa fa-long-arrow-right" />
                                                                 </a>
                                                                 <a className="active" href="#">
                                                                      IT Services <i className="fa fa-long-arrow-right" />
                                                                 </a>
                                                            </div>
                                                       </div>
                                                       <div className="slider-video">
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
                    </div>
                    <div className="slider_area d-flex align-items-center slider2" id={slider2}>
                         <div className="container">
                              <div className="row">
                                   {/*Start Single Portfolio */}
                                   <div className="col-lg-12">
                                        <div className="single_slider">
                                             <div className="slider_content">
                                                  <div className="slider_text">
                                                       <div className="slider_text_inner">
                                                            <h5>Total IT Solution Here</h5>
                                                            <h1>Best IT solution agency</h1>
                                                            <h1>for your Business </h1>
                                                       </div>
                                                       <div className="slider_button pt-5 d-flex">
                                                            <div className="button">
                                                                 <a href="#">
                                                                      How IT Work <i className="fa fa-long-arrow-right" />
                                                                 </a>
                                                                 <a className="active" href="#">
                                                                      IT Services <i className="fa fa-long-arrow-right" />
                                                                 </a>
                                                            </div>
                                                       </div>
                                                       <div className="slider-video">
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
                    </div>
               </div>
               {/*==================================================*/}
               {/* End Techno Slider Area */}
               {/*==================================================*/}</>
     )
}

export default Slider;