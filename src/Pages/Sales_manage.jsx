import Footer from "../Components/Footer";
import Headerdemo from "../Components/Headerdemo";

const Sales_manage = () => {
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
                  <h2>Sales Management System</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>{" "}
                      <i className="fa fa-angle-right" />{" "}
                      <a href="#"> Products</a>{" "}
                      <i className="fa fa-angle-right" />{" "}
                      <span>Sales Management</span>
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
                <img src={require("../Assets/images/sales.jpg")} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tab_content ml-3">
                <div className="tab_content_title pb-4">
                  <h4>Sales Management System</h4>
                </div>
                <div className="tab_content_text">
                  <p>
                    An effective sales management process will encompass lead
                    and opportunity management, sales forecasting, and reporting
                    and management techniques that empower sales representatives
                    to meet and surpass their targets. The term sales manager
                    could reasonably be applied to a number of members of an
                    organisation, including marketing executives, managers of
                    field sales forces, district managers and product line sales
                    administrators. But the purest sales manager is someone who
                    directly controls and supports a sales force.
                  </p>
                  <p>
                    A manager with an effective sales management model in place
                    will give employees consistency and predictability in how
                    they should plan and execute sales, help them to prioritise
                    activities and link those activities to sales objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="tab_content_sub_text col-12">
              <h5>Primary Strategic Role</h5>
              <ul>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Setting goals for the
                  sales team
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Formulating a sales
                  management strategy to achieve those goals
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Executing that
                  strategy while managing and motivating staff
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Evaluating and
                  reporting on results of the strategy
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

export default Sales_manage;
