import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Intern</h4>
                <h5>projFuel</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed and deployed production-ready full-stack features using React.js,
              Node.js, Express.js, and MongoDB, integrating RESTful APIs for seamless
              client-server communication. Debugged production issues and optimized
              application performance, improving responsiveness by ~20%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI / ML Intern</h4>
                <h5>BVCOE</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Performed data preprocessing, feature extraction, and model evaluation,
              improving prediction accuracy and model reliability. Built and evaluated ML
              models (Python, Scikit-learn, OpenCV) using supervised learning techniques
              to address applied classification and prediction problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
