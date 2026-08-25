
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>you can see my skills here</p>
                            <Carousel className="skill-slider" responsive={responsive} infinite={true} >
                                <div className="item">
                                    <CircularProgressbar
                                    className="prog-circle"
                                        value={90}
                                        text={`90%`}
                                        styles={buildStyles({
                                            textColor: "#fff",
                                            pathColor: "url(#gradient)", 
                                            trailColor: "rgba(0,0,0,0)",
                                        })}
                                    />
                                    <svg style={{ height: 0 }}>
                                        <defs>
                                            <linearGradient id="gradient">
                                                <stop offset="0%" stopColor="#f7914d" />
                                                <stop offset="100%" stopColor="#4A2FBD" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <h5>HTML5</h5>
                                </div>
                                <div className="item">
                                
                                    <CircularProgressbar
                                    className="prog-circle"
                                        value={85}
                                        text={`85%`}
                                        styles={buildStyles({
                                            textColor: "#fff",
                                            pathColor: "url(#gradient)", 
                                            trailColor: "rgba(0,0,0,0)",
                                        })}
                                    />
                                    <svg style={{ height: 0 }}>
                                        <defs>
                                            <linearGradient id="gradient">
                                                <stop offset="0%" stopColor="#f7914d" />
                                                <stop offset="100%" stopColor="#4A2FBD" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <h5>CSS3</h5>
                                </div>
                                <div className="item">
                              
                                    <CircularProgressbar
                                    className="prog-circle"
                                        value={70}
                                        text={`70%`}
                                        styles={buildStyles({
                                            textColor: "#fff",
                                            pathColor: "url(#gradient)", 
                                            trailColor: "rgba(0,0,0,0)",
                                        })}
                                    />
                                    <svg style={{ height: 0 }}>
                                        <defs>
                                            <linearGradient id="gradient">
                                                <stop offset="0%" stopColor="#f7914d" />
                                                <stop offset="100%" stopColor="#4A2FBD" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <h5>JavaScript ES6+</h5>
                                </div>
                                <div className="item">
                                   
                                    <CircularProgressbar
                                    className="prog-circle"
                                        value={70}
                                        text={`70%`}
                                        styles={buildStyles({
                                            textColor: "#fff",
                                            pathColor: "url(#gradient)", 
                                            trailColor: "rgba(255,255,255,0)",
                                        })}
                                    />
                                    <svg style={{ height: 0 }}>
                                        <defs>
                                            <linearGradient id="gradient">
                                                <stop offset="0%" stopColor="#f7914d" />
                                                <stop offset="100%" stopColor="#4A2FBD" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <h5>React JS</h5>
                                </div>
                                <div className="item">

                                    <CircularProgressbar
                                    className="prog-circle"
                                        value={85}
                                        text={`85%`}
                                        styles={buildStyles({
                                            textColor: "#fff",
                                            pathColor: "url(#gradient)", 
                                            trailColor: "rgba(0,0,0,0)",
                                        })}
                                    />
                                    <svg style={{ height: 0 }}>
                                        <defs>
                                            <linearGradient id="gradient">
                                                <stop offset="0%" stopColor="#f7914d" />
                                                <stop offset="100%" stopColor="#4A2FBD" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="item">

                                    <CircularProgressbar
                                    className="prog-circle"
                                        value={90}
                                        text={`90%`}
                                        styles={buildStyles({
                                            textColor: "#fff",
                                            pathColor: "url(#gradient)", 
                                            trailColor: "rgba(0,0,0,0)",
                                        })}
                                    />
                                    <svg style={{ height: 0 }}>
                                        <defs>
                                            <linearGradient id="gradient">
                                                <stop offset="0%" stopColor="#f7914d" />
                                                <stop offset="100%" stopColor="#4A2FBD" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <h5>Tailwind CSS</h5>
                                </div>
                                <div className="item">
                             
                                    <CircularProgressbar
                                    className="prog-circle"
                                        value={80}
                                        text={`80%`}
                                        styles={buildStyles({
                                            textColor: "#fff",
                                            pathColor: "url(#gradient)", 
                                            trailColor: "rgba(0,0,0,0)",
                                        })}
                                    />
                                    <svg style={{ height: 0 }}>
                                        <defs>
                                            <linearGradient id="gradient">
                                                <stop offset="0%" stopColor="#f7914d" />
                                                <stop offset="100%" stopColor="#4A2FBD" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <h5>Responsive Design</h5>
                                </div>
                                <div className="item">

                                    <CircularProgressbar
                                    className="prog-circle"
                                        value={70}
                                        text={`70%`}
                                        styles={buildStyles({
                                            textColor: "#fff",
                                            pathColor: "url(#gradient)", 
                                            trailColor: "rgba(0,0,0,0)",
                                        })}
                                    />
                                    <svg style={{ height: 0 }}>
                                        <defs>
                                            <linearGradient id="gradient">
                                                <stop offset="0%" stopColor="#f7914d" />
                                                <stop offset="100%" stopColor="#4A2FBD" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <h5>FrontEnd Development</h5>
                                </div>
                                <div className="item">

                                    <CircularProgressbar
                                    className="prog-circle"
                                        value={60}
                                        text={`60%`}
                                        styles={buildStyles({
                                            textColor: "#fff",
                                            pathColor: "url(#gradient)", 
                                            trailColor: "rgba(0,0,0,0)",
                                        })}
                                    />
                                    <svg style={{ height: 0 }}>
                                        <defs>
                                            <linearGradient id="gradient">
                                                <stop offset="0%" stopColor="#f7914d" />
                                                <stop offset="100%" stopColor="#4A2FBD" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <h5>Node.JS</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-left" scr={colorSharp} /> */}
        </section>
    )
}


export default Skills;

