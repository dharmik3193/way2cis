import Footer from "../Components/Footer";
import Headerdemo from "../Components/Headerdemo";

const Support = () => {
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
                  <h2>Support Services</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>{" "}
                      <i className="fa fa-angle-right" /> <a href="#"> Pages</a>{" "}
                      <i className="fa fa-angle-right" />{" "}
                      <span>Support Services</span>
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

      {/*==================================================*/}
      {/*--- Start Techno Service Area ---*/}
      {/*==================================================*/}
      <div className="choose_us bg_color2">
        <div className="container">
          <div className="row d-flex align-items-center pd_gap nagative_mb">
            <div className="col-lg-6">
              <div className="about_skill_thumb ml-2 mr-4">
                <img src={require("../Assets/support.jpg")} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section_title text_left mb-5">
                <div className="section_sub_title uppercase mb-3">
                  <h6>MAINTAIN, SUSTAIN, OPTIMIZE</h6>
                </div>
                <div className="section_main_title">
                  <h1>
                    All The Support You’ll Need To Ensure{" "}
                    <span>Your Business Success</span>
                  </h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg" />
                </div>
                <div className="section_content_text pt-4">
                  <p>
                    Your success is a top priority at Way2CIS and we ensure that
                    our customers receive the maximum return on their
                    investment. That’s why every customer gets basic support.
                    But as your business grows, you may need additional support.
                    Way2CIS offers a full range of support offerings, from Basic
                    to Premium, to Advanced Customer Support. Each option
                    provides specific service levels and capabilities, from
                    online case submissions to 24/7 phone support, to managed
                    services that help minimize the gap between your optimal
                    solution and your actual solution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/*--- End Techno Service Area ---*/}
      {/*==================================================*/}

      <Footer />
    </>
  );
};

export default Support;
