import React from "react";
import "./testimonials.css";
const Testimonials = () => {
  return (
    <>
      <section id="Testimonials">
        <h5>My Education Background</h5>
        <h2>Education</h2>
        <div className="container eduction_container">
          <article className="education_item">
            <h3 className="eduction_type">BCA(sci)</h3>
            <div className="eduction_content">
              <h4>
                Savitribai Phule Pune University - Nirmalatai kakade
                art's,commerces & science College Shevgaon
              </h4>
              <h3>CGPA 7.90</h3>
            </div>
          </article>
          <article className="education_item">
            <h3 className="eduction_type">HSC</h3>
            <div className="eduction_content">
              <h4>
                State Board of Maharashtra - Kaushlya juniour college pategaon,
                paithan
              </h4>
              <h3>82.85%</h3>
            </div>
          </article>
          <article className="education_item">
            <h3 className="eduction_type">SSC</h3>
            <div className="eduction_content">
              <h4>
                State Board of Maharashtra - Kaushlya vidya mandir pategaon,
                paithan
              </h4>
              <h3>79.80%</h3>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Testimonials;