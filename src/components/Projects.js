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
        <h1>PROYECTOS</h1>
        <Container>
        <Row>
            <Col>
            <div className="projects-desc">
            <h2>Creando soluciones para todos.<span className></span></h2>
                <p>Durante mi vida profesional he tenido la oportunidad de trabajar en diferentes proyectos, 
                    los cuales me han permitido desarrollar habilidades y conocimientos en diferentes áreas de la tecnología en las 
                    áreas de la programación, diseño y administración de proyectos, redes y muchas más.
                </p>
            </div>
            <div className="projects-box1">
                <Carousel responsive={responsive} infinite={true} className="projects-slider">
                    <div className="item1">
                        <img src={skill_1} alt="c++"/>
                        <h5>televisa.</h5>
                    </div>
                </Carousel>
            </div>
            </Col>
        </Row>
        </Container>
    </section>
    )
}