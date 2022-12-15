import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>Про нас</h2>
              <p>
                Ми, студенти різних вищих навчальних закладів, фахових
                коледжів музичного спрямування, вирішили відкрити 
                власну школу музики, щоб покращувати свої навички та
                навчати інших цьому чудовому ремеслу!
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={10} duration={2}  />
                    </span>

                    <p className="counter__title">Талановитих викладачів</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={2} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Задоволених учнів</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={100} duration={2} />
                    </span>

                    <p className="counter__title">Зіграних концертів</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={150} duration={2} />
                    </span>

                    <p className="counter__title">Творів найкращих композиторів</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
