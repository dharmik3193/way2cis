import Footer from "../Components/Footer";
import Headerdemo from "../Components/Headerdemo";

const Fixedassets = () => {
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
                     <h2>Fixed Assets Management System</h2>
                   </div>
                   <div className="breatcome_content">
                     <ul>
                       <li>
                         <a href="index.html">Home</a>{" "}
                         <i className="fa fa-angle-right" />{" "}
                         <a href="#"> Products</a>{" "}
                         <i className="fa fa-angle-right" />{" "}
                         <span>Fixed Assets Management</span>
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
         <div className="container">
           <div className="tab-pane active mt-60" id="tabs-1" role="tabpanel">
             <div className="row">
               <div className="col-lg-6">
                 <div className="tab_thumb">
                   <img
                     src={require("../Assets/images/fixedassets.png")}
                     alt=""
                   />
                 </div>
               </div>
               <div className="col-lg-6">
                 <div className="tab_content ml-3">
                   <div className="tab_content_title pb-4">
                     <h4>Fixed Assets Management System</h4>
                   </div>
                   <div className="tab_content_text">
                     <p>
                       This web based application takes care of all the Moveable
                       and Non-Moveable Fixed Assets Purchased by the
                       Organization or any corporate .It calculates Depreciation
                       on all the fixed assets. Module pertains to Head Office
                       but can be used at the Branch level also.
                     </p>
                     <p>
                       This web-based solution helps establishing a computerized
                       system for tracking and recording all fixed assets and
                       generates statutory, business and control related
                       standard and dynamic reports. It improves management of
                       widely dispersed assets of an organization, resulting in
                       better accounting practices, maintenance and upkeep of
                       the assets.
                     </p>
                   </div>
                 </div>
               </div>
             </div>
             <div className="row">
               <div className="tab_content_sub_text col-12">
                 <h5>Key Functionalities</h5>
                 <ul>
                   <li>
                     {" "}
                     <i className="fa fa-long-arrow-right" /> Maintain
                     Historical and current cost of assets.
                   </li>
                   <li>
                     {" "}
                     <i className="fa fa-long-arrow-right" /> Tracking of
                     particular asset history since its inception
                   </li>
                   <li>
                     {" "}
                     <i className="fa fa-long-arrow-right" /> Maintain for audit
                     and Physical verification guide
                   </li>
                   <li>
                     {" "}
                     <i className="fa fa-long-arrow-right" /> Assets revaluation
                     for Balance-sheet purpose along with tax benefits.
                   </li>
                   <li>
                     {" "}
                     <i className="fa fa-long-arrow-right" /> Fixation of Life
                     cycle for particular asset.
                   </li>
                   <li>
                     {" "}
                     <i className="fa fa-long-arrow-right" /> AMC and Service
                     contract system
                   </li>
                   <li>
                     {" "}
                     <i className="fa fa-long-arrow-right" /> Insurance module
                     for claims and settlements
                   </li>
                   <li>
                     {" "}
                     <i className="fa fa-long-arrow-right" /> Lease agreements
                     and rent receipt
                   </li>
                   <li>
                     {" "}
                     <i className="fa fa-long-arrow-right" /> View facility for
                     management on the tips of finger
                   </li>
                   <li>
                     {" "}
                     <i className="fa fa-long-arrow-right" /> MIS Report
                     Generation along with standard reports from the system.
                   </li>
                 </ul>
               </div>
               <div className="tab_content_button mt-40 col-12">
                 <div className="button">
                   <a href="#">
                     Get A Quote
                     <i className="fa fa-long-arrow-right" />
                   </a>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <Footer />
       </>
     );
}

export default Fixedassets;