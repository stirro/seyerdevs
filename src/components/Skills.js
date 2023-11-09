import { Container, Col, Row } from "react-bootstrap"; 
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill_1 from "../assets/img/Skills/c++.png"
import skill_2 from "../assets/img/Skills/html.png"
import skill_3 from "../assets/img/Skills/azure.png"
import skill_4 from "../assets/img/Skills/github.png"
import skill_5 from "../assets/img/Skills/linux.png"
import skill_6 from "../assets/img/Skills/git-icon.png"
import skill_7 from "../assets/img/Skills/node.png"
import skill_8 from "../assets/img/Skills/SQL.png"

export const Skills = () => {
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
    <section className="skill" id="skl">
        <Container>
        <h1>SKILLS</h1>
        <Row>
            <Col>
                <div className="skill-box">
                    <p>Contamos con 2 años de experiencia en el desarrollo web usando tecnologias como HTML, Javascript, Node.js.<br></br>
                    Ademas de contar con los conocimientos y experiencia en desarrollo de software con C# usando .NET como framework y Microsoft SQL Server como DBA.
                    </p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item1">
                            <img src={skill_1} alt="c++"/>
                            <h5>Programacion en C++.</h5>
                        </div>
                        <div className="item2">
                            <img src={skill_2} alt="html"/>
                            <h5>Desarrollo Web.</h5>
                        </div>
                        <div className="item3">
                            <img src={skill_3} alt="azure"/>
                            <h5>Cloud Computing.</h5>
                        </div>
                        <div className="item">
                            <img src={skill_4} alt="github"/>
                            <h5>Control de versiones con Github.</h5>
                        </div>
                        <div className="item">
                            <img src={skill_5} alt="linux"/>
                            <h5>Uso de OS UNIX.</h5>
                        </div>
                        <div className="item">
                            <img src={skill_6} alt="git"/>
                            <h5>Control de versiones con GIT</h5>
                        </div>
                        <div className="item">
                            <img src={skill_7} alt="nodejs"/>
                            <h5>Node.Js como framework</h5>
                        </div>
                        <div className="item">
                            <img src={skill_8} alt="dba"/>
                            <h5>Programacion en SQL.</h5>
                        </div>
                    </Carousel>
                </div>
            </Col>
        </Row>
        </Container>
    </section>
    )
}