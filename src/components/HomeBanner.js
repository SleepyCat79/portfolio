import { useContext } from "react";
import { AlexioContext } from "../Context";
import TypingAnimation from "./TypingAnimation";

const HomeBanner = () => {
  const { nav, changeNav } = useContext(AlexioContext);
  const activePageClass = () => ("home" === nav ? "" : "page--inactive");
  return (
    <div
      className={`page home-banner white-bg ${activePageClass("home")}`}
      id={"home"}
      onClick={() => changeNav("home", false)}
    >
      <div className="container-fluid p-0">
        <div className="row no-gutters full-screen">
          <div className="col-lg-3 col-xl-4 blue-bg">
            <div className="d-flex align-items-end home-user-avtar v-center-box">
              <img src="static/img/user.png" title alt />
            </div>
          </div>
          <div className="col-lg-9 col-xl-8">
            <div className="page-scroll">
              <div className="page-content">
                <div className="v-center-box d-flex align-items-center">
                  <div className="home-text">
                    <h6 className="dark-color theme-after">Hello, There</h6>
                    <h1 className="dark-color blue-after">I'm Huy Vo</h1>
                    <p>
                      Looking for a <TypingAnimation />
                    </p>
                    <div className="btn-bar">
                      <a href="static/myCV.pdf" className="btn btn-theme">
                        Download My CV
                      </a>
                    </div>
                  </div>
                  <ul className="social-icons">
                    <li>
                      <a
                        className="facebook"
                        href="https://www.facebook.com/meongu7904"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="linkedin"
                        href="https://www.linkedin.com/in/huy-vo-2965bb195/"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="github"
                        href="https://github.com/SleepyCat79"
                      >
                        <i className="fab fa-github" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
