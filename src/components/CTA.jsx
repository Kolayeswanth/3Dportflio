import React from "react";
import { Link } from "react-router-dom";
const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">Have a Project in Mind?<br className="sm:block hidden"></br>
      Let's build something awesome together!
      </p>
      <Link to="/contact" className="btn">Get in Touch</Link>
    </section>
  );
};

export default CTA;
