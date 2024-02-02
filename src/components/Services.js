import SectionContainer from "./SectionContainer";
const Services = () => {
  return (
    <SectionContainer
      name={"resume"}
      extraClass={"resume-section"}
      title={"My Resume"}
      subTitle={"History"}
      leftImage="static/img/title-2.jpg"
    >
      <div className="row">
        <div className="col-md-6">
          <div className="resume-row">
            <h2 className="theme-after dark-color">Experience</h2>
            <ul>
              <li>
                <div className="r-name">
                  <i className="theme-bg ti-briefcase" />
                  <span className="dark-color">Task Tracking</span>
                  <label>Dec 2023 - Early Jan 2024</label>
                </div>
                <div className="r-info">
                  <p>
                    I work as a mobile developer specializing in React Native,
                    contributing to the development of an app and web platform
                    designed for team task management. In addition to my role in
                    mobile development, I handle the backend responsibilities
                    using Node.js, and the database is managed through MongoDB.
                  </p>
                </div>
              </li>
              <li>
                <div className="r-name">
                  <i className="theme-bg ti-briefcase" />
                  <span className="dark-color">UniCungDi</span>
                  <label>Jan 2024 - Present</label>
                </div>
                <div className="r-info">
                  <p>
                    I am involved in the development of a website aimed at
                    facilitating ridesharing among students at the Universities
                    of Ho Chi Minh City. Functioning as a full-stack developer,
                    I employ React.js for the frontend, Node.js for the backend,
                    and MongoDB for the database. Additionally, I utilize this
                    project as a means to challenge and enhance my proficiency
                    with Tailwind CSS.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* col */}
        <div className="col-md-6">
          <div className="resume-row">
            <h2 className="theme-after dark-color">Education</h2>
            <ul>
              <li>
                <div className="r-name">
                  <i className="theme-bg fas fa-graduation-cap" />
                  <span className="dark-color">
                    Computer Scienece bachelor's degree - Ho Chi Minh University
                    of Technology
                  </span>
                  <label>Sep 2022 - Sep 2026</label>
                </div>
                <div className="r-info">
                  <p>
                    My university program emphasizes algorithms and data
                    structures over coding skills. As a result, I've had to
                    independently develop my coding abilities. However, due to
                    my strong foundation in algorithms from my university
                    education, I possess the capacity to quickly grasp and learn
                    new concepts.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* col */}
      </div>{" "}
      {/* row */}
      <div className="skill-row m-30px-t sm-m-20px-t">
        <div className="sub-title m-30px-b">
          <h2 className="dark-color theme-after">My Skills</h2>
        </div>
        <div className="row">
          <div className="col-md-6 p-30px-r sm-p-15px-r">
            <h3 className="dark-color">Language</h3>
            <div className="skills">
              <div className="progress-lt">
                <h6>English</h6>
                <span className="theme-bg">Proficiency</span>
                <div className="">
                  <p>TOEIC Reading & Listening: 855/950</p>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
              <div className="progress-lt">
                <h6>Japanese</h6>
                <span className="theme-bg">Elementary</span>
                <div className="">
                  <p>Take the N3 exam in Dec 2023, get 69 scores</p>
                  {/* /progress-bar */}
                </div>

                {/* /progress */}
              </div>
              {/* /progress-lt */}
            </div>
          </div>
          <div className="col-md-6 p-30px-l sm-p-15px-l sm-m-30px-t">
            <h3 className="dark-color">Technology skills</h3>
            <div className="skills">
              <div className="progress-lt">
                <h6>Programming Languages</h6>
                {/* <span className="theme-bg">92%</span> */}
                <div>
                  <div style={{ width: "92%" }}>
                    C++, JavaScript, TypeScript, Python, Assembly, HTML, CSS
                  </div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
              <div className="progress-lt">
                <h6>Frameworks</h6>
                <div>
                  <div style={{ width: "84%" }}>
                    ReactJs, ReactNative, TailwindCss, Node. js, Express.js
                  </div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
              <div className="progress-lt">
                <h6>Databases</h6>
                <div>
                  <div style={{ width: "84%" }}>MongoDB, MySQL, Firebase</div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Services;
