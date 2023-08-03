import { Col, Container, Row } from "react-bootstrap"
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {
    return  (
        <section className="banner" id="home">
            <Container>
                <Row className="aling-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <h1>{'DEVSARROLLANDO '}<span className="wrap">PROYECTOS</span></h1>
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