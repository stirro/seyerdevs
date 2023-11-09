import { useRef,useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import Typed from "typed.js";

export const About = () => {

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
        <section className="about" id="info">
            <Container>
                <Row className="aling-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{'DEVSARROLLANDO>'}<br/><span className="wrap" ref={devsa}></span></h1>
                        <p>
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}