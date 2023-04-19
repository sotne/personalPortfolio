
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import 'animate.css';
import { ProjectCard } from "./ProjectCard";
import rugby from '../assets/img/rugbyPage.png';
import sales from '../assets/img/business page.png';


export const Projects = () => {
    const projects = [
        {
            title: "Rugby Page",
            description: "Promote service in the community and group",
            imgUrl: rugby,
          },
          {
            title: "business Page",
            description: "simple sales",
            imgUrl: sales,
          },
    ];

    return (
        <section className="project" id="project">
          <Container>
            <Row>
              <Col>
                    <h2>Projects</h2>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                      </Nav>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="section">
                          <p>this is the event key section</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>this is the event key third</p>
                        </Tab.Pane>
                    </Tab.Container>
              </Col>
            </Row>
          </Container>
        </section>
      )
}