import React from "react";
import { Container, Row, Col } from "reactstrap";

import courseImg01 from "../../assests/images/notes.png";
import courseImg02 from "../../assests/images/singer.png";
import courseImg03 from "../../assests/images/microphone.png";
import courseImg04 from "../../assests/images/dance.png";
import FreeCourseCard from "./FreeCourseCard";

import "./free-course.css";

const freeCourseData = [
  {
    id: "01",
    title: "Базовий курс музичної грамоти (сольфеджіо)",
    imgUrl: courseImg01,
    students: 3.2,
    rating: 8.5,
  },
  {
    id: "02",
    title: "Оцінка рівня вашого вокалу",
    imgUrl: courseImg02,
    students: 1.3,
    rating: 7.9,
  },

  {
    id: "03",
    title: "Базові навички записування пісень",
    imgUrl: courseImg03,
    students: 0.3,
    rating: 9.0,
  },

  {
    id: "04",
    title: "Перевірка вашого ритмічного чуття",
    imgUrl: courseImg04,
    students: 2,
    rating: 6.7,
  },
];

const FreeCourse = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Наші безкоштовні послуги</h2>
          </Col>

          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
