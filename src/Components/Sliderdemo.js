import React, { useEffect, useRef, useState } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "../App.css";
import WOW from 'wowjs';
import $ from 'jquery';


const Sliderdemo = () => {

     useEffect(() => {
          const wow = new WOW.WOW();
          wow.init();
     }, [])

     window.onload = () => {

          // const wow = new WOW.WOW();
          // var owl = $('.owl-carousel');
          // owl.owlCarousel();
          // // Listen to owl events:
          // owl.on('changed.owl.carousel', function (event) {
          //      wow.init();
          // })


          if ($.isFunction('owlCarousel')) {
               $('.owl-carousel').owlCarousel({
                    animateOut: 'bounceInRight',
                    animateIn: 'flipInX',
                    items: 1,
                    margin: 30,
                    stagePadding: 30,
                    smartSpeed: 450
               });
          }
     }

     const slider = () => {
          console.log("Slider");
          // if ($.isFunction('owlCarousel')) {
          const wow = new WOW.WOW();
          // var owl = $('.owl-carousel');
          // owl.owlCarousel();
          // owl.on('changed.owl.carousel', function (event) {
          wow.init();
          // })
          // }
     }


     return (


          <>
               <div className="slider index-3">
                    <OwlCarousel items={1}
                         className="owl-theme"
                         loop={true}
                         autoplay={true}
                         // animateIn={true}
                         margin={8}
                         onChange={() => { slider() }}
                    >
                         <div className="item">
                              <img className="d-block w-100" src={require('./Slider_assets/slider-1.png')} alt="First slide" />
                              <div className="caption d-md-block wow bounceInRight">
                                   <div className="display">{'CIS ERP1'}</div>
                                   <div className="content">{'ORACLE BASED ERP SOLUTIONS'}</div>
                              </div>
                         </div>
                         <div className="item">
                              <img className="d-block w-100" src={require('./Slider_assets/slider-2.png')} alt="First slide" />
                              <div className="caption d-md-block wow bounceInRight">
                                   <div className="display">{'CIS ERP2'}</div>
                                   <div className="content">{'ORACLE BASED ERP SOLUTIONS'}</div>
                              </div>
                         </div>
                    </OwlCarousel>
               </div>
          </>
     )
}

export default Sliderdemo;