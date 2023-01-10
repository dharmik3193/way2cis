import { FaCheck } from "react-icons/fa";
import Footer from "../Components/Footer";
import Headerdemo from "../Components/Headerdemo";

const Education = () => {
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
                  <h2>Education Services</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>{" "}
                      <i className="fa fa-angle-right" /> <a href="#"> Pages</a>{" "}
                      <i className="fa fa-angle-right" />{" "}
                      <span>Education Services</span>
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
              <div className="section_title text_left mb-5">
                <div className="section_sub_title uppercase mb-3">
                  <h6>WHY CHOOSE WAY2CIS EDUCATION</h6>
                </div>
                <div className="section_main_title">
                  <h1>
                    Education Service Keys To <span>WAY2CIS Toolbox</span>
                  </h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg" />
                </div>
                <div className="section_content_text pt-4">
                  <p>
                    Now that you’ve invested in your solution, it’s time to
                    invest in the people who will use it. Education Services
                    provides a diversity of packages and resources that will
                    empower your users with the knowledge and skills they need
                    to make their jobs easier, increase productivity and
                    optimize your solution. From expert-led training to user
                    adoption solutions to certification opportunities—Education
                    Services provides the resources you need, when you need
                    them.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h3>
                <span>Benifits</span>
              </h3>
              {/* Check Boox */}
              <div className="about_skill_thumb ml-2 mr-4">
                <div className="choose_us_content pb-1">
                  <div className="choose_icon_lft mr-4">
                    {/* <i className="fa fa-cog" /> */}
                    {/* <FaCheck/> */}
                    <i className="fa">
                      <FaCheck />
                    </i>
                  </div>
                  <div className="choose_content_title_lft pb-2">
                    <h5>Increased user adoption</h5>
                  </div>
                </div>
              </div>
              <div className="about_skill_thumb ml-2 mr-4">
                <div className="choose_us_content pb-1">
                  <div className="choose_icon_lft mr-4">
                    {/* <i className="fa fa-cog" /> */}
                    {/* <FaCheck/> */}
                    <i className="fa">
                      <FaCheck />
                    </i>
                  </div>
                  <div className="choose_content_title_lft pb-2">
                    <h5>Maximized productivity</h5>
                  </div>
                </div>
              </div>
              <div className="about_skill_thumb ml-2 mr-4">
                <div className="choose_us_content pb-1">
                  <div className="choose_icon_lft mr-4">
                    {/* <i className="fa fa-cog" /> */}
                    {/* <FaCheck/> */}
                    <i className="fa">
                      <FaCheck />
                    </i>
                  </div>
                  <div className="choose_content_title_lft pb-2">
                    <h5>Increased goal achievement</h5>
                  </div>
                </div>
              </div>
              <div className="about_skill_thumb ml-2 mr-4">
                <div className="choose_us_content pb-1">
                  <div className="choose_icon_lft mr-4">
                    {/* <i className="fa fa-cog" /> */}
                    {/* <FaCheck/> */}
                    <i className="fa">
                      <FaCheck />
                    </i>
                  </div>
                  <div className="choose_content_title_lft pb-2">
                    <h5>Faster time to value</h5>
                  </div>
                </div>
              </div>
              <div className="about_skill_thumb ml-2 mr-4">
                <div className="choose_us_content pb-1">
                  <div className="choose_icon_lft mr-4">
                    {/* <i className="fa fa-cog" /> */}
                    {/* <FaCheck/> */}
                    <i className="fa">
                      <FaCheck />
                    </i>
                  </div>
                  <div className="choose_content_title_lft pb-2">
                    <h5>Self-sufficient administrator and users</h5>
                  </div>
                </div>
              </div>
              <div className="about_skill_thumb ml-2 mr-4">
                <div className="choose_us_content pb-1">
                  <div className="choose_icon_lft mr-4">
                    {/* <i className="fa fa-cog" /> */}
                    {/* <FaCheck/> */}
                    <i className="fa">
                      <FaCheck />
                    </i>
                  </div>
                  <div className="choose_content_title_lft pb-2">
                    <h5>Reduced implementation risk</h5>
                  </div>
                </div>
              </div>
              <div className="about_skill_thumb ml-2 mr-4">
                <div className="choose_us_content pb-1">
                  <div className="choose_icon_lft mr-4">
                    {/* <i className="fa fa-cog" /> */}
                    {/* <FaCheck/> */}
                    <i className="fa">
                      <FaCheck />
                    </i>
                  </div>
                  <div className="choose_content_title_lft pb-2">
                    <h5>Strengthened long-term ownership</h5>
                  </div>
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
export default Education;
