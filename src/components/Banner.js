import { Col, Container, Row } from "react-bootstrap";
import tranparentlogo from '../assets/img/neyt-soto-high-resolution-logo-black-on-transparent-background.png';



export const Banner = () => {
    return (
        <section className='banner' id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="title">Thank You for coming</span>
                        <h1><span className="wrap">I'm an ambitious FullStack Developer</span></h1>
                        <p>a little about myself</p>

                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={tranparentlogo} alt='myLogo'/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}