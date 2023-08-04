import { useRef,useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import headerImg from "../assets/img/header-img.svg"
import Typed from "typed.js";

export const Banner = () => {

/* eslint-disable no-unused-vars */

  const devsa = useRef(null);
  useEffect(() => {
      const typed = new Typed(devsa.current, {
        strings: ['IDEAS','PROYECTOS','SUEÑOS'],
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Explicabo perferendis reprehenderit error unde! Nesciunt necessitatibus nulla aperiam sed excepturi perferendis! Itaque ipsam nisi ab necessitatibus cupiditate nulla inventore totam at?</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}