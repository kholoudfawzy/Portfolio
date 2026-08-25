import { Container, Row, Col } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import { FiArrowRightCircle } from 'react-icons/fi';
import Lottie from 'lottie-react';
import Astronaut from '../assets/img/Astronuat.json';

const profileRoles = [' Front-End Developer', ' React Developer', ' Node.js Developer'];

const Banner = () => {
  const scrollToContact = () => {
    const projectsSection = document.getElementById('projects');
    const contactTab = document.getElementById('projects-tabs-tab-third');

    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setTimeout(() => {
      if (contactTab) contactTab.click();
    }, 500);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="banner-row align-items-center flex-column flex-md-row">
          <Col xs={12} md={7} xl={7} className="banner-txt text-center text-md-start">
            <span className="tagline">Welcome All In My Portfolio</span>
            <h2 className="hero-title">
              Hi! I&apos;m Kholoud Fawzy,&nbsp;
              <span className="typing-text">
                <Typewriter
                  words={profileRoles}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={60}
                  delaySpeed={1800}
                />
              </span>
            </h2>
            <p>
              I build responsive and interactive websites using React.js, focused on clean code,
              smooth UI, and growing with every project.
            </p>
            <button href="#projects" onClick={scrollToContact}>
                Let's Connect <FiArrowRightCircle size={25} />
            </button>
          </Col>

          <Col xs={12} md={5} xl={5} className="banner-animation">
            <Lottie className="lotti" animationData={Astronaut} loop={true} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
