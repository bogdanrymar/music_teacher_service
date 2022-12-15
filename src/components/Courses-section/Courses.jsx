import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/guitar.png";
import courseImg2 from "../../assests/images/piano.png";
import courseImg3 from "../../assests/images/violin.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Guitar lessons",
    lesson: 20,
    students: 1,
    rating: 9.1,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Piano full-course",
    lesson: 30,
    students: 2,
    rating: 9.7,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Violin education program",
    lesson: 12,
    students: 0.5,
    rating: 8.8,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Наші популярні курси</h2>
                <p>
                  Кожен музичний інструмент заслуговує того, щоб на ньому вчилися 
                  грати. Ми постійно розширюємо нашу команду талановитих 
                  викладачів-музикантів. Наразі можемо запропонувати навчання на 
                  таких популярних інструментах
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">Переглянути всі</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
