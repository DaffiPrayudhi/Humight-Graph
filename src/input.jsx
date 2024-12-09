import React, { useState, useEffect } from "react";
import { Navcontact } from "./components/navcontact";
import ContactForm from "./ContactForm";  
import { ContactFooter } from "./components/contactfooter";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Input = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navcontact />
      <ContactForm />
      <ContactFooter data={landingPageData.ContactFooter} />
    </div>
  );
};

export default Input;
