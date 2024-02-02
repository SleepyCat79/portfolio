import SectionContainer from "./SectionContainer";

const AboutUs = () => {
  return (
    <SectionContainer
      name={"about"}
      extraClass="about-section"
      title={"About"}
      subTitle={"WHO I AM"}
      leftImage="static/img/title-1.jpg"
      leftImageTitle={"About Me"}
    >
      <div className="row">
        <div className="col-md-4">
          {/* <img src="static/img/my-pic.jpg" title alt /> */}
        </div>
        <div className="col-md-8 md-m-30px-t">
          <div className="about-text">
            <h3 className="dark-color">Hi, I'm Vo Nguyen Gia Huy</h3>
            <p>
              I am currently enrolled in Ho Chi Minh University of Technology,
              majoring in Computer Science. I have done some projects with
              JavaScript (JS), TypeScript (TS), React.js, and React Native. I
              possess proficiency in MongoDB and have hands-on experience with
              CSS, along with expertise in utilizing the Tailwind CSS framework
              for styling. In the backend realm, I am well-versed in Node.js and
              Express.js.
              <br />
              <br />
              I'm looking for intern opportunity to work as a full-stack
              developer or a mobile developer.
            </p>
          </div>{" "}
          {/* about-text */}
          <div className="btn-bar">
            <a href="static/myCV.pdf" className="btn btn-theme">
              Check My CV
            </a>
          </div>
        </div>
      </div>{" "}
      {/* row */}
      {/* 
     ==========================
       Counter
     ==========================
     */}
    </SectionContainer>
  );
};
export default AboutUs;
