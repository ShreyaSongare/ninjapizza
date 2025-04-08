import React, { useRef, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Address from "../../assets/address.png";
import Email from "../../assets/email.png";
import Phone from "../../assets/phone-call.png";

function Section7() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form fields
      } else {
        setResponseMessage('Failed to send the message.');
      }
    } catch (error) {
      setResponseMessage('Error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (

    <section style={{ backgroundColor: "rgb(255, 241, 215)", color: "black", padding: "40px 0", position: "relative" }}>
      <Container>
        <Row className="justify-content-center">
          {/* Google Map */}
          <Col sm={6} md={6} style={{ paddingRight: "20px" }}>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.798929386127!2d73.8355656!3d18.537986299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf98297b9707%3A0xbc722f3713c3edac!2sSumago%20Infotech%20Private%20Ltd.!5e0!3m2!1sen!2sin!4v1738260515148!5m2!1sen!2sin"
                style={{
                  border: "0",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>

          {/* Contact Form */}
          <Col sm={6} md={6}>
            <div style={{ background: "rgb(251, 217, 154)", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(247, 244, 182, 0.1)" }}>
              <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Contact Us</h2>
              
              {responseMessage && (
                <div style={{
                  textAlign: "center",
                  padding: "10px",
                  marginBottom: "15px",
                  borderRadius: "5px",
                  background: responseMessage.includes("successfully") ? "#4CAF50" : "#FF5722",
                  color: "black"
                }}>
                  {responseMessage}
                </div>
              )}
              
              <form  onSubmit={handleSubmit}>
                <div style={{ marginBottom: "15px" }}>
                  <label style={{ fontWeight: "bold" }}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      fontSize: "16px",
                     
                      color: "black",
                    }}
                    required
                  />
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <label style={{ fontWeight: "bold" }}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      fontSize: "16px",
                    
                      color: "black",
                    }}
                    required
                  />
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <label style={{ fontWeight: "bold" }}>Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      fontSize: "16px",
                  
                      color: "black",
                    }}
                    required
                  />
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <label style={{ fontWeight: "bold" }}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      fontSize: "16px",
      
                      color: "black",
                      resize: "none",
                      height: "100px",
                    }}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    backgroundColor: "rgb(244, 239, 212)",
                    border: "none",
                    padding: "10px",
                    fontSize: "18px",
                    borderRadius: "5px",
                    color: "black",
                    cursor: "pointer",
                    transition: "background 0.3s ease-in-out",
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* Contact Information */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          color: "black",
          fontSize: "16px",
        }}
      >
        <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
          <img
            src={Address}
            alt="Address"
            style={{ width: "20px", marginRight: "10px" }}
          />
          Vidya Pratishthan's Kamalnayan Bajaj Institute of Engineering and Technology
        </div>
        <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
          <img
            src={Email}
            alt="Email"
            style={{ width: "20px", marginRight: "10px" }}
          />
          ShreyaSongare24@gmail.com
        </div>
        <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
          <img
            src={Phone}
            alt="Phone"
            style={{ width: "20px", marginRight: "10px" }}
          />
          888-689-770
        </div>
      </div>
    </section>
   
  );
}

export default Section7;
