import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Швидке навчання",
    desc: "Наші методики допомагають в найкоротші терміни здобути необзідні навички",
    icon: "ri-draft-line",
  },

  {
    title: "Постійний зв'язок",
    desc: "Ви можете звернутися до нас за порадою в будь-який час",
    icon: "ri-discuss-line",
  },

  {
    title: "Сертифікаця",
    desc: "Після закінчення навчання ви отримаєте сертифікат, в якому буде вказаний курс, який ви пройшли",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
