import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Faraz Travels Website Front End",
    category: "Front End Web App",
    tools: "React.js, CSS",
    image: "/images/monument_new.jpg",
    link: "https://github.com/faraz1726",
  },
  {
    title: "GreatEstate",
    category: "Real Estate Web App",
    tools: "React.js, Tailwind CSS",
    image: "/images/greatestate_new.jpg",
    link: "https://github.com/faraz1726",
  },
  {
    title: "NewsToday",
    category: "Real-Time News Aggregator",
    tools: "React.js, News API",
    image: "/images/newstoday_new.jpg",
    link: "https://github.com/faraz1726",
  },
  {
    title: "MRI Brain Tumor Classification",
    category: "AI / ML",
    tools: "Python, OpenCV, Scikit-learn, CNN",
    image: "/images/mri_new.png",
    link: "https://github.com/faraz1726",
  },
  {
    title: "Travel Booking System",
    category: "Full Stack",
    tools: "Node.js, Express.js, MongoDB Atlas, HTML/CSS/JS",
    image: "/images/travels_new.png",
    link: "https://lustrous-meerkat-7f4e16.netlify.app",
  },
  {
    title: "Task Manager",
    category: "Full Stack",
    tools: "Node.js, Express.js, HTML, CSS, Vanilla JS",
    image: "/images/task_manager_new2.png",
    link: "https://github.com/faraz1726",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
