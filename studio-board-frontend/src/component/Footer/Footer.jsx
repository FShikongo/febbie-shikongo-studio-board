import "./Footer.scss";
import { Link } from "react-router-dom";

import logo from "../../assets/StudioLogo/Studio_Logo2.png";

import facebook from "../../assets/Icons/Icon-facebook.svg";
import twitter from "../../assets/Icons/Icon-twitter.svg";
import instagram from "../../assets/Icons/Icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <a href="/">
          <img
            className="footer__logo-img"
            src={logo}
            alt="Studio Board Logo"
          />
        </a>
      </div>
      <div className="footer__container">
        <section className="footer__subscribe">
          <h3 className="footer__subscribe-title">
            Subscribe to our newsletter
          </h3>
          <p className="footer__subscribe-text">
            Sign up with your email address to receive news and updates.
          </p>
          <form
            action="https://example.com/subscribe"
            method="POST"
            className="footer__subscribe-form"
          >
            <input
              type="email"
              className="footer__subscribe-input"
              placeholder="Email Address"
              required
            />
            <button type="submit" className="footer__subscribe-button">
              Sign Up
            </button>
          </form>
        </section>

        <section className="footer__connect">
          <h3 className="footer__connect-title">Connect</h3>
          <ul className="footer__connect-list">
            <li className="footer__connect-item">
              <Link to="/jobboard">Job</Link>
            </li>
            <li className="footer__connect-item">
              <Link to="/events">Event</Link>
            </li>
            <li className="footer__connect-item">
              <Link to="/events">Network</Link>
            </li>
          </ul>
        </section>

        <section className="footer__social">
          <h3 className="footer__social-title">Follow Us</h3>
          <div className="footer__social-links">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt="Facebook"
                className="footer__social-icon"
              />
              Facebook
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <img
                src={twitter}
                alt="Twitter"
                className="footer__social-icon"
              />
              Twitter
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagram}
                alt="Instagram"
                className="footer__social-icon"
              />
              Instagram
            </a>
          </div>
        </section>
      </div>

      <section className="footer__copy">
        <p className="footer__copy-text">
          &copy; {new Date().getFullYear()} Studio Board Inc. All Rights
          Reserved.
        </p>
      </section>
    </footer>
  );
}
