import { Row, Col, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import proj1Img1 from '../assets/img/Project3-BS.png';
import proj1Img2 from '../assets/img/Project3-BS2.png';
import proj2Img1 from '../assets/img/Project2.png';
import proj2Img2 from '../assets/img/Project2-img2.png';
import proj3Img1 from '../assets/img/Project5-TL-LandingPage.png';
import proj3Img2 from '../assets/img/Project5-TL-LandingPage2.png';
import proj4Img1 from '../assets/img/Elite Cart1.png';
import proj4Img2 from '../assets/img/Elite Cart - Admin dashboard1.png';
import proj5Img1 from '../assets/img/Project4-JS1.png';
import proj5Img2 from '../assets/img/Project4-JS2.png';
import proj6Img1 from '../assets/img/portfolio-img1.png';
import proj6Img2 from '../assets/img/portfolio-img3.png';
import Experience from './Experience';
import Contact from './Contact';

const projects = [
  {
    title: 'Elite Cart E-Commerce',
    description: 'Team React e-commerce platform (Store & Admin Dashboard) with REST APIs.',
    imgUrl1: proj4Img1,
    imgUrl2: proj4Img2,
    githubLink: 'https://github.com/kholoudfawzy/Ecommerce',
    demoLink: 'https://elite-cart-alpha.vercel.app/',
  },
  {
    title: 'Portfolio',
    description: 'My Portfolio - Personal portfolio, React.js',
    imgUrl1: proj6Img1,
    imgUrl2: proj6Img2,
    githubLink: 'https://github.com/kholoudfawzy/Portfolio.git',
    demoLink: 'https://portfolio-two-cyan-72.vercel.app/',
  },
  {
    title: 'Landing Page',
    description: 'LaunchPage - Modern landing page, Tailwind CSS',
    imgUrl1: proj3Img1,
    imgUrl2: proj3Img2,
    githubLink: 'https://github.com/kholoudfawzy/Project5-LandingPage-Tailwind',
    demoLink: 'https://kholoudfawzy.github.io/Project5-LandingPage-Tailwind/',
  },
  {
    title: 'Cosmetics Shop',
    description: 'Beauty store with cart & login, HTML/CSS/JS',
    imgUrl1: proj5Img1,
    imgUrl2: proj5Img2,
    githubLink: 'https://github.com/kholoudfawzy/Project4-Cosmetics-Shop-JS',
    demoLink: 'https://kholoudfawzy.github.io/Project4-Cosmetics-Shop-JS/',
  },
  {
    title: 'Restaurant Page',
    description: 'TastySpot - Restaurant landing page, Bootstrap',
    imgUrl1: proj1Img1,
    imgUrl2: proj1Img2,
    githubLink: 'https://github.com/kholoudfawzy/Restaurant-Page-Bootstrap',
    demoLink: 'https://kholoudfawzy.github.io/Restaurant-Page-Bootstrap/',
  },
  {
    title: 'Fashion Hub',
    description: 'Multi-category fashion store, HTML5 & CSS3',
    imgUrl1: proj2Img1,
    imgUrl2: proj2Img2,
    githubLink: 'https://github.com/kholoudfawzy/Kholoud-Fawzy-FashionHub',
    demoLink: 'https://kholoudfawzy.github.io/Kholoud-Fawzy-FashionHub/',
  },
];

const Projects = () => (
  <section className="project" id="projects">
    <Row>
      <Col>
        <h2 className="project-title">My Journey</h2>

        <Tab.Container id="projects-tabs" defaultActiveKey="projectsTab">
          <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
            <Nav.Item>
              <Nav.Link eventKey="projectsTab">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="qualificationsTab">Qualifications</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="contactTab">Contact</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="projectsTab" className="projects-container">
              <Row>
                <Col xs={12} className="text-center mb-4">
                  <span className="proj-heading">My Projects</span>
                  <h2 className="proj-title">
                    Projects that <em>speak for themselves.</em>
                  </h2>
                  <p className="proj-desc">
                    A showcase of frontend projects — from static pages to full React applications
                    with REST API integration.
                  </p>
                </Col>

                {projects.map((item, index) => (
                  <ProjectCard key={`${item.title}-${index}`} {...item} />
                ))}
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="qualificationsTab">
              <Experience />
            </Tab.Pane>

            <Tab.Pane eventKey="contactTab">
              <Contact />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Col>
    </Row>
  </section>
);

export default Projects;


//   Old Code   //
// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import ProjectCard from "./ProjectCard";
// import proj1Img1 from "../assets/img/Project3-BS.png";
// import proj1Img2 from "../assets/img/Project3-BS2.png";
// import proj2Img1 from "../assets/img/Project2.png";
// import proj2Img2 from "../assets/img/Project2-img2.png";
// import proj3Img1 from "../assets/img/Project5-TL-LandingPage.png";
// import proj3Img2 from "../assets/img/Project5-TL-LandingPage2.png";
// import proj4Img1 from "../assets/img/Elite Cart1.png";
// import proj4Img2 from "../assets/img/Elite Cart - Admin dashboard1.png";
// import proj5Img1 from "../assets/img/Project4-JS1.png";
// import proj5Img2 from "../assets/img/Project4-JS2.png";
// import proj6Img1 from "../assets/img/portfolio-img1.png";
// import proj6Img2 from "../assets/img/portfolio-img3.png";
// import Experience from './Experience';
// import Contact from "./Contact";


// const Projects = () => {

//     const project = [
//         {
//             title: "Elite Cart E-Commerce",
//             description: "Team React e-commerce platform (Store & Admin Dashboard) with REST APIs.",
//             imgUrl1: proj4Img1,
//             imgUrl2: proj4Img2,
//             githubLink: "https://github.com/kholoudfawzy/Ecommerce",
//             demoLink: "https://elite-cart-alpha.vercel.app/"
//         },
//         {
//             title: "Portfolio",
//             description: "My Portfolio - Personal portfolio, React.js",
//             imgUrl1: proj6Img1,
//             imgUrl2: proj6Img2,
//             githubLink: "ProjGithubLink6",
//             demoLink: "demoLink1"
//         },
//         {
//             title: "Landing Page",
//             description: "LaunchPage - Modern landing page, Tailwind CSS",
//             imgUrl1: proj3Img1,
//             imgUrl2: proj3Img2,
//             githubLink: "https://github.com/kholoudfawzy/Project5-LandingPage-Tailwind",
//             demoLink: "https://kholoudfawzy.github.io/Project5-LandingPage-Tailwind/"
//         },
//         {
//             title: "Cosmetics Shop",
//             description: "Beauty store with cart & login, HTML/CSS/JS",
//             imgUrl1: proj5Img1,
//             imgUrl2: proj5Img2,
//             githubLink: "https://github.com/kholoudfawzy/Project4-Cosmetics-Shop-JS",
//             demoLink: "https://kholoudfawzy.github.io/Project4-Cosmetics-Shop-JS/"
//         },
//         {
//             title: "Restaurant Page",
//             description: "TastySpot - Restaurant landing page, Bootstrap",
//             imgUrl1: proj1Img1,
//             imgUrl2: proj1Img2,
//             githubLink: "https://github.com/kholoudfawzy/Restaurant-Page-Bootstrap",
//             demoLink: "https://kholoudfawzy.github.io/Restaurant-Page-Bootstrap/"
//         },
//         {
//             title: "Fashion Hub",
//             description: "Multi-category fashion store, HTML5 & CSS3",
//             imgUrl1: proj2Img1,
//             imgUrl2: proj2Img2,
//             githubLink: "https://github.com/kholoudfawzy/Kholoud-Fawzy-FashionHub",
//             demoLink: "https://kholoudfawzy.github.io/Kholoud-Fawzy-FashionHub/"
//         }
//     ]

//     return (
//         <section className="project w-100" id="projects">
//             {/* <Container> */}
//             <Row>
//                 <Col>
//                     <h2 className="project-title">My Journey</h2>

//                     <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                         <Nav variant="pills" defaultActiveKey="first" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                             <Nav.Item>
//                                 <Nav.Link eventKey="first">Projects</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link eventKey="second">Qualifications</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link eventKey="third">Contact</Nav.Link>
//                             </Nav.Item>
//                         </Nav>
//                         <Tab.Content>
//                             <Tab.Pane eventKey="first" className="projects-container ">
//                                 <Row>
//                                     <Col xs={12} className="text-center mb-4">
//                                         <span className="proj-heading">My Projects</span>
//                                         <h2 className="proj-title">
//                                             Projects that{" "}
//                                             <em>speak for themselves.</em>
//                                         </h2>
//                                         <p className="proj-desc">
//                                             A showcase of frontend projects — from static pages to full React applications with REST API integration.
//                                         </p>
//                                     </Col>
//                                     {
//                                         project.map((project, index) => (
//                                             <ProjectCard
//                                                 key={index}
//                                                 {...project}
//                                             />
//                                         ))
//                                     }
//                                 </Row>
//                             </Tab.Pane>
//                             <Tab.Pane eventKey="second"><Experience /></Tab.Pane>
//                             <Tab.Pane eventKey="third"><Contact /></Tab.Pane>
//                         </Tab.Content>
//                     </Tab.Container>
//                 </Col>
//             </Row>
//             {/* </Container> */}
//         </section>
//     )
// }

// export default Projects;
