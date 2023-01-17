import Footer from "../Components/Footer";
import Headerdemo from "../Components/Headerdemo";

const Inventory = () => {
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
                  <h2>Inventory Management System</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>{" "}
                      <i className="fa fa-angle-right" />{" "}
                      <a href="#"> Products</a>{" "}
                      <i className="fa fa-angle-right" />{" "}
                      <span>Inventory Management</span>
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
                <img src={require("../Assets/images/inventory.png")} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tab_content ml-3">
                <div className="tab_content_title pb-4">
                  <h4>Inventory Management System</h4>
                </div>
                <div className="tab_content_text">
                  <p>
                    When most people think of inventory management, they think
                    of retail applications. While retail operations rely heavily
                    on inventory management, inventory management systems are
                    widely used in a variety of industries, from manufacturing
                    to utilities, healthcare, education, government, and more.
                    Inventory management systems streamline and centralize the
                    process for controlling the flow and maintenance of
                    inventory to ensure that the right amount of inventory is
                    available at the right time and of the right quality.
                  </p>
                  <p>
                    An inventory management system is the combination of
                    technology (hardware and software) and processes and
                    procedures that oversee the monitoring and maintenance of
                    stocked products, whether those products are company assets,
                    raw materials and supplies, or finished products ready to be
                    sent to vendors or end consumers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="tab_content_sub_text col-12">
              <h5>A complete inventory management system consists of:</h5>
              <ul>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> A system for
                  identifying every inventory item and its associated
                  information, such as barcode labels or asset tags.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Inventory management
                  system Hardware tools for reading barcode labels, such as
                  handheld barcode scanners or smartphones with barcode scanning
                  apps.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Inventory management
                  software, which provides a central database and point of
                  reference for all inventory, coupled with the ability to
                  analyze data, generate reports, forecast future demand, and
                  more.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Processes and
                  policies for labeling, documentation, and reporting. This
                  should include an inventory management technique such as Just
                  in Time, ABC Analysis, First-In First-Out (FIFO), Stock
                  Review, or another proven methodology.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> People who trained to
                  follow these policies and processes.
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
export default Inventory;
