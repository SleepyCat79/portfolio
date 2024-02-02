import Isotope from "isotope-layout";
import { useCallback, useEffect, useRef, useState } from "react";
import SectionContainer from "./SectionContainer";
import Testimonials from "./Testimonials";

const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const imagesLoaded = require("imagesloaded");
    imagesLoaded(
      document.querySelector(".portfolio-cols"),
      function (instance) {
        isotope.current = new Isotope(".portfolio-cols", {
          itemSelector: ".portfolio-item",
          // layoutMode: "fitRows",
          percentPosition: true,
          masonry: {
            columnWidth: ".portfolio-item",
          },
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
      }
    );
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <SectionContainer
      name={"portfolio"}
      title={"My Projects"}
      subTitle={"Latest Work"}
      leftImage="static/img/title-3.jpg"
    >
      <div className="portfolio-section">
        <div className="portfolio-filter m-10px-b">
          <ul className="filter text-left text-md-center">
            {" "}
            <li
              className={`${activeBtn("*")} theme-after`}
              onClick={handleFilterKeyChange("*")}
            >
              All
            </li>{" "}
            <li
              className={`${activeBtn("website")} theme-after`}
              onClick={handleFilterKeyChange("website")}
              data-filter=".website"
            >
              Website
            </li>{" "}
            <li
              className={`${activeBtn("apps")} theme-after`}
              onClick={handleFilterKeyChange("apps")}
              data-filter=".apps"
            >
              Apps
            </li>
          </ul>
        </div>{" "}
        {/* Portfolio Filter */}
        <div className="portfolio-content">
          <ul className="portfolio-cols portfolio-cols-3">
            <li className="portfolio-item website">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="#">
                    <img src="static/img/bkpedia.jpg" title alt />
                  </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a
                        href="https://www.youtube.com/watch?v=uDlJzm6spj0&ab_channel=OISPSOFTSKILLS"
                        className="popup-video theme-color"
                      >
                        <i className="fa fa-play" />
                      </a>
                      <a
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-1.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <i className="fas fa-expand" />
                      </a>
                      <a href="#" className="theme-color">
                        <i className="fa fa-link" />
                      </a>
                    </div>{" "}
                    {/* Video Btn */}
                  </div>{" "}
                  {/* Hover */}
                </div>
                <div className="portfolio-info">
                  <h5>BKPedia - Educational project</h5>
                  <span>I'm not hosting the website anymore</span>
                </div>
              </div>{" "}
              {/* Portfolio */}
            </li>{" "}
            {/* col */}
            <li className="portfolio-item photoshop apps">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="#">
                    <img src="static/img/tasktracking.jpg" title alt />
                  </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href =
                            "https://github.com/SleepyCat79/Task-Tracking-App";
                        }}
                      >
                        <i className="fa fa-play" />
                      </a>
                      <a
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-3.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <i className="fas fa-expand" />
                      </a>
                      <a href="#" className="theme-color">
                        <i className="fa fa-link" />
                      </a>
                    </div>{" "}
                    {/* Video Btn */}
                  </div>{" "}
                  {/* Hover */}
                </div>
                <div className="portfolio-info">
                  <h5>Task Tracking App</h5>
                  <span>
                    I'm not hosting this because it's for learning purpose only
                  </span>
                </div>
              </div>{" "}
              {/* Portfolio */}
            </li>{" "}
            {/* col */}
            <li className="portfolio-item photoshop website">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="#">
                    <img src="static/img/tasktracking.jpg" title alt />
                  </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href =
                            "https://github.com/hungnviet/Task_Tracking_FE_Web";
                        }}
                      >
                        <i className="fa fa-play" />
                      </a>
                      <a
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-4.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <i className="fas fa-expand" />
                      </a>
                      <a href="#" className="theme-color">
                        <i className="fa fa-link" />
                      </a>
                    </div>{" "}
                    {/* Video Btn */}
                  </div>{" "}
                  {/* Hover */}
                </div>
                <div className="portfolio-info">
                  <h5>Task Tracking web</h5>
                  <span>
                    I'm not hosting this since it's just for learning purpose
                  </span>
                </div>
              </div>{" "}
              {/* Portfolio */}
            </li>{" "}
            {/* col */}
            {/* col */}
            <li className="portfolio-item app website">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="#">
                    <img src="static/img/Uni.png" title alt />
                  </a>

                  {/* Hover */}
                </div>
                <div className="portfolio-info">
                  <h5>UniCungDi</h5>
                  <span>Currently in progress</span>
                </div>
              </div>{" "}
              {/* Portfolio */}
            </li>{" "}
            {/* col */}
          </ul>{" "}
          {/* row */}
        </div>{" "}
        {/* portfolio content */}
      </div>
      {/* 
          ==========================
            Testimonials
          ==========================
          */}
      <Testimonials />
    </SectionContainer>
  );
};
export default Portfolio;
