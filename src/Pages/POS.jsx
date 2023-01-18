import Footer from "../Components/Footer";
import Headerdemo from "../Components/Headerdemo";

const POS = () => {
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
                  <h2>POS System</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>{" "}
                      <i className="fa fa-angle-right" />{" "}
                      <a href="#"> Products</a>{" "}
                      <i className="fa fa-angle-right" />{" "}
                      <span>POS System</span>
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
                <img src={require("../Assets/images/pos.jpg")} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tab_content ml-3">
                <div className="tab_content_title pb-4">
                  <h4>POS System</h4>
                </div>
                <div className="tab_content_text">
                  <p>
                    Shopping behaviors have changed and purchase paths have
                    evolved. Empowered by mobile devices, social media and the
                    ubiquity of information, consumers expect to move freely
                    between online and offline shopping channels. SuiteCommerce
                    InStore provides retailers with a solution that unifies the
                    physical and digital shopping experiences within a single,
                    cloud-based commerce platform. Using a mobile device, arm
                    your sales associates with complete inventory and customer
                    information to engage customers more effectively, drive more
                    sales, and provide a satisfying shopping experience.
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
                  <i className="fa fa-long-arrow-right" /> POS Software is
                  user-friendly and includes fast billing
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Transform the store
                  with a true, single commerce (online, in-store, call center)
                  platform.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Engage shoppers by
                  providing a complete shopping experience that is personal and
                  seamless.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Empower sales
                  associates with the tools and information to assist and engage
                  shoppers.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-long-arrow-right" /> Increase
                  profitability with more product choices and better convenience
                  with an 'endless aisle' of goods.
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

export default POS;
