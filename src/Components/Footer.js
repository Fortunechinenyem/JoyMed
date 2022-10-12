import React from "react";

const Footer = () => {
  return (
    <article className="card ">
      <footer className="footer w-100 mx-auto ">
        <div className="d-flex ">
          <div>
            <h5>Contact Information</h5>
            <ul className="social-list">
              <li className="social-list__item">Kaduna,Nigeria</li>
              <li className="social-list__item">08036396478</li>
              <li className="social-list__item">info@joymedservices.com</li>
            </ul>
          </div>
          <div>
            <h5>Quick Links</h5>
            <ul className="social-list">
              <li className="social-list__item">Find A Doctor</li>
              <li className="social-list__item">Pay Your Bill</li>
              <li className="social-list__item">Emergency</li>
              <li className="social-list__item">Careers</li>
            </ul>
          </div>
          <div>
            <ul className="social-list">
              <li className="social-list__item">
                <a className="social-list__link" href="http://linkedin.com">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="social-list__item">
                <a className="social-list__link" href="https://twitter.com">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="social-list__item">
                <a className="social-list__link" href="https://whatsapp.com">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
              <li className="social-list__item">
                <a className="social-list__link" href="https://facebook.com">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default Footer;
