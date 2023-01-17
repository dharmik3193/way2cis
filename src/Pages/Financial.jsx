import Footer from "../Components/Footer";
import Headerdemo from "../Components/Headerdemo";

const Financial = () => {
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
                  <h2>Financial Management System</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>{" "}
                      <i className="fa fa-angle-right" />{" "}
                      <a href="#"> Products</a>{" "}
                      <i className="fa fa-angle-right" />{" "}
                      <span>Financial Management</span>
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
                <img src={require("../Assets/images/financial.png")} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tab_content ml-3">
                <div className="tab_content_title pb-4">
                  <h4>Financial Management System</h4>
                </div>
                <div className="tab_content_text">
                  <p>
                    Finance System help the user to identified the customer
                    total outstanding as well as supplier out standing. Its help
                    to maintain the all kind of voucher ,All CIS modules are
                    interlink with FMS. System allowed to create the N no’s of
                    Day book for voucher so that you can keep the track of
                    Voucher serial no’s according to Day book issue.
                  </p>
                  <p>
                    A financial management system is the methodology and
                    software that an organization uses to oversee and govern its
                    income, expenses, and assets with the objectives of
                    maximizing profits and ensuring sustainability.
                  </p>
                  <p>
                    An effective financial management system improves short- and
                    long-term business performance by streamlining invoicing and
                    bill collection, eliminating accounting errors, minimizing
                    record-keeping redundancy, ensuring compliance with tax and
                    accounting regulations, helping personnel to quantify budget
                    planning, and offering flexibility and expandability to
                    accommodate change and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="tab_content_sub_text col-12">
              <h5>
                Other significant features of a good financial management system
                include:
              </h5>
              <ul>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Keeping all payments
                  and receivables transparent.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Amortizing prepaid
                  expenses.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Depreciating assets
                  according to accepted schedules.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Keeping track of
                  liabilities.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Coordinating income
                  statements, expense statements, and balance sheets.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Balancing multiple
                  bank accounts.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Ensuring data
                  integrity and security.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Keeping all records
                  up to date.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Maintaining a
                  complete and accurate audit trail.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Minimizing overall
                  paperwork.
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

export default Financial;
