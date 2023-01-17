import Footer from "../Components/Footer";
import Headerdemo from "../Components/Headerdemo";

const Automobile = () => {
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
                  <h2>Automobile Management</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>{" "}
                      <i className="fa fa-angle-right" />{" "}
                      <a href="#"> Products</a>{" "}
                      <i className="fa fa-angle-right" />{" "}
                      <span>Automobile Management</span>
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
                <img src={require("../Assets/images/automobile.jpg")} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tab_content ml-3">
                <div className="tab_content_title pb-4">
                  <h4>Automobile Management</h4>
                </div>
                <div className="tab_content_text">
                  <p>
                    Automobile management can include a range of functions, such
                    as vehicle financing, vehicle maintenance, vehicle
                    telematics (tracking and diagnostics), driver management,
                    speed management, fuel management and health and safety
                    management.
                  </p>
                  <p>
                    Automobile Management is a function which allows companies
                    which rely on transportation in business to remove or
                    minimize the risks associated with vehicle investment,
                    improving efficiency, productivity and reducing their
                    overall transportation and staff costs.
                  </p>
                  <p>
                    Improve your shop's efficiency. work smartere, faster, and
                    more profitably. You can Manage Your Day-to-Day Opertions
                    Easily with This Software Application. this Application
                    Provides a Fully Automated Environment Where You can see the
                    work progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="tab_content_sub_text col-12">
              <h5>Automobile management is the management of:</h5>
              <ul>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Commercial motor
                  vehicles such as cars, vans, trucks, specialist vehicles (such
                  as mobile construction machinery), and trailers
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Private vehicles used
                  for work purposes (the 'grey fleet')
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Aviation machinery
                  such as aircraft (planes and helicopters)
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Ships
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Rail cars
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

export default Automobile;
