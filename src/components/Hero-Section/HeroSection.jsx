import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Будь-де та будь-коли <br /> Навчайся з Задоволенням <br /> За зручним графіком
              </h2>
              <p className="mb-5">
                Наша школа надає послуги з навчання вокалу, грі на різних музичних інструментах (гітара, фортеріано, скрипка, бандура, барабани, акордеон тощо)
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Пошук</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
