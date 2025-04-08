import React from "react";
import { Container, Row, Col} from "react-bootstrap"; 
import { Link } from "react-router-dom";
import Pizza from "../../assets/hero/about/pizza-slice.png";
import Salad from "../../assets/hero/about/salad1.png";
import Delivery from "../../assets/hero/about/food-delivery.png";


const mockData = [
  {
    image: Pizza,
    title: "Original Pizza",
    paragraph: `Indulge in our signature pizzas made with the finest ingredients. Each bite is a journey into flavor, crafted to satisfy your taste buds.`,
  },
  {
    image: Salad,
    title: "Quality Fresh Salad",
    paragraph: `Our salads are made with fresh, hand-picked ingredients, giving you a healthy and delicious experience every time.`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Get your food delivered hot and fresh to your doorstep in no time. Our delivery service ensures you never wait long for a meal.`,
  },
];
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
function Section2() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>Welcome to Ninja Pizza!!! </h2>
              <p>
                <h4>
              where every slice is a stealthy strike of flavor!
              </h4>
                <p>
                At Ninja Pizza, we believe that great pizza should be bold, fast, and unforgettable. Inspired by the precision and agility of ninjas, our team crafts each pie with masterful skill, using only the freshest ingredients and time-honored techniques. Whether you're craving a classic pepperoni, a daring new fusion, or a secret menu item (shh!), we’ve got the perfect pizza for every mission.
                    </p>
                    <p>
                    Born from a love of pizza and a passion for creativity, Ninja Pizza isn’t just a restaurant—it’s a movement. A slice of adventure. A bite of tradition with a modern twist.

So grab your chopsticks or your hands, and join the Ninja Pizza clan. One bite, and you’ll know—you’ve found your flavor dojo.
                    </p>
              </p>
              <Link onClick={() => scrollToSection("menu")} className="btn ">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
               <div className="about_box text-center">
                <div className="about_icon">
                  <img src={cardData.image} className="img-fluid" alt="icon"/>
                </div>
                <h4>{cardData.title}</h4>
                <p>{cardData.paragraph}</p>
               </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
