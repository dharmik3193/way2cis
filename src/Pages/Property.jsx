const { default: Footer } = require("../Components/Footer");
const { default: Headerdemo } = require("../Components/Headerdemo");

const Property = () => {
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
                  <h2>Property Management</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>{" "}
                      <i className="fa fa-angle-right" />{" "}
                      <a href="#"> Products</a>{" "}
                      <i className="fa fa-angle-right" />{" "}
                      <span>Property Management</span>
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
                <img src={require("../Assets/images/property.jpeg")} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tab_content ml-3">
                <div className="tab_content_title pb-4">
                  <h4>Property Management</h4>
                </div>
                <div className="tab_content_text">
                  <p>
                    Property management software is a program designed to help
                    property managers manage residential and commercial
                    properties on behalf of their owners. With trust accounting,
                    maintenance, inspection, communication and reporting
                    features, it brings together all the key functions of
                    property management into the one program. Not only does this
                    save time and money by reducing add-ons, but it also
                    streamlines your day-to-day property management tasks.
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

export default Property;
