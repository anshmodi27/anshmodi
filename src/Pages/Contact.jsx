import React, { useState } from "react";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { FiTwitter, FiGithub, FiFacebook, FiLinkedin } from "react-icons/fi";
import "../Css/Contact.css";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  // Firebase

  const submitData = async (event) => {
    event.preventDefault();
    const { name, email, number, subject, message } = userData;
    if (name && email && number && subject && message) {
      const res = await fetch(
        "https://ansh-modi-default-rtdb.firebaseio.com/usersData.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            number,
            subject,
            message,
          }),
        }
      );
      if (res) {
        setUserData({
          name: "",
          email: "",
          number: "",
          subject: "",
          message: "",
        });
        alert("Call You Soon!");
      } else {
        alert("fill the data");
      }
    } else {
      alert("fill the data");
    }
  };

  return (
    <>
      <section className="contact-section sec-padding" id="Contact">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>contact me</h2>
            </div>
          </div>
          <div className="row">
            <div className="contact-form">
              <form method="POST">
                <div className="row">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Name"
                      value={userData.name}
                      onChange={postUserData}
                      className="input-control"
                      name="name"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="email"
                      placeholder="Email"
                      value={userData.email}
                      onChange={postUserData}
                      className="input-control"
                      name="email"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      value={userData.number}
                      onChange={postUserData}
                      className="input-control"
                      name="number"
                      pattern="[0-9]{3}[0-9]{4}[0-9]{3}"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Subject"
                      value={userData.subject}
                      onChange={postUserData}
                      className="input-control"
                      name="subject"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <textarea
                      placeholder="Message"
                      value={userData.message}
                      onChange={postUserData}
                      className="input-control"
                      name="message"
                      required
                    />
                  </div>
                  <div className="submit-btn">
                    <button
                      className="btn"
                      type="submit"
                      aria-label="Send Message"
                      onClick={submitData}
                      // onSubmit={sendMail}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="contact-info">
              <div className="contact-info-item">
                <h3>Email</h3>
                <a href="mailto:anshmodi250+work@gmail.com" aria-label="Mail">
                  anshmodi250+work@gmail.com
                </a>
              </div>
              <div className="contact-info-item">
                <h3>Mobile</h3>
                <a href="tel:942-898-9806" aria-label="Number">
                  +91 94289 89806
                </a>
              </div>
              <div className="contact-info-item">
                <h3>Follow me</h3>
                <div className="social-links">
                  <a
                    href="https://www.linkedin.com/in/ansh-modi/"
                    target="_blank"
                    aria-label="Linkedin"
                  >
                    <FiLinkedin />
                  </a>
                  <a
                    href="https://github.com/anshmodi27"
                    target="_blank"
                    aria-label="GitHub"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href="https://wa.me/919428989806?text=Hello, How Can I Help You !?"
                    aria-label="Whatsapp"
                    target="_blank"
                  >
                    <AiOutlineWhatsApp />
                  </a>
                  <a
                    href="https://www.instagram.com/ansh__modi/"
                    aria-label="Instagram"
                    target="_blank"
                  >
                    <AiOutlineInstagram />
                  </a>
                  <a
                    href="https://www.facebook.com/anshmodi27/"
                    aria-label="Facebook"
                    target="_blank"
                  >
                    <FiFacebook />
                  </a>
                  <a
                    href="https://twitter.com/ansh3027"
                    target="_blank"
                    aria-label="Twitter"
                  >
                    <FiTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
