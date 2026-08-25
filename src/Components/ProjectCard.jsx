import { Col } from 'react-bootstrap';

const ProjectCard = ({ title, description, imgUrl1, imgUrl2, githubLink, demoLink }) => {
  const openLink = (link) => {
    if (!link) {
      alert('Project Under Development');
      return;
    }

    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <Col sm={12} lg={6}>
      <div className="proj-imgbx">
        <div className="imgs-container">
          <img src={imgUrl1} alt={`${title} preview 1`} />
          <img src={imgUrl2} alt={`${title} preview 2`} />
        </div>

        <div className="proj-txt">
          <h4>{title}</h4>
          <span>{description}</span>

          <button type="button" className="openLink" onClick={() => openLink(demoLink)}>
            Live Demo
          </button>

          <button type="button" className="openLink" onClick={() => openLink(githubLink)}>
            View Code
          </button>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;