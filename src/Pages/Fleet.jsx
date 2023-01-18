import Footer from "../Components/Footer";
import Headerdemo from "../Components/Headerdemo";

const Fleet = () => {
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
                  <h2>Fleet Management</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>{" "}
                      <i className="fa fa-angle-right" />{" "}
                      <a href="#"> Products</a>{" "}
                      <i className="fa fa-angle-right" />{" "}
                      <span>Fleet Management</span>
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
                <img src={require("../Assets/images/fleet.jpg")} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tab_content ml-3">
                <div className="tab_content_title pb-4">
                  <h4>Fleet Management</h4>
                </div>
                <div className="tab_content_text">
                  <p>
                    Fleet management software (FMS) is a solution that helps
                    companies and organizations to manage, organize, and
                    coordinate their work vehicles from a central data platform.
                    The goal here is is to keep the fleet operating smoothly by
                    reducing costs, improving performance, and ensuring
                    compliance with government regulations. The primary purpose
                    of FMS is to collect, store, process, monitor, report on and
                    export information. FMS is also called a fleet telematics
                    solution. Telematics is an IT category that deals with long
                    distance transmission of computerized information, and in
                    the case of fleet management, data can be collected from
                    external sources such as gas pump processors, government
                    divisions that handle vehicle registration, financial firms,
                    mapping systems, insurance companies, and vehicle
                    specification databases.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="tab_content_sub_text col-12">
              <h5>Features</h5>
              <ul>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Track where vehicles
                  are at any time
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Track vehicle mileage
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Get notified when
                  anything goes wrong
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Time management
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Fuel management
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Maintenance cost
                  savings
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Employee satisfaction
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
};
export default Fleet;
