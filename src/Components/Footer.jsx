import { Container, Row, Col } from "react-bootstrap";
import { FaGithub , FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import Email from "./Email";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                {/* <Row>{Email}</Row> */}
                <Row className="align-items-center">
                    <Email />
                    <Col sm={6}>
                        <h2 className="logo text-center text-sm-start">Kh◉L◉uD.</h2>
                    </Col>
                    <Col md={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href='https://www.linkedin.com/in/kholoud-omran-098198197' target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn size={18} className='social-icon-item'/>
                            </a>
                            <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer">
                                <FaFacebookF size={18} className='social-icon-item'/>
                            </a>
                            <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={18} className='social-icon-item'/>
                            </a>
                            <a href='https://github.com/kholoudfawzy' target="_blank" rel="noopener noreferrer">
                                <FaGithub size={18} className='social-icon-item'/>
                            </a>
                        </div>
                        <p>Copyright ©2026 Kholoud Fawzy. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;