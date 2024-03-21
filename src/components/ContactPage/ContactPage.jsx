import React from "react";
import "./ContactPage.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";
const ContactPage = () => {
  return (
    <section className="contact-container">
      <h5>Contact</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="./assets/images/react.png"
            text="saikumar05g2@gmail.com"
          />
          <ContactInfoCard
            iconUrl="./assets/images/react.png"
            text="https://github.com"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
