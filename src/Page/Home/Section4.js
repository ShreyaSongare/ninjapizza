import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.jpg";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a hot, cheesy pizza.</h2>
              <p>
              Semper lacus cursus porta primis ligula risus tempus, and just like our signature pies, each gathering becomes better with every slice. From our golden crust to our bold toppings, Ninja Pizza delivers flavor that unites every table.
              </p>
              <ul>
                <li>
                  <p>
                  Fringilla risus, luctus mauris orci auctor purus – our handcrafted pizzas combine tradition with innovation, baked to perfection and served with a side of fun.
                  </p>
                </li>
                <li>
                  <p>From classic Margheritas to wild ninja-inspired creations, each pizza is crafted to satisfy your cravings with premium ingredients and unstoppable flavor.</p>
                </li>
               
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;