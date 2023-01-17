import Footer from "../Components/Footer";
import Headerdemo from "../Components/Headerdemo";

const Purchase_management = () => {
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
                  <h2>Purchase Management System</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>{" "}
                      <i className="fa fa-angle-right" />{" "}
                      <a href="#"> Products</a>{" "}
                      <i className="fa fa-angle-right" />{" "}
                      <span>Purchase Management</span>
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
                <img src={require("../Assets/images/1.jpeg")} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tab_content ml-3">
                <div className="tab_content_title pb-4">
                  <h4>Purchase Management System</h4>
                </div>
                <div className="tab_content_text">
                  <p>
                    Purchase Management System is a tool for managing your
                    day-to-day purchases. It is packed with all necessary
                    features that are needed by any business, which has to buy
                    raw material for manufacturing or finished good purchases
                    for trading. Purchase Manager can enter supplier bills,
                    reconcile with purchase orders or goods receipts, bill
                    charges could be allocated for computation of landed cost of
                    items, integration with Inventory and Financial Accounting,
                    Office / unit wise Report generation, Supplier enquiry
                    flotation, Quotation collection and analysis and maintenance
                    of history of rates quoted item wise supplier wise. System
                    support multiple units for the same item, for e.g. Kgs. And
                    Nos., Sq. Meters and Nos. System is compliant with tax
                    regulations, for e.g. GST (which replaces VAT, ST, CST,
                    Service Tax and so on).
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="tab_content_sub_text col-12">
              <h5>Benefits</h5>
              <ul>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Facility to apply
                  multiple charges in bill entry as per requirements
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Quotation Analysis
                  and vendor selection based on parameters
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Facility to allocate
                  items and products as sample (un-billable) or billable
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Supplier wise/ item
                  wise report generation at one click
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> All purchase
                  transactions can be directly exported to Financial Accounting
                  System and Inventory Management System
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Enquiry management
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Facility to track
                  region/ office wise purchase based on given category
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Bill generation
                  (entry of supplier bill) facility
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Reconciliation of
                  bill, purchase order and delivery with multiple options with
                  partial offsets.
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

export default Purchase_management;
