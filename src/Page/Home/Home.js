import React from "react";
import Layout from "../../Component/Layout/Layout";
import "../../Style/HomeStyle.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";

const Home = () => {
  return (
    <>
      <Layout>
        <section id="home"> <Section1 /> </section>
        <section id="about"> <Section2 /> </section>
        <section id="menu"> <Section3 /> </section>
        <Section4 />
        <section id="shop"> <Section5 /> </section>
        <section id="blog"> <Section6 /> </section>
        <section id="contact"> <Section7 /> </section>
       
      </Layout>
    </>
  );
};

export default Home;