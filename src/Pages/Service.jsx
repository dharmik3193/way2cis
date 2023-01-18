import Footer from "../Components/Footer";
import Headerdemo from "../Components/Headerdemo";

const Service = () => {
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
                  <h2>Service Management</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>{" "}
                      <i className="fa fa-angle-right" />{" "}
                      <a href="#"> Products</a>{" "}
                      <i className="fa fa-angle-right" />{" "}
                      <span>Service Management</span>
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
                <img src={require("../Assets/images/service.jpg")} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tab_content ml-3">
                <div className="tab_content_title pb-4">
                  <h4>Service Management</h4>
                </div>
                <div className="tab_content_text">
                  <p>
                    Service Management software enables companies to easily
                    supervise their employee activities, trace vehicles,
                    schedule work, dispatch technicians, support driver safety,
                    and integrate with inventory and other back-office
                    solutions. This software is highly popular among field
                    service companies because they can help to reduce costs and
                    boost efficiency. Businesses can use the system to access
                    customer data, manage orders easily, and do route planning
                    at an affordable cost. FSM software is normally used by
                    companies that focus on handling installs, repairs, and
                    services of work equipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
