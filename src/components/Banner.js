import { useRef,useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap"; 
import "react-multi-carousel/lib/styles.css";
import Typed from "typed.js";
export const Banner = () => {

/* eslint-disable no-unused-vars */

  const devsa = useRef(null);
  useEffect(() => {
      const typed = new Typed(devsa.current, {
        strings: ['IDEAS','SUEÑOS','PROYECTOS'],
        fadeOutDelay:1000,
        typeSpeed: 80,
        backSpeed: 80,
        showCursor: true,
        fadeOut: false,
        loop: false
      });
    });            
/* eslint-enable no-unused-vars */

return(
        <section className="banner" id="home">
            <Container>
                <Row className="aling-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{'DEVSARROLLANDO>'}<br/><span className="wrap" ref={devsa}></span></h1>
                        <p>Hola Soy Sergio Tirro!, tengo 24 años, soy Técnico en informática y estudio la carrera de 
                        Ing. en Comunicaciones y Electrónica en el IPN. Con más de 4 años de experiencia en el área de sistemas computacionales tengo habilidades
                        para el desarrollo de soluciones, desarrollo de proyectos, liderazgo y paciencia y amor por mi profesión.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}