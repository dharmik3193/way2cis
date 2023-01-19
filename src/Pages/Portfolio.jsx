import Footer from "../Components/Footer";
import Headerdemo from "../Components/Headerdemo";

const Portfolio = () => {
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
                  <h2>Portfolio Management System</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>{" "}
                      <i className="fa fa-angle-right" />{" "}
                      <a href="#"> Products</a>{" "}
                      <i className="fa fa-angle-right" />{" "}
                      <span>Portfolio Management</span>
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
                <img src={require("../Assets/images/portfolio.png")} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tab_content ml-3">
                <div className="tab_content_title pb-4">
                  <h4>Portfolio Management Service</h4>
                </div>
                <div className="tab_content_text">
                  <p>
                    Portfolio management is the art and science of making
                    decisions about investment mix and policy, matching
                    investments to objectives, asset allocation for individuals
                    and institutions, and balancing risk against performance.
                    Portfolio management is all about determining strengths,
                    weaknesses, opportunities and threats in the choice of debt
                    vs. equity, domestic vs. international, growth vs. safety,
                    and many other trade-offs encountered in the attempt to
                    maximize return at a given appetite for risk. Although it is
                    common to use the terms "portfolio management" and
                    "financial planning" as synonyms, these staples of the
                    financial services industry are not the same. Portfolio
                    management is the act of creating and maintaining an
                    investment account, while financial planning is the process
                    of developing financial goals and creating a plan of action
                    to achieve them. Professional licensed portfolio managers
                    are responsible for portfolio management on behalf of
                    others, while individuals may choose to self-direct their
                    own investments and build their own portfolio. Portfolio
                    management's ultimate goal is to maximize the investments'
                    expected return given an appropriate level of risk exposure.
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

export default Portfolio;
