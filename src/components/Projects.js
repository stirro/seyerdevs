import { Container, Col, Row } from "react-bootstrap"; 
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill_1 from "../assets/img/Skills/televisa.png"


export const Projects = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
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
    <section className="projects" id="project">
        <Container>
        <h1>DEVELOPING</h1>
        <Row>
            <Col>
                <div className="projects-box">
                    <p><br></br></p>
                    <Carousel responsive={responsive} infinite={true} className="projects-slider">
                        <div className="item">
                            <img src={skill_1} alt="c++"/>
                            <h5>Programacion en C++.</h5>
                        </div>
                    </Carousel>
                </div>
            </Col>
        </Row>
        </Container>
    </section>
    )
}