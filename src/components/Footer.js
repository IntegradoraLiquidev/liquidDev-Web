import Container from "react-bootstrap/Container";
import React, { useState, useEffect } from "react";
function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <Container fluid>
        <section id="contact" className="contact-block">
          <div className="contact-info">
            <ul>
              <li data-aos="fade-up" data-aos-delay="50">
                <i
                  className="fas fa-envelope"
                  data-aos="fade-up"
                  data-aos-delay="50"
                ></i>
                liquidDev@gmail.com
              </li>
              <li data-aos="fade-up" data-aos-delay="60">
                <i
                  className="fas fa-phone"
                  data-aos="fade-up"
                  data-aos-delay="60"
                ></i>
                +52-677-885-9763
              </li>
              <li data-aos="fade-up" data-aos-delay="70">
                <i
                  className="fas fa-map-marker-alt"
                  data-aos="fade-up"
                  data-aos-delay="70"
                ></i>
                Durango, Mexico
              </li>
            </ul>
          </div>
        </section>
      </Container>
      <Container fluid className="mt-5">
        <div className="copyright">
          &copy; 2022 Corporate. All Right Reserved.
        </div>
        <div className="socials">
          <ul>
            <li>
              <a href="https://www.facebook.com">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        {showTopBtn && <div className="go-top" onClick={goTop}></div>}
      </Container>
    </>
  );
}

export default Footer;
