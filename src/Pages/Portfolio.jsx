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
                <img src={require("../Assets/images/payroll.webp")} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tab_content ml-3">
                <div className="tab_content_title pb-4">
                  <h4>Portfolio Management Service</h4>
                </div>
                <div className="tab_content_text">
                  <p>
                    Payroll Management System is one of the most important
                    functions of an organization. It works on the compensation
                    of employees which contains attendance management, leave
                    management, advances, loans, bonuses, tax deductions,
                    statutory compliance in accordance with the organization’s
                    policies. Payroll Software in India can be quite complicated
                    due to many laws enforced on organizations. Payroll software
                    is a human resource function in salary processing and might
                    generate dissatisfaction among the employees and directly
                    result in reduced productivity, efficiency and also effects
                    the turnover rates. Earlier, payroll management in India was
                    done by involving a lot of paperwork which is difficult to
                    handle for both employees and employers, especially to those
                    who work in the human resource and finance department. Other
                    than documenting and managing files, there is more chance of
                    occurrence of errors. This procedure is considered as a
                    time-consuming process and there is a huge impact on the
                    overall productivity of the organization.
                  </p>
                  <p>
                    A HRMS (Human Resource Management System) is a combination
                    of systems and processes that connect human resource
                    management and information technology through HR software. A
                    HRMS may help to revolutionize a workplace. The automation
                    of repetitive and time consuming tasks associated with human
                    resources management frees up some of the companies most
                    valuable employees and allows the focus to shift to culture,
                    retention, and other highly impactful areas.
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
