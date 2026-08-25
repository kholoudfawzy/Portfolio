import { Col, Container, Row } from "react-bootstrap"


const Email = () => {
    return (
        <Container>
            <Col lg={12}>
                <div className="email-bx">
                    <Row>
                        <Col lg={12} md={6} xl={5}>
                            <h3>Have a project in mind? Leave your email and let's bring it to life.</h3>
                        </Col>
                        <Col md={6} xl={7}>
                            <div className="new-email-bx">
                                <input type="email" placeholder="Email Address" />
                                <button type="submit">Submit</button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Container>
    )
}

export default Email;