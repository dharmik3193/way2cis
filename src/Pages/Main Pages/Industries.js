import Flipboxindustries from "../../Components/Flipboxindustries";
import Footer from "../../Components/Footer";
import Headerdemo from "../../Components/Headerdemo";

const Industries = () => {
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
                                             <h2>Industries</h2>
                                        </div>
                                        <div className="breatcome_content">
                                             <ul>
                                                  <li>
                                                       <a href="index.html">Home</a>{" "}
                                                       <i className="fa fa-angle-right" /> <a href="#"> Pages</a>{" "}
                                                       <i className="fa fa-angle-right" /> <span>Industries</span>
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

               <Flipboxindustries />
               <Footer />
          </>
     )
}

export default Industries;