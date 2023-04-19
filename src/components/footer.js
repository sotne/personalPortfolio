import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/neyt-soto-high-resolution-logo-black-on-transparent-background.png';
import github from "../assets/img/github.svg";
import linkedin from "../assets/img/linkedin.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/sotne"><img src={github} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/neyt-fabian-soto-8b3387263/"><img src={linkedin} alt="Icon" /></a>
            </div>
            <p>Copyright 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}