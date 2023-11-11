import { Container } from "react-bootstrap"; 
import skill_1 from "../assets/img/dev2.gif"

export const Projects = () => {


    return (
    <section className="projects" id="project">
        <h1>PROYECTOS</h1>
        <Container className="container">
            <div className="projects-desc">
                <img src={skill_1} alt="dev"/>
                <h2>Creando soluciones para todos.<span className></span></h2>
            </div>
            <div className="projects-par">
            <ul> > Conexión de consolas de iluminacion entre México y Qatar para
            el mundial de Qatar 2022 con Televisa y Telemundo.</ul>
            <ul> > Desarrollo de aplicaciones web con php.</ul>
            <ul> > Desarrollo de aplicaciones y paginas web con React.</ul>
            <ul> > Creacion de APIS con .NET framework y ASP.NET</ul>
            </div>
        </Container>
    </section>
    )
}