import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useRef, useState } from "react";
// import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_1th6yd9",
  //       "template_13m1fsf",
  //       form.current,
  //       "oN2M8beRG-WaZIk0_"
  //     )
  //     .then((response) => {
  //       console.log("Success!", response.status, response.text);
  //       setMessage("Your message has been sent successfully!");
  //       setMessageType("success");
  //       form.current.reset();
  //     })
  //     .catch((err) => {
  //       console.log("Failed...", err);
  //     });
  };
  return (
    <>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact_container">
          <div className="contact_options">
            <article className="contact_option">
              <MdOutlineEmail className="contact_option_icon" />
              <h4>Email</h4>
              <h5>vaishnavimane@gmail.com</h5>
              <a href="mailto:vaishnavimane991@gmail.com">Send a Message</a>
            </article>
            <article className="contact_option">
              <FaLinkedin className="contact_option_icon" />
              <h4>LinkedIn</h4>
              <h5>Vaishnavi Mane</h5>
              <a href="https://www.linkedin.com/in/vaishnavi-mane-a415a633a/">Send a Message</a>
            </article>
            <article className="contact_option">
              <FaWhatsapp className="contact_option_icon" />
              <h4>WhatsApp</h4>
              <h5>Vaishnavi Mane</h5>
              <a href="https://api.whatsapp.com/send/?phone+9699978033">
                Send a Message
              </a>
            </article>
          </div>
          {/* end of contact option  */} 
           <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows={7}
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary" value="Send">
              Send Message
            </button>
            {message && (
              <div
                className={`alert ${
                  messageType === "success" ? "alert-success" : "alert-error"
                }`}
              >
                {message}
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;