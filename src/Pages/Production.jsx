import Footer from "../Components/Footer";
import Headerdemo from "../Components/Headerdemo";

const Production = () => {
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
                  <h2>Production Management System</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>{" "}
                      <i className="fa fa-angle-right" />{" "}
                      <a href="#"> Products</a>{" "}
                      <i className="fa fa-angle-right" />{" "}
                      <span>Production Management</span>
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
                <img src={require("../Assets/images/production.webp")} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tab_content ml-3">
                <div className="tab_content_title pb-4">
                  <h4>Production Management System</h4>
                </div>
                <div className="tab_content_text">
                  <p>
                    Production Management Software is where it all comes
                    together. Your software must be able to tell you today’s
                    production status, what is going to happen next, and what
                    happened yesterday. The Production Management Software
                    application is up to the task. Online inquiry into existing
                    production orders shows percentage complete based on time
                    and materials, and gives you detailed status information for
                    each production process. Once you create them, you can edit
                    production orders via the visual editor in a drill-down
                    manner. You can import activity data from an external source
                    such as an automated time card or bar code data collection
                    system, or you can enter it manually.
                  </p>
                  <p>
                    A variety of worksheets assist you in this process. Each one
                    has a specific focus in terms of what to pull, which
                    operation to run, and where to go next. Special worksheets
                    help expedite subcontracted processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="tab_content_sub_text col-12">
              <h5>Key Points</h5>
              <ul>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Extensive variance
                  reporting enables you to see when, where—and, most
                  importantly—why variances took place in terms of time, usage
                  quantities, and final production.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Visual tools such as
                  videos and pictures are readily available to assist in the
                  process. A sophisticated dispatch process allows you to set
                  the production sequence to keep things moving smoothly.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Seamless optional
                  interface to Sales Order, General Ledger, and Payroll.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Easily handle lotted
                  and serialized inventory, and perform multiple releases per
                  production order.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Perform visual
                  drilldown and production management order editing.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Use priority-based
                  dispatching.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Release orders online
                  and in batches.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Update inventory
                  quantities online.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Track problems by
                  variance code.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Print barcodes on
                  worksheets.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Set up multiple
                  costing methods.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Conduct online status
                  inquiries of ongoing production
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Use multimedia
                  references for operations and materials.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Employ multiple units
                  of measure.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Generate automated
                  production orders from sales orders.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Perform variance
                  analysis for time, material usage, and production.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Backflush at multiple
                  levels.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Retrieve scrap
                  history.
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

export default Production;
