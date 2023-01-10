import Footer from "../Components/Footer";
import Headerdemo from "../Components/Headerdemo";

const Cloud = () => {
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
                  <h2>Cloud Services</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>{" "}
                      <i className="fa fa-angle-right" /> <a href="#"> Pages</a>{" "}
                      <i className="fa fa-angle-right" />{" "}
                      <span>Cloud Services</span>
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

      <section class="about about-2 my-5">
        <div class="container">
          <div class="item-list">
            <div class="row">
              <div class="col-md-12 col-xs-12">
                <div class="item clearfix">
                  <img
                    src={require("../Assets/cloud-service1.jpg")}
                    class="img-responsive"
                  />
                </div>
                <div class="item clearfix">
                  <img
                    src={require("../Assets/cloud-service2.jpg")}
                    class="img-responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Cloud;
