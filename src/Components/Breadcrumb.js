import { Link } from "react-router-dom";

const Breadcrumb = () => {
     return (
          <>
               <>
                    {/* ============================================================== */}
                    {/* Start Techno Breatcome Area */}
                    {/* ============================================================== */}
                    <div className="breatcome_area d-flex align-items-center">
                         <div className="container">
                              <div className="row">
                                   <div className="col-lg-12">
                                        <div className="breatcome_title">
                                             <div className="breatcome_title_inner pb-2">
                                                  <h2>About Us</h2>
                                             </div>
                                             <div className="breatcome_content">
                                                  <ul>
                                                       <li>
                                                            <Link to='/'>Home</Link>{" "}
                                                            <i className="fa fa-angle-right" /> <a> Pages</a>{" "}
                                                            <i className="fa fa-angle-right" /> <span>About Us</span>
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
               </>

          </>
     )
}

export default Breadcrumb;