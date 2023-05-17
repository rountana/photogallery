import React from "react";
import Hero from "../components/Hero";
import Contact from "../components/Contact";

const contact = () => {
  return (
    <div>
      <Hero heading="Reach us" cta="contacts" />
      <h1>Contact</h1>
      <Contact />
    </div>
  );
};

export default contact;
